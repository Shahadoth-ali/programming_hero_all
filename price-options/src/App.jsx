

import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
 

  return (
    <>
    {/* navbar */}
    <header>
      <DaisyNav></DaisyNav>
      <h1>hi this is shahadoth</h1>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </header>


    </>
  )
}

export default App
