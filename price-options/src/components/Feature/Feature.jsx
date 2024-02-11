import { FaCircleCheck } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'

const Feature = ({feature}) => {


  return (
    <div className='pl-2'>
      <h2 className="flex items-center mt-2"><FaCircleCheck />{feature}</h2>
    </div>
  )
}

Feature.propTypes = {
feature:PropTypes.string
}

export default Feature

