import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCspKcdQP7dga2-TEnqYWOIlylipfs8aO4",
    authDomain: "lere-a4fe1.firebaseapp.com",
    databaseURL: "https://lere-a4fe1.firebaseio.com",
    projectId: "lere-a4fe1",
    storageBucket: "lere-a4fe1.appspot.com",
    messagingSenderId: "306773820021",
    appId: "1:306773820021:web:a68da8fce367d00930ee3c"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);


module.exports.save = ( route, data, callback ) => {
    
    firebase
        .database()
        .ref(route)
        .set(data, callback)

};


module.exports.get = ( route, callback ) => {

    const starCountRef = firebase
        .database()
        .ref(route);

    starCountRef
        .on('value', snapshot => callback(snapshot.val()) );
}
