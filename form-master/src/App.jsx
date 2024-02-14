

import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {


  // const handleSignUpSubmit=(data)=>{
  //     console.log('sign up data',data);
  
  // }
  // const handleUpdate=(data)=>{
  //   console.log('profile update data',data);
  // }

  return (
    <>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefulForm></StatefulForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     {/* <ReuseableForm formTitle={'Sign Up'} btnText={'Submit'}
     hadleSubmit={handleSignUpSubmit}
     ></ReuseableForm>

     <ReuseableForm formTitle={'Profile Update'} btnText={'Update'}
     hadleSubmit={handleUpdate}
     ></ReuseableForm> */}
     <Grandpa></Grandpa>
    </>
  )
}

export default App
