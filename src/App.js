import './App.css';
import EarthComponent from './components/earth';
import MenuFilter from './components/menu';

const sendChanges = (continentsList,countriesList,volcanoType, filterBy) => {
  console.log(continentsList,countriesList,volcanoType,filterBy);
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
