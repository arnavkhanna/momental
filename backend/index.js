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

const auth = getAuth();
auth.languageCode = 'it';

window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
}, auth);

window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  'size': 'normal',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // ...
  },
  'expired-callback': () => {
    // Response expired. Ask user to solve reCAPTCHA again.
    // ...
  }
}, auth);

const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;

function register_user(phoneNumber,appVerifier){
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
}

confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  // ...
}).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
});

register_user("6197720624","")