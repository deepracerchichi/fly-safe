import {Account, Client, Databases, Storage} from "appwrite";

export const appwriteconfig ={
    endpointUrl : import.meta.env.VITE_APPWRITE_ENDPOINT,
    apiKey : import.meta.env.VITE_APPWRITE_API_KEY,
    projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId : import.meta.env.VITE_APPWRITE_DATABASE_ID,
    usersCollectionId : import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    tripsCollectionId : import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
}

const client = new Client()
    .setEndpoint(appwriteconfig.endpointUrl)
    .setProject(appwriteconfig.projectId)



const account= new Account(client);
const database= new Databases(client);
const storage =  new Storage(client);


export {client, account, database, storage};