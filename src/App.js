
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';





function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {

      setalert(null);

    }, 3000);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#222222';
      showalert('Dark Mode has been enabled', "Success")
      document.title="MagicText - Dark Mode!";



    }
    
    

    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert('Light Mode has been enabled', "Success")
      document.title="MagicText - Light Mode";


    }
  }
 

    
  
return (
    <>
       

      <Navbar name="Magic Text" mode={mode} aboutText="About" toggleMode={toggleMode}  />
      <Alert alert={alert} />
      
      <div className="container">
      
        
         
         
        

      
          <Route exact path="/" element={ <TextForm mode={mode} showalert={showalert} /> }></Route>
        

        
      
        
       

        
      </div>
     

    </>


  );
}

export default App;
