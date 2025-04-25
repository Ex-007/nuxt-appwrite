import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
    const isLoading = ref(false)
    const error = ref(null)
    const canProceed = ref(false)
    const canOut = ref(false)
    const { $account } = useNuxtApp()


    // GET CURRENT SESSION
    const getCurrentSession = async () => {
        isLoading.value  = true
        error.value = null
        try {
            const response = await $account.get()
        } catch (err) {
            error.value = err.message
        } finally{
            isLoading.value = false
        }
    }

    // REGISTERING A USER
    const registration = async(userDetails) => {
        isLoading.value = true
        error.value = null

        if(userDetails.email == '' || userDetails.password == '' || userDetails.name == ''){
            error.value = 'Please Fill All Details'
            return
        }

        try {
            const email = userDetails.email
            const password = userDetails.password
            const name = userDetails.name

            const response = await $account.create('unique()', email, password, name)
            await login(userDetails)
        } catch (err) {
            error.value = err.message
        } finally{
            isLoading.value = false
        }
    }

    // LOGIN IN
    const login = async (userDetails) => {
        isLoading.value = true
        error.value = null

        if(userDetails.email == '' || userDetails.password == '' || userDetails.name == ''){
            error.value = 'Please Fill All Details'
            return
        }

        try {
            const email = userDetails.email
            const password = userDetails.password
            const response = await $account.createEmailPasswordSession(email, password)
            canProceed.value = true
        } catch (err) {
            error.value = err.message
        }finally{
            isLoading.value = false
        }
    }

    // LOGOUT
    const logout = async () => {
        isLoading.value = true
        error.value = null
        try {
            const response = await $account.deleteSession('current');
            canOut.value = true
        } catch (err) {
            error.value = err.message
        }finally{
            isLoading.value = false
        }
    }
    
    return{
        isLoading,
        error,
        registration,
        login,
        logout,
        getCurrentSession,
        canProceed,
        canOut

    }
})