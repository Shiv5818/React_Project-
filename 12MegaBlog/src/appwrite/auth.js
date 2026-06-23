import config from './config.js';


import {Client , Account , ID} from "appwrite";


/*
const account = new Account(client);


const user = await client.create(
    ID.unique(),
    'email@example.com',
    'password'

);
*/

// in the above approach what we are doing is like we are creating and putting the values manually in the
// now we want to create it as a service because whenever we click the register button this service is called and value is passed
// we can write in the ui too but we dont want to mix the code of the ui and the bussiness logic at the same place it is not a clean code at the end of the day



export class AuthService{
    client  = new Client()

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl) // endpoint is nothing but the appwrite url 
        .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){ // we have destructured here whoever will pass the method  it will give the object which will have all the values  
          try{
         const userAccount =     await this.account.create(ID.unique(),email,password, name); // first para should be id as mentioned in the documentation 

              if(userAccount){
               // call another method 
               // thing is if userAccount exists or it is created we could make the user login or tell him the account does exist

               return this.login({email,password});
              }
              else {
                  return userAccount;
              }
          }
          catch(error){
                 throw error;
          }
    }

    async login({email,password}){
        try{
            // no need to store the value in the constant and then returning it we could directlt return it;
       return   await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            throw error;
        }

        return null; // if in case there is an error 
    }

    async getCurrentUser(){
        try {
        

           return  await this.account.get();
        }

        catch(error){
            console.log("Appwrite service:: getcurrentUser:: error", error);
        }
    }

     async logout(){
        try{
          await this.account.deleteSessions()
        }
        catch(error){
            throw error;
        }
     }

};



const authService = new AuthService(); // authService is an object and the other is a constructor



export default AuthService;
