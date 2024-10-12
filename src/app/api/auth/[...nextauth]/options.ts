import { AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { LOGIN_URL } from "@/lib/apiEndPoints";

// Define custom session type
export type CustomSession = {
  user?: CustomUser;
  expires: ISODateString;
};

// Define custom user type
export type CustomUser = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  token?: string | null;
};

// NextAuth options
export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login", // Custom sign-in page
    error: "/auth/error", // Custom error page
  },
  callbacks: {
    async session({ session, token }: { session: CustomSession; token: JWT }) {
      session.user = token.user as CustomUser; // Attach user to session
      return session;
    },
    async jwt({ token, user }: { token: JWT; user: CustomUser | null }) {
      if (user) {
        token.user = user; // Attach user to token
      }
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Attempt to authenticate user
          const { data } = await axios.post(LOGIN_URL, credentials);
          const user = data?.data;

          if (user) {
            return user; // Return user if authentication is successful
          } else {
            // Return null if authentication fails
            return null;
          }
        } catch (error) {
          // Log error for debugging
          console.error("Authentication error:", error);
          throw new Error("Failed to authenticate. Please check your credentials."); // Throw an error to handle it in the UI
        }
      },
    }),
  ],
};

export default authOptions;
