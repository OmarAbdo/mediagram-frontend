import { redirect } from 'react-router'
import { auth } from '../../shared/config/firebase'

export const createAuthLoader = (requireAuth?: boolean) => {
    return async () => {
        const currentUser = auth.currentUser
        if (!currentUser && requireAuth) {
            return redirect('/login')
        }
        if (currentUser && !requireAuth) {
            return redirect('/')
        }
        return null
    };
};