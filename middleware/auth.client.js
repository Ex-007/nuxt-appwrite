export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server) return
    const nuxtApp = useNuxtApp()
    
    if (!nuxtApp.$account) {
        console.error('Appwrite account service not available')
        return navigateTo('/')
    }
    
    try {
        const response = await nuxtApp.$account.get()
        console.log('Auth check:', response)
        
        if (response) {
            return
        } else {
            return navigateTo('/')
        }
    } catch (err) {
        console.log('Authentication error:', err.message)
        return navigateTo('/')
    }
})