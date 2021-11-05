import firebase from "firebase"

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBHd_scmhYFzh7nQhcchnEcdB2Hlu8pL-w",
    authDomain: "newproyectoclass.firebaseapp.com",
    projectId: "newproyectoclass",
    storageBucket: "newproyectoclass.appspot.com",
    messagingSenderId: "357163527762",
    appId: "1:357163527762:web:0252e1269f00403d69f98b"
};


const app = firebase.initializeApp(firebaseConfig)


// export function getFirebase(){
//     return app
// }

export function getFirestore(){    
    return firebase.firestore(app)
}
