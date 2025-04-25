import { defineStore } from "pinia";

export const useUserStore = defineStore('users', () => {
    const isLoading = ref(false)
    const error = ref(null)
    const signedInUser = ref(null)

    const {$account} = useNuxtApp()

    // GET CURRENT SESSION
    const getCurrentSession = async () => {
        isLoading.value  = true
        error.value = null
        try {
            const response = await $account.get()
            signedInUser.value = response
        } catch (err) {
            error.value = err.message
            console.log(err.message)
        }finally{
            isLoading.value = false
        }
    }

















    return{
        isLoading,
        error,
        getCurrentSession,
        signedInUser
    }
})