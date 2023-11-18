// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [res, setres] = useState(null);
  const [text, settext] = useState([]);
  const [status, setstatus] = useState(false);

  function getMeaning() {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + text)
      .then(res => res.json())
      .then(data => setres(data))
      .catch(er => {
        console.log(er);
      });
  }

  function btnClick() {
    setstatus(prev => !prev);
  }

  useEffect(() => {
    if (text !== "") {
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + text)
        .then(res => res.json())
        .then(data => setres(data))
        .catch(er => {
          console.log(er);
        });
    }
    console.log("hi from useeffect");
  }, [status]); //dependency array

  return (
    <div className='App'>
      <input type='text' name='text' value={text} onChange={(e) => settext(e.target.value)} />
      <button onClick={btnClick}>Search</button>
      {res !== null && res.length > 0 ? (
        res.map((wordData, index) => (
          <div key={index}>
            <h2>{wordData.word}</h2>
            {wordData.phonetic && (
              <div>
                <p>Phonetic: {wordData.phonetic}</p>
                {wordData.phonetics.map((phonetic, phoneticIndex) => (
                  <div key={phoneticIndex}>
                    <p>Text: {phonetic.text}</p>
                    <p>Audio: {phonetic.audio}</p>
                    <p>Source URL: {phonetic.sourceUrl}</p>
                    <p>
                      License: {phonetic.license.name} (<a href={phonetic.license.url}>Link</a>)
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div>
              <h3>Meanings:</h3>
              {wordData.meanings.map((meaning, meaningIndex) => (
                <div key={meaningIndex}>
                  <p>Part of Speech: {meaning.partOfSpeech}</p>
                  {meaning.definitions.map((definition, definitionIndex) => (
                    <div key={definitionIndex}>
                      <p>Definition: {definition.definition}</p>
                      {definition.synonyms.length > 0 && (<p>Synonyms: {definition.synonyms.join(", ")}</p>
                      )}
                      {definition.antonyms.length > 0 && (
                        <p>Antonyms: {definition.antonyms.join(", ")}</p>
                      )}
                      {definition.example && <p>Example: {definition.example}</p>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>
              License: {wordData.license.name} (<a href={wordData.license.url}>Link</a>)
            </p>
            {wordData.sourceUrls.length > 0 && (
              <p>Source URL: {wordData.sourceUrls.join(", ")}</p>
            )}
          </div>
        ))
      ) : (
        <p>No meaning found for the word.</p>
      )}
    </div>
  );
}

export default App;
