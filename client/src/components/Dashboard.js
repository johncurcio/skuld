import React from 'react';
import DashboardHeader from './DashboardHeader';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <DashboardHeader user={this.props.user}/>
    );
  }
}

export default Dashboard;