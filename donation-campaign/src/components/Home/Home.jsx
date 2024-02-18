import { useEffect, useState } from "react"
import Card from "../Card/Card";


const Home = () => {

 
  const [cards,setCards]=useState([]);

  useEffect(()=>{
    fetch('cards.json')
    .then(res=>res.json())
    .then(data=>setCards(data));
  },[])

  return (
    <div>
      <h1 className="text-center md:text-5xl font-bold">I Grow By Helping People In Need</h1>
      <div className="md:grid grid-cols-4 gap-3">
        {
          cards.map(card=><Card 
          key={card.id}
          card={card}
          ></Card>)
        }
      </div>
    </div>
  )
}

export default Home
