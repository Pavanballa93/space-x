import React from 'react';
import './styles.css';
import { Header }  from './components/Header/Header';


import { LaunchList } from './components/LaunchList/LaunchList';

function App() {
 return (
    <div className="App">
    <Header />
    < LaunchList/>
    </div>
  );
}

export default App;