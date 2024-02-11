/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOpton = ({option}) => {

const {name,price,features}=option;

  return (
    <div className='bg-orange-400 rounded-xl p-6 flex flex-col'>
      <h2 className='text-center'>
        <span className='text-7xl font-extrabold'>{price}</span>
        <span className='text-2xl'>/month</span>
      </h2>
      <h4 className='text-4xl text-center my-3'>{name}</h4>
   <div className='flex-grow'>
   {
        features.map((feature,idx)=><Feature key={idx}
        feature={feature}
        ></Feature>)
      }
   </div>
   <button className='bg-green-500 w-full mt-3 rounded-xl py-2 font-bold'>Buy Now</button>
    </div>
  )
}

PriceOpton.propTypes = {
option:PropTypes.object
}

export default PriceOpton
