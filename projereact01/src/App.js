import logo from './logo.svg'; // Importa o logo SVG do diretório local
import './App.css'; // Importa o arquivo CSS relacionado ao componente App

function App() { // Define o componente App como uma função
  return (
    <div className="App"> {/* Define uma div com a classe "App" */}
      <header className="App-header"> {/* Define o cabeçalho com a classe "App-header" */}
        <img src={logo} className="App-logo" alt="logo" /> {/* Renderiza o logo como uma imagem */}
        <p>
          Edit <code>src/App.js</code> and save to reload. {/* Mensagem de instrução */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {/* Link para a página do React */}
        </a>
      </header>
    </div>
  );
}

export default App; // Exporta o componente App como padrão
