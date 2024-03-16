import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import {SigninAdmin} from "@/app/lib/SigninAdmin";
const bcrypt = require('bcrypt');

export const options = {

    providers: [
        GoogleProvider({

            profile(profile) {

                let userRole = "Google User";
                if(profile?.email == process.env.GOOGLE_EMAIL) {
                    userRole = "admin"
                }

                return {
                  ...profile,
                    id: profile.sub,
                    image: profile.picture,
                    role: userRole
                }
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({

            credentials: {
                login: { label: 'login', type: 'login' },
                password: { label: 'password', type: 'password' },
            },
            async authorize (credentials, req){

                const { login, password } = credentials;

                if (!login || !password) return null;

                try {
                    const currentUser = await SigninAdmin(login);

                    if (!currentUser || !currentUser.data || !currentUser.data.password) return null;

                    const passwordMatch = await bcrypt.compare(password, currentUser.data.password);

                    if (passwordMatch) {
                        const { password, ...user } = currentUser.data;
                        return  {
                            name: user.login,
                            email: user.login,
                            role: user.role
                        }
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Authorization Error:', error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/signin'
    },
    callbacks: {

        async jwt({ token, user }){
            if (user) token.role = user.role;
            return token
        },

        async session({ session, token }){
            if(session?.user) session.user.role = token.role
            return session
        }
    }
}
