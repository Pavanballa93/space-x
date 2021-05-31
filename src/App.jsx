import React from 'react';
import './styles.css';
import { Header }  from './components/Header/Header';

import { Launch }  from './components/Launch/Launch';

function App() {
 return (
    <div className="App">
    <Header />
    <Launch banner="https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg" 
     title ="falconsat-1"
     LaunchDate="2006-03-25T10:30:00+12:00" 
     description="CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions."
     />
     <Launch banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg" 
     title ="DemoSat"
     LaunchDate="2007-03-21T01:10:00.000Z" 
     description="Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
     />
    </div>
  );
}

export default App;