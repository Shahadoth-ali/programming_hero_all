/* eslint-disable react/prop-types */


const Route = ({route}) => {


  return (
    <div className="mr-4 hover:bg-yellow-400">
      <a  href={route.link}>{route.label}</a>
    </div>
  )
}

export default Route
