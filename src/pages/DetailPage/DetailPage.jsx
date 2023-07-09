import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from '../../Firebase/firebase';

import CardList from '../../components/CardList/CardList';


const DetailPage = () => {

    const[card, setCard] = useState([]) 

    let { id } = useParams();

    console.log(card)


  useEffect(() => {
    const getCards = async () => {
      const q = query(collection(db, "products"),
      where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
      });
      setCard(docs);
    }
    getCards();
  },[id]);
  

    
  return (
    <div className='card-detail mx-auto'>
    <div>
      <CardList cards={card} />
    </div>

        </div>
  )
}

export default DetailPage
