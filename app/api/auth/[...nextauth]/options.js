import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import {SigninAdmin} from "@/app/lib/SigninAdmin";
import {use} from "bcrypt/promises";
const bcrypt = require('bcrypt');


export const options = {

    // Configure one or more authentication providers
    providers: [
        GoogleProvider({

            profile(profile) {

                console.log('GOOGLE PROFILE--->', profile);

                // let userRole = "Google User";
                // if(profile?.email == "stanislavshvets.com@gmail.com") {
                //     userRole = "ADMIN"
                // }

                return {
                  ...profile,
                    id: profile.sub,
                    image: profile.picture
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
            async authorize (credentials){

                console.log("credentials--->", credentials)

                const { login, password } = credentials;

                if (!login || !password) return null;

                try {
                    const currentUser = await SigninAdmin(login);

                    console.log("currentUser--->", currentUser)

                    if (!currentUser || !currentUser.data || !currentUser.data.password) return null;

                    const passwordMatch = await bcrypt.compare(password, currentUser.data.password);

                    console.log("passwordMatch--->", passwordMatch)

                    if (passwordMatch) {
                        const { password, ...user } = currentUser.data;
                        return {user: user}
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Authorization Error:', error);
                    return null;
                }

                // const salt = process.env.SECRET_SALT
                // console.log("credentials--->", credentials)
                // if(!credentials?.login || !credentials.password) return null;
                //
                // const hashPassword = await bcrypt.hash(credentials.password, +salt)
                // console.log("hashPassword--->", hashPassword)
                //
                // const currentUser = await SigninAdmin(credentials.login, hashPassword)
                //
                // console.log("currentUser--->", currentUser)
                // console.log("currentUser.data.login--->", currentUser.data.login)
                // console.log("currentUser.data.password--->", currentUser.data.password)
                //
                // if(currentUser){
                //     if(currentUser.data.login === credentials.login && currentUser.data.password === hashPassword) {
                //
                //         const {password, ...userWithoutPass} = currentUser.data
                //
                //         return userWithoutPass ;
                //     }else return null
                // }else return null

            }
        })
        // ...add more providers here
    ],

    pages: {
        signIn: '/signin'
    }

    // callbacks: {
    //     async jwt({ token, user }){
    //         if (user) token.role = user.role;
    //         return token
    //     },
    //     async session({ session, token }){
    //         if (session?.user) session.user.role = token.role
    //         return session
    //     }
    // }
}
