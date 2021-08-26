import React from 'react'
import Websitevisitors from './Websitevistors'
import Item from './Item'
import './App.css'

// App is going to be our Parent component
class App extends React.Component {
render() {
    return(
      <div className = "container">
      
        <div className = "grid-item1">
          <Item/>
        </div>

        <div className = "grid-item2">
        <Websitevisitors/>
        </div>

        <div id="content1">
        <h3>Reviews 1,281</h3>
        </div>

        <div id="content2">
        <h3>Average Ratings 4.6</h3>
        </div>

        <div id ="content3">
        <h3>Sentiment Analysis 960 122 321</h3>
        </div> 
      
      </div>

      
    );
  }
}

export default App;
