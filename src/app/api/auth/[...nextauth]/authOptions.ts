import type { AuthOptions } from 'next-auth'
import { getServerSession as NEXT_AUTH_getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { getDoc } from '../../mongodb'

// Auth Wrapper:
export const getServerSession = async () =>
    await NEXT_AUTH_getServerSession(AUTH_OPTIONS)

// Auth Options:
export const AUTH_OPTIONS: AuthOptions = {
    session: {
        maxAge: 7 * 24 * 60 * 60, // 7 days
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'username', type: 'text' },
                password: { label: 'password', type: 'password' },
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
            },
        }),
    ],
}

