import { Client, Account} from 'appwrite';

export const client = new Client();

const APPWRITE = process.env.APPWRITE
console.log(APPWRITE)
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject("676d97ec002cce6b8ae5");

export const account = new Account(client);
export { ID } from 'appwrite';
