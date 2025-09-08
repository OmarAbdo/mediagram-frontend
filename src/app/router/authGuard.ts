import { redirect } from 'react-router'
import { auth } from '../../shared/config/firebase'
import { onAuthStateChanged } from 'firebase/auth';

/**
 * Factory function to create auth loaders for different route types
 * @param requireAuth - true: protected route, false: guest-only, undefined: public
 */
export const createAuthLoader = (requireAuth?: boolean) => {
    return async () => {
        if (auth.currentUser === undefined) {
            await new Promise((resolve) => {
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                    unsubscribe()
                    resolve(user)
                })
            })
        }

        const currentUser = auth.currentUser
        console.log("currentUser", currentUser)
        console.log("requireAuth", requireAuth)
        console.log("---------")
        // we don't have a user but it's a user page
        if (currentUser === null && requireAuth) {
            console.log("4")
            return redirect('/login') // sorry, have to login
        }
        // we do have a user but it's a visitor-only page
        if (currentUser && !requireAuth) {
            console.log("5")
            return redirect('/') // sorry, but this page doesn't make any sense to you, I'm sending you to the home page
        }

        console.log("do i ever get printed out?")
        return null
    };
};