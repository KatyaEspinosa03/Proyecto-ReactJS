import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from '../../Firebase/firebase';

import DetailList from '../../components/DetailList/DetailList';

const DetailPage = () => {

    const[card, setCard] = useState([]);

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

    <div className='detailPage'>
      <DetailList card={card} />
    </div>


  )
}

export default DetailPage
