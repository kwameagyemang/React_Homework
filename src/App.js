import React from 'react'
import Infodata from './Infodata'
import Websitevisitors from './Websitevistors'
import Sidebar from '/Sidebar.js'
import './App.css'

// App is going to be our Parent component
class App extends React.Component {
render() {
    return(
      <div className="Apps">
        <Sidebar/>
        <Websitevisitors/>

        <div className = "infodata_container">
        <Infodata/>
        <Infodata/>
        <Infodata/>
        
        </div>
      </div>

      
    );
  }
}

export default App;
