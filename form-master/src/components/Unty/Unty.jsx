/* eslint-disable no-unused-vars */
import { useContext } from "react"
import Cousin from "../Cousin/Cousin"
import { MoneyContext } from "../Grandpa/Grandpa"


const Unty = () => {

const [money,setMoney]=useContext(MoneyContext);
  return (
    <div>
      <h2>Unty</h2>
      <section className="flex">
        <Cousin 
        name="mahiya"
        >

        </Cousin>
        <Cousin 
        name="mariya"
        ></Cousin>
      </section>
      <p>Money:{money}</p>
      <button onClick={()=>setMoney(money + 10)}>Add 10 tk</button>
    </div>
  )
}

export default Unty
