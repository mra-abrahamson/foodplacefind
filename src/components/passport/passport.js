import React, { Component } from "react";
import Styles from "../styles";


function passfunction() {
    passport.use(new LocalStrategy(
        unction(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
         return done(null, user);
            });
        }
    ));
}
class App extends Component {

  render() {
      
    Styles();
    
    return <passfunction />;
     
  }
}

export default App;
