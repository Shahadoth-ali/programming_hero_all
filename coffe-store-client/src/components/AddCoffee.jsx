import Swal from 'sweetalert2'


const AddCoffee = () => {


    const handleAddCoffee=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const newCoffee={name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


  return (
    <div className="p-24">
      <h2 className="text-3xl font-extrabold">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
           {/* form row--> name and quantity */}
        <div className="md:flex gap-4 md:mb-3">
            {/* first element */}
        <div className="md:w-1/2">
        <label htmlFor="">Name</label>
        <br />
       <input type="text" name="name" placeholder="coffeeeName" className="border w-full"/>
        </div>
        {/* second element */}
        <div className="md:w-1/2">
        <label htmlFor="">Available Quantity</label>
        <br />
       <input type="text" name="quantity" placeholder="Available Quantity" className="border w-full"/>
        </div>
        </div>

           {/* form row---> supplier and taste */}
        <div className="md:flex gap-4 md:mb-3">
            {/* first element */}
        <div className="md:w-1/2">
        <label htmlFor="">Supplier Name</label>
        <br />
       <input type="text" name="supplier" placeholder="Supplier Name" className="border w-full"/>
        </div>
        {/* second element */}
        <div className="md:w-1/2">
        <label htmlFor="">Taste</label>
        <br />
       <input type="text" name="taste" placeholder="Taste" className="border w-full"/>
        </div>
        </div>

           {/* form row---> category and details */}
        <div className="md:flex gap-4 md:mb-3">
            {/* first element */}
        <div className="md:w-1/2">
        <label htmlFor="">Category</label>
        <br />
       <input type="text" name="category" placeholder="Category" className="border w-full"/>
        </div>
        {/* second element */}
        <div className="md:w-1/2">
        <label htmlFor="">Details</label>
        <br />
       <input type="text" name="details" placeholder="Details" className="border w-full"/>
        </div>
        </div>

           {/* form row---> photo url */}
        <div className="md:flex gap-4 md:mb-3">
            {/* first element */}
        <div className="w-full">
        <label htmlFor="">Photo Url</label>
        <br />
       <input type="text" name="photo" placeholder="Photo Url" className="border w-full"/>
        </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block"/>
      </form>
    </div>
  );
};

export default AddCoffee;
