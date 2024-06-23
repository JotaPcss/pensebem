import './App.css';
import Start from './Start';
import Controle from './Controle';
import Saida from './Saida';
import Titulo from './Titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Titulo/>
          <Saida/>
          <Controle/>
          <Start />
       
      </header>
    </div>
  );
}

export default App;
