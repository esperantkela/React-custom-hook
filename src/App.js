import logo from './logo.svg';
import './App.css';
import ClickSayHello from './components/ClickSayHello';
import MyContacts from './components/MyContacts';

function App() {
  return (
    <div className="App">
      <h1>Mes contacts</h1>
      <MyContacts/>
      <ClickSayHello/>
    </div>
  );
}

export default App;
