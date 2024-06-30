import { BadgeAlert, BarChart4, Cog, ShieldCheck } from "lucide-react";
import { Download, Home, Settings, User } from "lucide-react";

export const NAVBAR = {
	centerLinks: [
		{
			href: "/",
			target: "_self",
			label: "Home",
		},
		{
			href: "/docs",
			target: "_self",
			label: "Docs",
		},
		{
			href: "/forum",
			target: "_self",
			label: "Forum",
		},
		{
			href: "/blog",
			target: "_self",
			label: "Blog",
		},
	],
	rightLinks: [
		{
			label: "Git",
			target: "_blank",
			href: "https://git.svrjs.org/",
		},
	],
};

export const stats = [
	{
		title: "Downloads",
		count: 69,
	},
	{
		title: "Users",
		count: 42,
	},
	{
		title: "Stars",
		count: 6,
	},
	{
		title: "Products",
		count: 2,
	},
];

export const Features = [
	{
		icon: <ShieldCheck className="w-10 h-10 text-primary" />,
		title: "Complete Secured ",
		description:
			"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
	},
	{
		icon: <BadgeAlert className="w-10 h-10 text-primary" />,
		title: "Best Support",
		description:
			"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
	},
	{
		icon: <BarChart4 className="w-10 h-10 text-primary" />,
		title: "Most Scalable ",
		description:
			"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
	},
	{
		icon: <Cog className="w-10 h-10 text-primary" />,
		title: "Fully Configurable ",
		description:
			"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
	},
];

export const questions = [
	{
		key: "item-1",
		question: "What is a web server?",
		answer:
			"A web server is computer software that accepts HTTP requests and serves websites. Web servers can also be underlying hardware running web server software.",
	},
	{
		key: "item-2",
		question: "What is SVR.JS?",
		answer:
			"SVR.JS is web server software running on Node.JS that can host both static and dynamic content. With additional mods, SVR.JS can be used for different types of dynamic content and can even be used as a forward or reverse proxy. SVR.JS is licensed under a permissive MIT/X11 license",
	},
	{
		key: "item-3",
		question: "How was SVR.JS created?",
		answer:
			"Someone in 2018 wanted to create a website, but he didnt know about setting up popular web server software like Apache httpd, NGINX, or IIS... So he created his own web server in Node.JS to serve his website! And he saved it in a file called svr.js. Since then, this web server has been gradually turned from a web server intended for one website into a general-purpose web server, which is what SVR.JS is today!",
	},
	{
		key: "item-4",
		question: "How did SVR.JS get its name?",
		answer:
			"SVR.JS got its name from the original name of the server script: svr.js, one of many generic file names for a server written in JavaScript.",
	},
	{
		key: "item-5",
		question: "What is Node.JS?",
		answer:
			"Node.JS is an asynchronous event-driven JavaScript runtime built on Chromiums V8 engine. Node.JS is designed to build scalable network applications.",
	},
	{
		key: "item-6",
		question: "How can I use SVR.JS?",
		answer:
			"You can read the documents to learn how to use the SVR.JS web server.",
	},
];

export const FOOTERLINKS = {
	otherPages: [
		{ href: "/", label: "Home" },
		{ href: "/contact", label: "Contact" },
		{ href: "/blog", label: "Blog" },
		{ href: "/forum", label: "Forum" },
		{ href: "/changelogs", label: "Change Logs" },
	],
	plans: [
		{ href: "/docs", label: "Docs" },
		{ href: "/downloads", label: "Downloads" },
		{ href: "/mods", label: "Svrjs Mods" },
		{ href: "/tos", label: "Terms of Serivce" },
		{ href: "/privacy-policy", label: "Privacy Policy" },
	],
	social: {
		supportText: "Support Us on Socials",
	},
	footerBottom: {
		designedBy: {
			href: "https://abhijee.com",
			label: "Proxy",
		},
		rightsReserved: {
			href: "https://cyprostudio.com",
			label: "SVRJS",
		},
	},
};

