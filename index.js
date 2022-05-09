// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail, sendEmailVerification } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlXAFNC-TFEjyzMmr1LI9WAicK2BF1Spg",
    authDomain: "momental-bfee4.firebaseapp.com",
    projectId: "momental-bfee4",
    storageBucket: "momental-bfee4.appspot.com",
    messagingSenderId: "342962774144",
    appId: "1:342962774144:web:82ee3dc9f972211b0bc665",
    measurementId: "G-MFMYW8QQPL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//
function register_user(email,password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be in the authorized domains list in the Firebase Console.
            url: 'https://momental-bfee4.firebaseapp.com/__/auth/action?mode=action&oobCode=code',
            // This must be true.
            handleCodeInApp: true,
            iOS: {
              bundleId: 'com.example.ios'
            },
            android: {
              packageName: 'com.example.android',
              installApp: true,
              minimumVersion: '12'
            },
            
        };
        sendEmailVerification(user, actionCodeSettings).catch(error => console.error(error));
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });
} 



register_user("groberg@ucsd.edu", "apple123");