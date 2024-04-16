import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { getDoc } from './mongodb'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (!credentials) throw new Error('No credentials')
        const user = (await getDoc({
          collection: 'users',
          filter: { username: credentials.username },
          options: {},
        })) as any
        if (!user) throw new Error('No user found')
        if (user.password !== credentials.password)
          throw new Error('Incorrect Password or UserID')
        return user
        // let user = null
        // // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
        // // logic to verify if user exists
        // user = await getUserFromDb(credentials.email, pwHash)
        // if (!user) {
        //   // No user found, so this is their first attempt to login
        //   // meaning this is also the place you could do registration
        //   throw new Error('User not found.')
        // }
        // // return user object with the their profile data
        // return user
      },
    }),
  ],
})