export const AdminLinks = [
	{
		name: "Dashboard",
		url: "/admin",
		icon: Home,
	},
	{
		name: "Downloads",
		url: "/admin/downloads",
		icon: Download,
	},
	{
		name: "Mods",
		url: "/admin/mods",
		icon: User,
	},
	{
		name: "Logs",
		url: "/admin/changelogs",
		icon: Settings,
	},
	{
		name: "Back Home",
		url: "/",
		icon: Home,
	},
];

export const PRIVACY_POLICY = `
<p>
					<strong>Effective date: 26.05.2024</strong>
				</p>

				<h3>1. Introduction</h3>
				<p>
					Welcome to SVR.JS. SVR.JS (“us”, “we”, or “our”) operates svrjs.org
					(hereinafter referred to as “Service”). Our Privacy Policy governs
					your visit to svrjs.org and explains how we collect, safeguard, and
					disclose information that results from your use of our Service. We use
					your data to provide and improve Service. By using Service, you agree
					to the collection and use of information in accordance with this
					policy. Unless otherwise defined in this Privacy Policy, the terms
					used in this Privacy Policy have the same meanings as in our Terms and
					Conditions. Our Terms and Conditions (“Terms”) govern all use of our
					Service and together with the Privacy Policy constitutes your
					agreement with us (“agreement”).
				</p>

				<h3>2. Definitions</h3>
				<ul>
					<li>
						<strong>SERVICE</strong> means the svrjs.org website operated by
						SVR.JS.
					</li>
					<li>
						<strong>PERSONAL DATA</strong> means data about a living individual
						who can be identified from those data (or from those and other
						information either in our possession or likely to come into our
						possession).
					</li>
					<li>
						<strong>USAGE DATA</strong> is data collected automatically either
						generated by the use of Service or from Service infrastructure
						itself (for example, the duration of a page visit).
					</li>
					<li>
						<strong>COOKIES</strong> are small files stored on your device
						(computer or mobile device).
					</li>
					<li>
						<strong>DATA CONTROLLER</strong> means a natural or legal person who
						(either alone or jointly or in common with other persons) determines
						the purposes for which and the manner in which any personal data
						are, or are to be, processed. For the purpose of this Privacy
						Policy, we are a Data Controller of your data.
					</li>
					<li>
						<strong>DATA PROCESSORS (OR SERVICE PROVIDERS)</strong> means any
						natural or legal person who processes the data on behalf of the Data
						Controller. We may use the services of various Service Providers in
						order to process your data more effectively.
					</li>
					<li>
						<strong>DATA SUBJECT</strong> is any living individual who is the
						subject of Personal Data.
					</li>
					<li>
						<strong>THE USER</strong> is the individual using our Service. The
						User corresponds to the Data Subject, who is the subject of Personal
						Data.
					</li>
				</ul>

				<h3>3. Information Collection and Use</h3>
				<p>
					We collect several different types of information for various purposes
					to provide and improve our Service to you.
				</p>

				<h3>4. Types of Data Collected</h3>
				<h4>Personal Data</h4>
				<p>
					While using our Service, we may ask you to provide us with certain
					personally identifiable information that can be used to contact or
					identify you (“Personal Data”). Personally identifiable information
					may include, but is not limited to: Email address. We may use your
					Personal Data to contact you with newsletters, marketing or
					promotional materials, and other information that may be of interest
					to you. You may opt out of receiving any, or all, of these
					communications from us by following the unsubscribe link.
				</p>

				<h4>Usage Data</h4>
				<p>
					We may collect information that your browser sends whenever you visit
					our Service or when you access Service by or through any device
					(“Usage Data”). This Usage Data may include information such as your
					computer’s Internet Protocol address (e.g., IP address), browser type,
					browser version, the pages of our Service that you visit, the time and
					date of your visit, and other diagnostic data. When you access Service
					with a device, this Usage Data may include information such as the
					type of device you use, the IP address of your device, your device
					operating system, the type of Internet browser you use, and other
					diagnostic data.
				</p>

				<h4>Tracking Cookies Data</h4>
				<p>
					We don’t use any cookies for tracking on our Service. You can,
					however, set a cookie that allows opt-out from Matomo analytics using
					a form in Section 14.
				</p>

				<h3>5. Use of Data</h3>
				<p>
					SVR.JS uses the collected data for various purposes: to provide and
					maintain our Service; to allow you to participate in interactive
					features of our Service when you choose to do so; to provide customer
					support; to gather analysis or valuable information so that we can
					improve our Service; to monitor the usage of our Service; to detect,
					prevent and address technical issues; to fulfill any other purpose for
					which you provide it; in any other way we may describe when you
					provide the information; for any other purpose with your consent.
				</p>

				<h3>6. Retention of Data</h3>
				<p>
					We will retain Usage Data for internal analysis purposes. Usage Data
					is generally retained for a shorter period, except when this data is
					used to strengthen the security or to improve the functionality of our
					Service, or we are legally obligated to retain this data for longer
					time periods.
				</p>

				<h3>7. Transfer of Data</h3>
				<p>
					Your information may be transferred to and maintained on – computers
					located outside of your state, province, country or other governmental
					jurisdiction where the data protection laws may differ from those of
					your jurisdiction. If you are located outside Poland and choose to
					provide information to us, please note that we transfer the data to
					Poland and process it there. Your consent to this Privacy Policy
					followed by your submission of such information represents your
					agreement to that transfer. SVR.JS will take all the steps reasonably
					necessary to ensure that your data is treated securely and in
					accordance with this Privacy Policy and no transfer of your data will
					take place to an organization or a country unless there are adequate
					controls in place including the security of your data and other
					personal information.
				</p>

				<h3>8. Disclosure of Data</h3>
				<p>We don’t disclose any information that we collect.</p>

				<h3>9. Security of Data</h3>
				<p>
					The security of your data is important to us but remember that no
					method of transmission over the Internet or method of electronic
					storage is 100% secure. While we strive to use commercially acceptable
					means to protect your Personal Data, we cannot guarantee its absolute
					security.
				</p>

				<h3>
					10. Your Data Protection Rights Under General Data Protection
					Regulation (GDPR)
				</h3>
				<p>
					If you are a resident of the European Union (EU) and European Economic
					Area (EEA), you have certain data protection rights, covered by GDPR.
					We aim to take reasonable steps to allow you to correct, amend,
					delete, or limit the use of your Personal Data. If you wish to be
					informed what Personal Data we hold about you and if you want it to be
					removed from our systems, please email us at privacy[at]svrjs[dot]org.
					In certain circumstances, you have the following data protection
					rights:
				</p>
				<ul>
					<li>
						The right to access, update or to delete the information we have on
						you;
					</li>
					<li>
						The right of rectification. You have the right to have your
						information rectified if that information is inaccurate or
						incomplete;
					</li>
					<li>
						The right to object. You have the right to object to our processing
						of your Personal Data;
					</li>
					<li>
						The right of restriction. You have the right to request that we
						restrict the processing of your personal information;
					</li>
					<li>
						The right to data portability. You have the right to be provided
						with a copy of your Personal Data in a structured, machine readable
						and commonly used format;
					</li>
					<li>
						The right to withdraw consent. You also have the right to withdraw
						your consent at any time where we rely on your consent to process
						your personal information;
					</li>
				</ul>
				<p>
					Please note that we may ask you to verify your identity before
					responding to such requests. Please note, we may not be able to
					provide Service without some necessary data.
				</p>

				<h3>
					11. Your Data Protection Rights under the California Privacy
					Protection Act (CalOPPA)
				</h3>
				<p>
					CalOPPA is the first state law in the nation to require commercial
					websites and online services to post a privacy policy. The law&apos;s reach
					stretches well beyond California to require a person or company in the
					United States (and conceivable the world) that operates websites
					collecting personally identifiable information from California
					consumers to post a conspicuous privacy policy on its website stating
					exactly the information being collected and those individuals with
					whom it is being shared, and to comply with this policy. According to
					CalOPPA we agree to the following:
				</p>
				<ul>
					<li>Users can visit our site anonymously;</li>
					<li>
						Our Privacy Policy link includes the word “Privacy”, and can easily
						be found on the home page of our website;
					</li>
					<li>
						Users will be notified of any privacy policy changes on our Privacy
						Policy Page;
					</li>
					<li>
						Users are able to change their personal information by emailing us
						at privacy[at]svrjs[dot]org.
					</li>
				</ul>

				<h3>
					12. Your Data Protection Rights under the California Consumer Privacy
					Act (CCPA)
				</h3>
				<p>
					If you are a California resident, you are entitled to learn what data
					we collect about you, ask to delete your data and not to sell (share)
					it. To exercise your data protection rights, you can make certain
					requests and ask us:
				</p>
				<ul>
					<li>
						What personal information we have about you. If you make this
						request, we will return to you:
					</li>
					<ul>
						<li>
							The categories of personal information we have collected about
							you;
						</li>
						<li>
							The categories of sources from which we collect your personal
							information;
						</li>
						<li>
							The business or commercial purpose for collecting or selling your
							personal information;
						</li>
						<li>
							The categories of third parties with whom we share personal
							information;
						</li>
						<li>
							The specific pieces of personal information we have collected
							about you;
						</li>
						<li>
							A list of categories of personal information that we have sold,
							along with the category of any other company we sold it to. If we
							have not sold your personal information, we will inform you of
							that fact;
						</li>
						<li>
							A list of categories of personal information that we have
							disclosed for a business purpose, along with the category of any
							other company we shared it with.
						</li>
					</ul>
					<li>
						Please note, you are entitled to ask us to provide you with this
						information up to two times in a rolling twelve-month period. When
						you make this request, the information provided may be limited to
						the personal information we collected about you in the previous 12
						months.
					</li>
					<li>
						To delete your personal information. If you make this request, we
						will delete the personal information we hold about you as of the
						date of your request from our records and direct any service
						providers to do the same. In some cases, deletion may be
						accomplished through de-identification of the information. If you
						choose to delete your personal information, you may not be able to
						use certain functions that require your personal information to
						operate.
					</li>
					<li>
						To stop selling your personal information. We don&apos;t sell or rent
						your personal information to any third parties for any purpose. We
						do not sell your personal information for monetary consideration.
						However, under some circumstances, a transfer of personal
						information to a third party, or within our family of companies,
						without monetary consideration may be considered a “sale” under
						California law. You are the only owner of your Personal Data and can
						request disclosure or deletion at any time.
					</li>
				</ul>
				<p>
					If you submit a request to stop selling your personal information, we
					will stop making such transfers. Please note, if you ask us to delete
					or stop selling your data, it may impact your experience with us, and
					you may not be able to participate in certain programs or membership
					services which require the usage of your personal information to
					function. But in no circumstances, we will discriminate against you
					for exercising your rights.
				</p>
				<p>
					To exercise your California data protection rights described above,
					please send your request(s) by email: privacy[at]svrjs[dot]org. Your
					data protection rights, described above, are covered by the CCPA,
					short for the California Consumer Privacy Act. To find out more, visit
					the official California Legislative Information website. The CCPA took
					effect on 01.01.2020.
				</p>

				<h3>13. Service Providers</h3>
				<p>
					We may employ third-party companies and individuals to facilitate our
					Service (“Service Providers”), provide Service on our behalf, perform
					Service-related services, or assist us in analysing how our Service is
					used. These third parties have access to your Personal Data only to
					perform these tasks on our behalf and are obligated not to disclose or
					use it for any other purpose.
				</p>

				<h3>14. Analytics</h3>
				<p>
					We are using a self-hosted Matomo instance at analytics.svrjs.org to
					monitor and analyse the use of our Service. You may choose to prevent
					this website from aggregating and analysing the actions you take here.
					Doing so will protect your privacy, but will also prevent the owner
					from learning from your actions and creating a better experience for
					you and other users. To make that choice, please click below to
					receive an opt-out cookie. You are currently opted out because Matomo
					analytics are blocked.
				</p>

				<h3>15. CI/CD Tools</h3>
				<p>
					We may use third-party Service Providers to automate the development
					process of our Service.
				</p>

				<h3>16. Behavioral Remarketing</h3>
				<p>
					We may use remarketing services to advertise on third-party websites
					to you after you visited our Service. We and our third-party vendors
					use cookies to inform, optimize and serve ads based on your past
					visits to our Service.
				</p>

				<h3>17. Links to Other Sites</h3>
				<p>
					Our Service may contain links to other sites that are not operated by
					us. If you click a third-party link, you will be directed to that
					third party&apos;s site. We strongly advise you to review the Privacy
					Policy of every site you visit. We have no control over and assume no
					responsibility for the content, privacy policies or practices of any
					third-party sites or services.
				</p>

				<h3>18. Children&apos;s Privacy</h3>
				<p>
					Our Services are not intended for use by children under the age of 18
					(“Child” or “Children”). We do not knowingly collect personally
					identifiable information from Children under 18. If you become aware
					that a Child has provided us with Personal Data, please contact us. If
					we become aware that we have collected Personal Data from Children
					without verification of parental consent, we take steps to remove that
					information from our servers.
				</p>

				<h3>19. Changes to This Privacy Policy</h3>
				<p>
					We may update our Privacy Policy from time to time. We will notify you
					of any changes by posting the new Privacy Policy on this page. We will
					let you know via a prominent notice on our Service, prior to the
					change becoming effective and update the “effective date” at the top
					of this Privacy Policy. You are advised to review this Privacy Policy
					periodically for any changes. Changes to this Privacy Policy are
					effective when they are posted on this page.
				</p>

				<h3>20. Contact Us</h3>
				<p>
					If you have any questions about this Privacy Policy, please contact us
					by email: privacy[at]svrjs[dot]org.
				</p>
`;

