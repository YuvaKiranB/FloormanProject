const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*', // or 'http://localhost:3000'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions))

// ✅ explicitly handle preflight
app.options('*', cors(corsOptions))
app.use(cors())

const now = new Date()
const currentTime = now.toLocaleString()

const jwt = require("jsonwebtoken")




const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://YuvaKiranB:52863941Aa@cluster1.jh8cn.mongodb.net/?appName=Cluster1';
const client = new MongoClient(url);

async function run() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        
        app.listen(4000, () => {
          console.log("Server running on port 4000");
        });
        
    } catch(error) {
        console.log(error.message)
    }
}


const db = client.db('testdb');
const addVehicle = db.collection('vehiclesData');
const addUser = db.collection('usersData')

run().catch(console.error);

app.post("/createNewUser", async (request, response) => {
  try{
  const { username, name, password, role } = request.body;
  console.log(username);
  const userId = await addUser.findOne({username})
  console.log(userId)
  if (userId !== null) {
    response.status(400);
    response.send("User already exists");
  } else if (password.length < 5) {
    response.status(400);
    response.send("Password is too short");
  } else {
    const writeUser = await addUser.insertOne({username :username, password : password, name: name, role: role})
    response.send("User created successfully");
    console.log(`Document inserted with _id: ${writeUser.insertedId}`);
  }}catch(err){console.log(err.message)}
  
});


app.post('/addVehicle', async (request, response) => {
 try{
  console.log(request.body);

  const result = await addVehicle.insertOne( {
    vehicleNumber: request.body.vehicleNumber, 
    chassisNumber: request.body.chassisNumber,
    engineNumber: request.body.engineNumber,
    vehicleModel: request.body.vehicleModel,
    customerName: request.body.customerName,
    JCnumber: request.body.JCnumber,
    JCdate: request.body.JCdate,
    kms: request.body.kms,
    hrs: request.body.hrs,
    dateOfSale: request.body.dateOfSale,
    driverName: request.body.driverName,
    driverNumber: request.body.driverNumber
  });
        console.log(`Document inserted with _id: ${result.insertedId}`);
  response.send({ "response":'Vehicle added sucessfully'})
} catch (err) {
  response.status(200).send(err);
  console.log(err.message)
}});


  app.post("/login", async (request, response) => {
    const { username, password } = request.body;
    const dbUser = await addUser.findOne({username});
  if (dbUser === null) {
    response.status(400);
  response.send({"error":"Invalid User"});
  } else {  
    const userPassword = dbUser.password;
    const role = dbUser.role;
    if (userPassword === password) {
      const payload = {
        username: username,
        role: role,
      };
      const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
      response.send({ jwt_token: jwtToken });
    } else {
      response.status(401);
      response.send({"error":"Invalid Password"});
    }
  }
});



