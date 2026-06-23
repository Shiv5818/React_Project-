const config = {
    appwriteUrl :          String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId :    String(import.meta.env.VITE_PROJECT_ID),
    appwriteBucketId :     String(import.meta.env.VITE_BUCKET_ID),
    appwriteDatabaseId :   String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_COLLECTION_ID),

};
// as you know that in .env file the dataType of the variables is always a string 
// but sometimes the random id generated consisits only of numbers so it does not 
// misinterpret it to a number we convert it to a string for a safe play

export default  config;