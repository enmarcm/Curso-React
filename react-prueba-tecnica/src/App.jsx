import './App.css'
import { useState, useEffect } from "react";

const URL_FACT = `https://catfact.ninja/fact`;

const App = () => {
  const [fact, setFact] = useState();
  const [imageURL, setImageURL] = useState();
  const [firstWord, setFirstWord] = useState()

  useEffect(() => {
    fetchData(0)
  }, []);

  useEffect(()=>{
    setImageURL(
      `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
    );
  }, [firstWord])

  const handleClick = () =>{
    fetchData();
  }

  const fetchData = async () => {
    const data = await fetch(URL_FACT);
    const dataJson = await data.json();
    const {fact} = dataJson
    const firstWord = fact.split(" ")[0];
    setFirstWord(firstWord)

    setFact(fact);

  };


  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={imageURL} />}
        <button onClick={handleClick}>Cambiar</button>
      </section>
    </main>
  );
};

export default App;
