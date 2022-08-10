import React, { useState } from 'react';
import { 
  HomeBackGround,
  HackButton,
} from './styles';
import Axios from 'axios';


const getHackathon = () => {
  Axios.get('http://localhost:3001/Hackathon').then((response) => {
    console.log(response);
  });
};

function App() {
  return (  
  <HomeBackGround>
    <div className = 'hackathon'>
    <HackButton onClick = { getHackathon }> Show Hackathon  </HackButton>
    </div>
    <div> TopBar
      <div> TopBarTitle  </div>
        <div> TopBarSubtitle </div>
      <div> TopBarLogo </div>
    </div>

    <div> HackathonContainer 
      <div> Hackathon Logo </div>
      <div> HackathonTitle </div>
      <div> HackathonSubtitle </div>
    </div>
     
    <div>WBD Container 
      <div> WBD Logo </div>
      <div> WBD Title </div>
      <div> WBD Subtitle </div>
    </div>
    
    <div> Footer 
      <div> Footer Title </div>
      <div> Contact US </div>
      <div> Privacy Policy </div>
      <div> Terms and Condicions </div>
      <div> Footer Logo </div>
    </div>

  </HomeBackGround> 
  );
}

export default App;
