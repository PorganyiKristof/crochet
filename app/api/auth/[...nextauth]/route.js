import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        async signIn({
            user,
            account,
            profile,
            email,
            credentials
        }) {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        }
    }
}
const handlerAuth = NextAuth(handler)
export {
    handlerAuth as GET, handlerAuth as POST
}