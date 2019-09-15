import firebase from './node_modules/firebase'
import Axios from './node_modules/axios';

class Firebase {

    constructor(){
        
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

        this.firebaseConfig = {
            apiKey: "AIzaSyCspKcdQP7dga2-TEnqYWOIlylipfs8aO4",
            authDomain: "lere-a4fe1.firebaseapp.com",
            databaseURL: "https://lere-a4fe1.firebaseio.com",
            projectId: "lere-a4fe1",
            storageBucket: "lere-a4fe1.appspot.com",
            messagingSenderId: "306773820021",
            appId: "1:306773820021:web:a68da8fce367d00930ee3c"
        }
    }


    userLogged(callback){

        firebase
            .auth()
            .onAuthStateChanged(function(user) {
                if(callback){
                    if(user){ callback(user) }
                    else { callback(false) }
                }
            })
    }

    save(route, data, callback){
        this.userLogged(user => {

            if(user){
                firebase
                    .database()
                    .ref( (route ? '/users/' : '/') + user.uid +  route)
                    .set(data, callback)
            }
    
            else {    
                callback(false);
            }
            
        })
    }

    get(route, callback ){

        const starCountRef = firebase
            .database()
            .ref(route);

        starCountRef
            .on('value', snapshot => callback(snapshot.val()) );
    }

    createUser(email, password, callback){
       
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                var { code, message } = error.code;
                if(callback){
                    if(code){ callback(code, message)}
                    else { callback(false) }
                }

            });
    }

    login(email, password, callback){
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function(error) {
                var { code, message } = error.code;
                if(callback){
                    if(code){ callback(code, message)}
                    else { callback(false) }
                }
            });
    }

    saveImage(imageBase64, callback){
        
        Axios
            .post('https://us-central1-lere-a4fe1.cloudfunctions.net/uploadImage', {image: imageBase64 })
            .catch(err => {console.error(err); callback(false, err)})
            .then(resp => callback(resp.data)) // resp.data.imageUrl
    }

}

export default new Firebase()