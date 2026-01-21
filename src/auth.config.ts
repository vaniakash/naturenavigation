import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as 'user' | 'admin';
                session.user.id = token.id as string;
            }
            return session;
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');
            const isOnAuth = nextUrl.pathname.startsWith('/login') || nextUrl.pathname.startsWith('/register');

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isOnAdmin) {
                if (isLoggedIn && auth.user.role === 'admin') return true;
                return false; // Redirect unauthenticated or non-admin users
            } else if (isLoggedIn && isOnAuth) {
                // Redirect authenticated users trying to access auth pages
                if (auth.user.role === 'admin') {
                    return Response.redirect(new URL('/admin', nextUrl));
                }
                return Response.redirect(new URL('/dashboard/user', nextUrl));
            }
            return true;
        },
    },
    providers: [], // Providers added in auth.ts
    session: {
        strategy: 'jwt',
    },
} satisfies NextAuthConfig;
