import { Client, Account, Databases, Storage } from 'appwrite'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  const client = new Client()
    .setEndpoint(config.public.appwriteUrl)
    .setProject(config.public.appwriteProjectId)

  const account = new Account(client)
  const databases = new Databases(client)
  const storage = new Storage(client)

  return{
    provide :{
      client,
      account,
      databases,
      storage
    }
  }
})
