import React from 'react';
import MyGoogleMap from './MyGoogleMap';



class HomePage extends React.Component {

  // AIzaSyDjFZnvXXlS5OXSbKSpLRSD-c6dFdsplo4

  // renderIssues = ({issuesId, location}) => <div key={issueId}>{location}</div>
  render() {
      return (
          <div>
            <MyGoogleMap />
          </div>
      );

  }
}

export default HomePage;