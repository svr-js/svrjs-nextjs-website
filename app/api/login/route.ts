// import { NextResponse } from 'next/server';
// import { setCookie } from 'nookies';
// require('dotenv').config();

// // nvm, clerk is overkill for one u

// export async function POST(request: NextApiRequest) {
//   const { username, password } = await request.json();
//   console.log(username, password);
//   console.log(process.env.PASSWORD);

//   if (username === process.env.USERNAME && password === process.env.PASSWORD) {
//     const response = NextResponse.json(
//       { message: 'Login successful' },
//       { status: 200 }
//     );

//     setCookie({ res: response }, 'token', 'your-auth-token', {
//       httpOnly: true,
//       secure: process.env.NODE_ENV !== 'development',
//       maxAge: 30 * 24 * 60 * 60,
//       path: '/',
//     });

//     return response;
//   } else {
//     return NextResponse.json({ message: 'Login failed' }, { status: 401 });
//   }
// }

// im gonna create server actions
