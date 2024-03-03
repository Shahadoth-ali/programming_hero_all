const express=require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors=require('cors');
const app=express();
const port=process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


//mongodb code start
const uri = "mongodb+srv://rubayet:hirubayet@cluster0.lhvbavi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("usersDB").collection('users');

    app.get('/users',async(req,res)=>{
      const cursor=database.find()
      const result=await cursor.toArray();
      res.send(result);
    })


    app.post('/users',async(req,res)=>{
        const user=req.body;
        console.log('new user',user);
        const result=await database.insertOne(user);
        res.send(result);
    });


    app.delete('/users/:id',async(req,res)=>{
      const id=req.params.id;
      // console.log('please delete from db',id);
      const query={_id: new ObjectId(id)}
      const result=await database.deleteOne(query);
      res.send(result);
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
//mongo end


app.get('/',(req,res)=>[
    res.send('crud is running')
])

app.listen(port,()=>{
    console.log(`Simple crud is running,${port}`)
})