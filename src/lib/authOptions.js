import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isExist = await dbConnect(collections.USERS).findOne({
        email: user.email,
        // provider: account?.provider,
      });
      if (isExist) return true;

      const newUSer = {
        provider: account?.provider,
        name: user.name,
        email: user.email,
        image: user.image,
        role: "user",
      };
      const result = await dbConnect(collections.USERS).insertOne(newUSer);
      if (result.acknowledged) {
        return {
          ...result,
          insertedId: result.insertedId.toString(),
        };
      }
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, token, user }) {
      if (session) {
        session.role = token?.role;
        session.email = token?.email;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        if (account.provider === "google") {
          const dbUser = await dbConnect(collections.USERS).findOne({
            email: user.email,
          });
          token.role = dbUser?.role;
          token.email = dbUser?.email;
        } else {
          token.role = user?.role;
          token.email = user?.email;
        }
      }
      return token;
    },
  },
};
