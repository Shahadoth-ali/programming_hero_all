/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ReuseableForm = ({formTitle,btnText,hadleSubmit}) => {


const handleLocalSubmit=(e)=>{
    e.preventDefault();
    const data={
        name:e.target.name.value,
        email:e.target.email.value,
        password:e.target.password.value
    }
    hadleSubmit(data);
}
   
  return (
    <div>
        <h2>{formTitle}</h2>
      <form onSubmit={handleLocalSubmit}>
      
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password"  />
        <br />
      <input type="submit" value={btnText} />
      </form>
    </div>
  )
}

export default ReuseableForm
