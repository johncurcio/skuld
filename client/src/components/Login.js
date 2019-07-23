import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Grid, Header } from 'semantic-ui-react'

class Login extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h1' color='yellow' textAlign='center'>
            <span className="skranji">skuld</span>
          </Header>
          <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={this.props.firebase.auth()} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;