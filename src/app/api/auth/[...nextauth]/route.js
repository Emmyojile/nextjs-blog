import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbackUrl: process.env.CALLBACK_URL,
  debug: false,
  jwt: {
      maxAge: 3 * 24 * 60 * 60,
  },
});

export {handler as GET, handler as POST};