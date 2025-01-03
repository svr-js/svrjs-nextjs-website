import { mailOptions, transporter } from "@/lib/nodemailer/nodemailer";
import { NextRequest, NextResponse } from "next/server";
import dns from "dns/promises";
import { isEmail, escape } from "validator";

const CONTACT_MESSAGE_FIELDS: Record<string, string> = {
  name: "Name",
  email: "Email",
  message: "Message"
};

const generateEmailContent = (data: Record<string, string>) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      str +
      (key == "captchaToken"
        ? ""
        : `${CONTACT_MESSAGE_FIELDS[key] || key}: ${val.replace(/\n/g, "\n")} \n\n`),
    ""
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      str +
      (key == "captchaToken"
        ? ""
        : `<h3 class="form-heading">${escape(
            CONTACT_MESSAGE_FIELDS[key] || key
          )}</h3><p class="form-answer">${escape(val).replace(
            /\n/g,
            "<br/>"
          )}</p>`),
    ""
  );

  return {
    text: stringData,
    html: `<!DOCTYPE html>
      <html>
      <head>
          <title>Contact Email</title>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <style type="text/css">
          body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table { border-collapse: collapse !important; }
          body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
          @media screen and (max-width: 525px) {
              .wrapper { width: 100% !important; max-width: 100% !important; }
              .responsive-table { width: 100% !important; }
              .padding { padding: 10px 5% 15px 5% !important; }
              .section-padding { padding: 0 15px 50px 15px !important; }
          }
          .form-container { margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc; }
          .form-heading { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0; }
          .form-answer { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0; }
          div[style*="margin: 16px 0;"] { margin: 0 !important; }
          </style>
      </head>
      <body style="margin: 0 !important; padding: 0 !important; background: #fff">
          <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"></div>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
              <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table">
                  <tr>
                  <td>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                          <td>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                              <td style="padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323;" class="padding message-content">
                                  <h2>New Contact Message</h2>
                                  <div class="form-container">${htmlData}</div>
                              </td>
                              </tr>
                          </table>
                          </td>
                      </tr>
                      </table>
                  </td>
                  </tr>
              </table>
              </td>
          </tr>
          </table>
      </body>
      </html>`
  };
};

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  try {
    const data = await req.json();
    console.log(data);

    // Verify hCaptcha token
    const hcaptchaResponse = await fetch(
      `https://api.hcaptcha.com/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `secret=${process.env.HCAPTCHA_SECRET}&response=${data.captchaToken}`
      }
    );

    const hcaptchaData = await hcaptchaResponse.json();

    if (!hcaptchaData.success) {
      return NextResponse.json(
        { message: "Captcha verification failed." },
        { status: 400 }
      );
    }

    // Check email address
    if (!isEmail(data.email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check email host
    const emailDomainMatch = data.email.match(/@([^@]+)/);
    const emailDomain = emailDomainMatch ? emailDomainMatch[1] : "";
    let isEmailHostValid = false;
    try {
      const mxRecords = await dns.resolveMx(emailDomain);
      if (mxRecords.length > 0) {
        for (let i = 0; i < mxRecords.length; i++) {
          try {
            const aRecords = await dns.resolve4(mxRecords[i].exchange);
            if (aRecords.length > 0) {
              isEmailHostValid = true;
              break;
            }
          } catch (err) {}
          try {
            const aaaaRecords = await dns.resolve6(mxRecords[i].exchange);
            if (aaaaRecords.length > 0) {
              isEmailHostValid = true;
              break;
            }
          } catch (err) {}
        }
      }
    } catch (err) {}
    if (!isEmailHostValid) {
      return NextResponse.json(
        { message: "Email domain is misconfigured" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: "Contact Email"
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
