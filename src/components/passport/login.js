import React, { Component } from "react";
import Styles from "../styles";



function login() {
    app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
        });
    }

  class App extends Component {

    render() {
        
      Styles();
      
      return <login />;
       
    }
  }
  
  export default App;
  