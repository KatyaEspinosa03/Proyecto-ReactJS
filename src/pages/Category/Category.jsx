
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import Card from "../../components/Card/Card";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from '../../Firebase/firebase';

const Category = () => {
    const [cards, setCards] = useState([]);
    let { categoryId } = useParams();

    console.log(categoryId)

useEffect(() => {
    const getCards = async () => {
        const q = query(collection(db, "products"),
        where("category", "==", categoryId));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        });
        setCards(docs);
    }
    getCards();
}, [categoryId]);

  return (
    <div className='card-list details'>  
    {cards.map((card) => {
        return (
            <div  key={card.id}>
                <Card card={card}/>
            </div>
        )
    })} 
</div>
  )
}

export default Category