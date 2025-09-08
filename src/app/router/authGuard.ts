import { redirect } from 'react-router'
import { auth } from '../../shared/config/firebase'
import { onAuthStateChanged } from 'firebase/auth';

/**
 * Factory function to create auth loaders for different route types
 * @param requireAuth - true: protected route, false: guest-only, undefined: public
 */
export const createAuthLoader = (requireAuth?: boolean) => {
    return async () => {
        if (auth.currentUser === null) { // (property) Auth.currentUser: User | null
            await new Promise((resolve) => {
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                    unsubscribe()
                    resolve(user)
                })
            })
        }

        const currentUser = auth.currentUser
        if (currentUser === null && requireAuth === true) {
            return redirect('/login') // sorry, have to login
        }
        if (currentUser && requireAuth === false) {
            return redirect('/')
        }

        return null
    };
};