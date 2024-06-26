
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedcoffees=useLoaderData();
  const [coffees,setCoffees]=useState(loadedcoffees);

  return (
    <div className='m-20'>
     <h1 className='text-center text-purple-600 text-6xl'>Hot Hot coffees : {coffees.length}</h1>
     <div className='grid md:grid-cols-2 gap-4'>
     {
      coffees.map(coffee=><CoffeeCard key={coffee._id} 
      coffee={coffee}
      coffees={coffees}
      setCoffees={setCoffees}
      ></CoffeeCard>)
     }
     </div>
    </div>
  )
}
//this is for committing in git
export default App
