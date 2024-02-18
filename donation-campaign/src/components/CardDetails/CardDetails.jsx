import { useLoaderData, useParams } from "react-router-dom"


const CardDetails = () => {

    const cards=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const card=cards.find(card=>card.id === idInt);

    console.log(card);
  return (
    <div className="mt-10">
      <img 
      className="w-full h-96"
      src={card.picture} alt="" />
      <div>
        <h1 className="mt-6 text-xl font-bold">{card.title}</h1>
        <p>{card.description}</p>
      </div>
    </div>
  )
}

export default CardDetails
