

const SimpleForm = () => {

    const handleSubmit=e=>{
        e.preventDefault();
        console.log('form submitted.');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <br />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SimpleForm
