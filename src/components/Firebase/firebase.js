
import app from 'firebase/app';
// import { timingSafeEqual } from 'crypto';
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyCAwV-lAVegXlCef2qatEOwfANreZFmpi8",
    authDomain: "fourth-year-project-skncoe.firebaseapp.com",
    databaseURL: "https://fourth-year-project-skncoe.firebaseio.com",
    projectId: "fourth-year-project-skncoe",
    storageBucket: "fourth-year-project-skncoe.appspot.com",
    messagingSenderId: "1054696690400"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // **** Auth API *******

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassowrd = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassowrd(password);
}

export default Firebase;