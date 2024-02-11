/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types'
import PriceOpton from '../PriceOption/PriceOpton'

const PriceOptions =() => {

    
    
    
        const priceOptions=[
          {
            "id": "gym_001",
            "name": "FitZone",
            "price": 50,
            "features": [
              "Access to various gym  and resistance machines",
              "Access to a variety  Zumba, and spin classes",
              "Discounted rate compared. Discounts on merchandise.",
              "One-time access to gym facilities for a day",
              "Nutritional counseling and meal planning services",
              "Sauna and steam room access",
              "Complimentary Wi-Fi",
              "Ample parking space"
            ]
          },
          {
            "id": "gym_002",
            "name": "FlexFit",
            "price": 30,
            "features": [
              "Access to a  areas",
              "Unlimited access to all rooms and showers",
              "Access to a to members-only events. training sessions.",
              "Special discounted rate for students with valid ID",
              "One-on-one personal training sessions",
              "Smoothie bar and healthy snack options",
              "Outdoor workout area",
              "Massage therapy services"
            ]
          },
          {
            "id": "gym_003",
            "name": "cuckoo",
            "price": 36,
            "features": [
                "Access to various and resistance machines",
                "Access to a variety of group classes",
                "Discounted Discounts on merchandise.",
                "One-time access to gym facilities for a day",
                "Nutritional counseling and meal planning services",
                "Sauna and steam room access",
                "Complimentary Wi-Fi",
                "Ample parking space"
            ]
          }
        ]
      
      
      
      
      
      
  return (
    <div className='m-10'>
      <h2>Best Prices in the town.</h2>
     <div className='grid md:grid-cols-3 gap-6'>
     {
        priceOptions.map(option=><PriceOpton key={option.id} 
        option={option}
        ></PriceOpton>)
      }
     </div>
    </div>
  )
}

PriceOptions.propTypes = {

}

export default PriceOptions
