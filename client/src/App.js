import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import charsList from './components/charsList';
import resultssList from './components/results.List';


export default function App() {
  let [characters, setCharacters] = useState([]);

 const [char, setChar] = useState ({
   model: "",
   vtube:"",
   pet:0,
   bg:0,
   price:"0",
   image:"",
   description:""
 }) 

 const calculate = () => {

 }


//  <radio value={} onClick={handleClick}></radio>

 useEffect(() => {
  getCharacters();
 }, []);


 const getCharacters = () => {
  fetch("/characters")
  .then(res => res.json())
  .then(characters => {
    console.log(characters)
    setCharacters(characters);
  })
  .catch(error => {
    console.log(error);
  });
};

async function addCharacter (character){
  let variants = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(character)
  }

  try {
    let response = await fetch('/',variants);
    let characters = await response.json();
    setCharacters(characters);
  } catch (error) {
  console.log(error)
  }
 }

  return (
    <div class="heading">
						<h1 class="heading-title">Art commission calculator</h1>
					</div>

          
  );

}

