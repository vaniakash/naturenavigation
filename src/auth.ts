import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log('Attempting login for:', credentials?.email);

                if (!credentials?.email || !credentials?.password) {
                    console.log('Missing credentials');
                    return null;
                }

                try {
                    await dbConnect();
                    const user = await User.findOne({ email: credentials.email });

                    if (!user) {
                        console.log('User not found in DB');
                        return null;
                    }

                    // If user has no password (e.g. Google-only account) and tries to login with credentials
                    if (!user.password) {
                        console.log('User has no password set (OAuth account)');
                        return null;
                    }

                    const isPasswordValid = await bcrypt.compare(
                        credentials.password as string,
                        user.password
                    );

                    if (!isPasswordValid) {
                        console.log('Invalid password for user:', user.email);
                        return null;
                    }

                    console.log('Login successful for:', user.email);
                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name,
                        role: user.role,
                    };
                } catch (error) {
                    console.error('Auth error:', error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === 'google') {
                try {
                    await dbConnect();
                    if (!user.email) return false; // Ensure email exists

                    const existingUser = await User.findOne({ email: user.email });

                    if (!existingUser) {
                        // Create new user
                        await User.create({
                            name: user.name || 'Google User',
                            email: user.email,
                            image: user.image || undefined,
                            // No password for OAuth users
                        });
                    }
                    return true;
                } catch (error) {
                    console.error('Error saving Google user:', error);
                    return false;
                }
            }
            return true; // Return true for other providers (credentials)
        },
        ...authConfig.callbacks, // Include callbacks from config if any additional ones are needed/merged
    }
});
