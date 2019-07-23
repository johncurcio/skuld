import React from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyC4ObezCKn8Sr5nUJzFjjTKthsNPXk5Z-E",
  authDomain: "skuld-a20cc.firebaseapp.com"
});

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSignedIn: false
    }

    this.uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log(user);
    })
  }

  render(){
    return (
      <div className="App">
        {
          this.state.isSignedIn ? (
            <Dashboard />
          ) : (
            <Login uiConfig={this.uiConfig} firebase={firebase} />
          )
        }
        
      </div>
    );
  }
}

export default App;
