import './App.css';
import EarthComponent from './components/earth';
import MenuFilter from './components/menu';

const sendChanges = (a,b,c,d) => {
  console.log(a,b,c,d);
}

function App() {
  return (
    <div className="App">
      <MenuFilter sendChanges={sendChanges}/>
      <EarthComponent/>
    </div>
  );
}

export default App;
