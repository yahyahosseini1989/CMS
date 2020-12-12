import React from 'react';
import './Styles/Css/App.min.css';
// import Service from './Services/Service';
import Users from './Pages/Users/Users';


<meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width"
/>

class App extends React.Component {
  state = {}
  render() {
    return (
      <>
        <Users />
      </>
    );
  }
}

export default App;