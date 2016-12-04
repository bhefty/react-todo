import firebase from 'firebase'

try {
  var config = {
      apiKey: "AIzaSyAknUVgSYjl7ph91MyGmSPDtBwqHUmBues",
      authDomain: "bill-todo-app.firebaseapp.com",
      databaseURL: "https://bill-todo-app.firebaseio.com",
      storageBucket: "bill-todo-app.appspot.com",
      messagingSenderId: "127894173159"
    }
  firebase.initializeApp(config)
} catch(e) {

}

export let firebaseRef = firebase.database().ref()
export default firebase
