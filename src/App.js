
import './App.css';
import { useState } from 'react';
import Jatekter from './components/Jatekter';

export default function App() {

  const [lista, setLista] = useState([true, true, false, false, true, false, false, false, true])



  function kapcs(adat) {
    console.log("app-ban", adat)

    const sl = [...lista]

    if (sl[adat] == true) {
      sl[adat] = false
    }
    else {
      sl[adat] = true
    }

    setLista([...sl])
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>LigthOn</h1>
      </header>
      <article>
        <div className="jatekter">
          <Jatekter lista={lista} kapcs={kapcs} />
        </div>
      </article>

      <footer>Botka Bianka</footer>
    </div>
  );
}