export const TERMS_AND_CONDITIONS = `
Last updated: 24.04.2024

1. Introduction
Welcome to SVR.JS (“Company”, “we”, “our”, “us”)!

*These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at svrjs.org (together or individually “Service”) operated by SVR.JS.*

**Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.**

Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.

If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at support[at]svrjs[dot]org so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.

2. Content
Content found on or through this Service are the property of SVR.JS or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, unless stated otherwise.

3. Prohibited Uses
You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:

* In any way that violates any applicable national or international law or regulation.
* For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.
* To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.
* To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.
* In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
* To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.

Additionally, you agree not to:

* Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party’s use of Service, including their ability to engage in real time activities through Service.
* Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.
* Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.
* Use any device, software, or routine that interferes with the proper working of Service.
* Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.
* Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.
* Attack Service via a denial-of-service attack or a distributed denial-of-service attack.
* Take any action that may damage or falsify Company rating.
* Otherwise attempt to interfere with the proper working of Service.

4. Analytics
We may use third-party Service Providers to monitor and analyze the use of our Service.

5. Intellectual Property
Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of SVR.JS and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of SVR.JS.

6. Copyright Policy
We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.

If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to support[at]svrjs[dot]org, with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”

You may be held accountable for damages (including costs and attorneys’ fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.

7. DMCA Notice and Procedure for Copyright Infringement Claims
You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):

* An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright’s interest;
* A description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;
* Identification of the URL or other specific location on Service where the material that you claim is infringing is located;
* Your address, telephone number, and email address;
* A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
* A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.

You can contact our Copyright Agent via email at dorian[dot]niemiec[at]svrjs[dot]org.

8. Error Reporting and Feedback
You may provide us either directly at support[at]svrjs[dot]org or via third party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“Feedback”). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.

9. Links To Other Web Sites
Our Service may contain links to third party web sites or services that are not owned or controlled by SVR.JS.

SVR.JS has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.

**YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.**

**WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.**

10. Disclaimer Of Warranty
**THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.**

**NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.**

**COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.**

**THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.**

11. Limitation Of Liability
**EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.**

12. Termination
We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.

If you wish to terminate your account, you may simply discontinue using Service.

All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.

13. Governing Law
These Terms shall be governed and construed in accordance with the laws of Poland, which governing law applies to agreement without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.

14. Changes To Service
We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.

15. Amendments To Terms
We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.

Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.

By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.

16. Waiver And Severability
No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.

If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.

17. Acknowledgement
BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.

18. Contact Us
Please send your feedback, comments, requests for technical support by email: support[at]svrjs[dot]org.
`;
