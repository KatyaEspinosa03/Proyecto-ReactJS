
import React, {useState, useEffect} from 'react'
import CardList from '../CardList/CardList';
import {useParams, useNavigate} from 'react-router-dom'
import {db} from "../../Firebase/firebase"
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

    const [cards, setCards] = useState([]);

    const { search }= useParams();
    
    const navigate = useNavigate();

// recupero la información del firebase
useEffect(() => {
    const getCards = async () => {
        const q = query(collection(db, "products"));
        const docs = [];
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        })
// si se hace uso de el buscador filtro los productos y si coincide la busqueda con 
// el nombre del producto se muestran esas tarjetas, sino manda a la página de error
// y si no se hace uso del buscador se muestran todas las tarjetas
        if(search){
            const foundItems = docs.filter((item) => item.artistName === search);
            if (foundItems.length > 0){
                setCards(foundItems)
            } else {
                navigate("/notFound")
            }
        } else{setCards(docs)}
        
    };
    getCards();
}, [search])


    return (
    <div> 
        <CardList cards={cards}/> 
    </div>
    )
}

export default ItemListContainer