import React from 'react';
import './App.css';
import Calculator from './components/Calculator';


export default function App() {
//   let [characters, setCharacters] = useState([]);

//  const [char, setChar] = useState ({
//    model: "",
//    vtube:"",
//    pet:0,
//    bg:0,
//    price:"0",
//    image:"",
//    description:""
//  }) 


//  useEffect(() => {
//   getCharacters();
//  }, []);


//  const getCharacters = () => {
//   fetch("/characters")
//   .then(res => res.json())
//   .then(characters => {
//     console.log(characters)
//     setCharacters(characters);
//   })
//   .catch(error => {
//     console.log(error);
//   });
//  };

//  async function addCharacter (character){
//   let variants = {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(character)
//   }

//   try {
//     let response = await fetch('/',variants);
//     let characters = await response.json();
//     setCharacters(characters);
//   } catch (error) {
//   console.log(error)
//   }
//  }

  return (
    <div className="App">
      <header className="App-header">
        	<h1 className="heading-title">Art commission calculator</h1>
      </header>

      <Calculator />
  	</div>
  );
}

