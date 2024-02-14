/* eslint-disable react/prop-types */
import Cousin from "../Cousin/Cousin"


const Uncle = ({asset}) => {


  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin 
        name='rafsan'
        asset={asset}
        ></Cousin>
        <Cousin 
        name="sohana"
       
        ></Cousin>
      </section>
    </div>
  )
}

export default Uncle
