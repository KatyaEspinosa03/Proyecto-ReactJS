
import './sass/main.scss';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <div>
      <Header />
      <NavBar />
      <ItemListContainer message={"Encuentra tu música favorita"} />
    </div>
  )
}

export default App
