/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Friend from "../Friend/Friend"
import Special from "../Special/Special"


const Cousin = ({name,asset}) => {
  return (
    <div>
      <h2>cousin</h2>
      <p>{name}</p>
      <section>
        {
        asset && 
      <Special asset={asset}></Special>
        }
        {
          name==='mariya' && <Friend></Friend>
        }
      </section>
     
    </div>
  )
}

export default Cousin
