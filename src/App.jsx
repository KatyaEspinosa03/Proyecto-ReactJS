
import './sass/main.scss';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CardList from './components/CardList/CardList';


function App() {


  return (
    <div>
      <Header />
      <NavBar />
      <ItemListContainer message={"Encuentra tu música favorita"} />
      <CardList />

    </div>
  )
}

export default App
