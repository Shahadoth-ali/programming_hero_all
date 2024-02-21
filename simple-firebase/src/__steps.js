/**
 * 1.visit--console.firebase.google.com
 * 2.create a project(skip google analytics)
 * 3.register app (create config)
 * 4.install firebase(npm install firebase)
 * 5.add config file to your project
 * 6.DANGER:do not publish or make firebase confing to 
 * publish by pushing those to github
 * 7.go to docs-->build-->authentication-->web-->get started
 * 8.export app from the firebase.config.js file:export default app
 * 9.Login.jsx-->import getAuth from firebase/auth
 * 10.create auth,  const auth=getAuth(app)
 * 11.import google auth provider and create a new provider
 * 12.use signInWithPopUp and pass auth and provider
 * 13.activate signIn method from authentication
 * 
 */