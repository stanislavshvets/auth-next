import GoogleProvider from "next-auth/providers/google";

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
        })
        // ...add more providers here
    ],
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