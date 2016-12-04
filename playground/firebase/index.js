import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAknUVgSYjl7ph91MyGmSPDtBwqHUmBues",
    authDomain: "bill-todo-app.firebaseapp.com",
    databaseURL: "https://bill-todo-app.firebaseio.com",
    storageBucket: "bill-todo-app.appspot.com",
    messagingSenderId: "127894173159"
  }
firebase.initializeApp(config)

let firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Bill',
    age: 26
  }
})
