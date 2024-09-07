import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any): Promise<any> {
        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPasswordHash = process.env.ADMIN_PASSWORD;

        console.log(adminUsername);
        console.log(adminPasswordHash);
        console.log(credentials.username);
        console.log(credentials.password);
        if (credentials.username == adminUsername) {
          const isValidPassword = await bcrypt.compare(
            credentials.password,
            adminPasswordHash!
          );

          console.log(isValidPassword);

          if (isValidPassword) {
            // aany object returned will be saved in `user` property of the jwtt
            return { id: 1, name: "svrjsAdmin" };
          }
        }
        // If you return null then an error will be displayed that the user to check their details.
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user info to token
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Add token info to session
      // session.user.id = token.id;
      // session.user.name = token.name;
      return session;
    }
  },
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
};
