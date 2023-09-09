import { connectDB, prisma } from "@/prisma";
import { compareHash } from "@/utils";
import { User } from "@prisma/client";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        await connectDB()
        const userDB = await prisma.user.findFirst({ where: { email: credentials?.email } })
        if (!userDB) {
          throw new Error('Invalid credentials')
        }

        const passwordMatch = compareHash(credentials!.password, userDB!.password)
        if (!passwordMatch) {
          throw new Error('Invalid credentials')
        }
        return userDB;
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      const currentUser = user as User
      if (user) {
        token.user = {
          id: currentUser.id,
          email: currentUser.email,
          name: currentUser.name,
          lastname: currentUser.lastname,
        }
      }
      return token
    },
    session: ({ session, token }) => {
      session.user = token.user as User
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
})


export { handler as GET, handler as POST }