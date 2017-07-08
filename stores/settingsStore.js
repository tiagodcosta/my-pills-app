import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

const config = {
    apiKey: "AIzaSyDq-SroilBDUM4dZbvz7UqXC-lK6z-95Zo",
    authDomain: "my-pills-app.firebaseapp.com",
    databaseURL: "https://my-pills-app.firebaseio.com",
    projectId: "my-pills-app",
    storageBucket: "my-pills-app.appspot.com",
    messagingSenderId: "606105974383"
}


export default class SettingsStore extends MobxFirebaseStore {
  constructor(){
      firebase.initializeApp(config)
      super(firebase.database().ref())

      this.splashTime = 5000
      this.splashImg = require('../../images/splash.jpg')
  }
  get SplashTime() {
    return this.splashTime
  }
  get splashImg() {
    return this.splashImg
  }
}
