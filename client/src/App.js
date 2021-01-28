import {useState} from 'react'; 
import './App.css';

function App() {
  const [text, setText] = useState(''); 

  

  function handleRequest() { 
    const request = new XMLHttpRequest(); 

    request.addEventListener('load', function() { 
      setText(this.responseText); 
    })
    request.open('GET', '/hey'); 
    request.send(); 
    
  }


  return (<>
    <button onClick={handleRequest}>Make Request</button>
    <p>{text}</p>
  </>);
}

export default App;
