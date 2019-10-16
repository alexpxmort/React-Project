import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
const config  = {
    apiKey: "AIzaSyBNHUwAisZ71chzRy0_6Cf90fNTnW7zST4",
    authDomain: "shopx-b84f3.firebaseapp.com",
    databaseURL: "https://shopx-b84f3.firebaseio.com",
    projectId: "shopx-b84f3",
    storageBucket: "gs://shopx-b84f3.appspot.com",
    messagingSenderId: "1000393539142",
    appId: "1:1000393539142:web:9aacf46547b7e9c768d447"
  };    

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const{displayName,email} = userAuth;
          const createdAt = new Date();

          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          }catch(err){
            console.log('error creating user',err.message);
          }
      }

      return userRef;
  }




  export const getCategories = async ()=>{
    const catRef = firestore.doc(`data/c1sM9508B8RhbNUSbo3C/`);

    const snapShot = await catRef.get();

    return snapShot;
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const faceProvider  = new firebase.auth.FacebookAuthProvider();
faceProvider.addScope('user_birthday');
faceProvider.setCustomParameters({
    'display': 'popup'
  })

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;