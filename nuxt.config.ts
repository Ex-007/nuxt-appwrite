// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: [
    "~/assets/css/global.css",
  ],
  runtimeConfig:{
    public:{
      appwriteUrl : 'https://fra.cloud.appwrite.io/v1',
      appwriteProjectId: process.env.appwriteProjectId
    }
  }
})
