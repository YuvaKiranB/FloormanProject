const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const {ObjectId} = require('mongodb')

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions))

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
const addComplaint = db.collection('complaints')
const addWork = db.collection('works')
const sparePartsSuggestions = db.collection('sparePartsSuggestions')
const addSpares = db.collection('sparesData')

run().catch(console.error);

app.post("/createNewUser", async (request, response) => {
  try{
  const { username, name, password, role } = request.body;
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
  let jwtToken;
  const authHeader = request.headers["authorization"];
  if (authHeader !== undefined) {
    jwtToken = authHeader.split(" ")[1];
  }
  if (jwtToken === undefined) {
    response.status(401);
    return response.send({"response":"Invalid Access Token"});
  } else {
    jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
      if (error) {
        return response.status(401).send({
          response: 'Invalid Access Token',
        })
    } else {
      if(payload.role === "admin"){

        const result = await addVehicle.insertOne( {
          vehicleNumber: String(request.body.vehicleNumber), 
          chassisNumber: String(request.body.chassisNumber),
          engineNumber: String(request.body.engineNumber),
          vehicleModel: String(request.body.vehicleModel),
          customerName: String(request.body.customerName),
          JCnumber: Number(request.body.JCnumber),
          JCdate: new Date(request.body.JCdate),
          kms: Number(request.body.kms),
          hrs: Number(request.body.hrs),
          dateOfSale: new Date(request.body.dateOfSale),
          driverName: String(request.body.driverName),
          driverNumber: Number(request.body.driverNumber)
        });
              console.log(`Document inserted with _id: ${result.insertedId}`);
        response.status(200);
       return response.send({ "response":'Vehicle added successfully'})
  
      }else{
        response.status(403);
       return response.send({"response": "Invalid access, Not Authorized"})
      }

    }})}


  
} catch (err) {
  response.status(500).send(err);
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



app.get('/vehiclesList', async (request, response) => {

  
  try{
   let jwtToken;
   const authHeader = request.headers["authorization"];
   if (authHeader !== undefined) {
     jwtToken = authHeader.split(" ")[1];
   }
   if (jwtToken === undefined) {
     response.status(401);
     return response.send({"response":"Invalid Access Token"});
   } else {
     jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
       if (error) {
         return response.status(401).send({
           response: 'Invalid Access Token',
         })
     } else {
 
         const vehiclesList = await addVehicle.find({}).toArray();
         return response.status(200).send({
          response: 'vehicle fetched successfully',
          data: vehiclesList,
        })
   
       
     }})}
 
 
   
 } catch (err) {
   response.status(500).send(err);
   console.log(err.message)
 }});
 

 app.get('/vehicleDetail/:id', async (request, response) => {

  try{
    let jwtToken;
    const authHeader = request.headers["authorization"];
    if (authHeader !== undefined) {
      jwtToken = authHeader.split(" ")[1];
    }
    if (jwtToken === undefined) {
      response.status(401);
      return response.send({"response":"Invalid Access Token"});
    } else {
      jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
        if (error) {
          return response.status(401).send({
            response: 'Invalid Access Token',
          })
      } else {

          const {id} = request.params
  
          const vehicleDetail = await addVehicle.findOne({_id: new ObjectId(id)});
          return response.status(200).send({
           response: 'vehicle fetched successfully',
           data: vehicleDetail,
         })
    
        
      }})}
  
  
    
  } catch (err) {
    response.status(500).send(err);
    console.log(err.message)
  }


 })


 app.post('/addComplaint', async (request, response) => {

  
  try{
   let jwtToken;
   const authHeader = request.headers["authorization"];
   if (authHeader !== undefined) {
     jwtToken = authHeader.split(" ")[1];
   }
   if (jwtToken === undefined) {
     response.status(401);
     return response.send({"response":"Invalid Access Token"});
   } else {
     jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
       if (error) {
         return response.status(401).send({
           response: 'Invalid Access Token',
         })
     } else {
       if(payload.role === "admin"){
 
         const result = await addComplaint.insertOne( {
           vehicleId: String(request.body.vehicleId), 
           complaint: String(request.body.complaint),
         });
               console.log(`Document inserted with _id: ${result.insertedId}`);
         response.status(200);
        return response.send({ "response":'Complaint added successfully'})
   
       }else{
         response.status(403);
        return response.send({"response": "Invalid access, Not Authorized"})
       }
 
     }})}
 
 
   
 } catch (err) {
   response.status(500).send(err);
   console.log(err.message)
 }});


 app.get('/complaints/:id', async (request, response) => {

  try{
    let jwtToken;
    const authHeader = request.headers["authorization"];
    if (authHeader !== undefined) {
      jwtToken = authHeader.split(" ")[1];
    }
    if (jwtToken === undefined) {
      response.status(401);
      return response.send({"response":"Invalid Access Token"});
    } else {
      jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
        if (error) {
          return response.status(401).send({
            response: 'Invalid Access Token',
          })
      } else {

          const {id} = request.params
  
          const vehicleDetail = await addComplaint.find({vehicleId: id}).toArray();
          return response.status(200).send({
           response: 'complaints fetched successfully',
           data: vehicleDetail,
         })
    
        
      }})}
  
  
    
  } catch (err) {
    response.status(500).send(err);
    console.log(err.message)
  }


 })



 app.post('/addWork', async (request, response) => {

  
  try{
   let jwtToken;
   const authHeader = request.headers["authorization"];
   if (authHeader !== undefined) {
     jwtToken = authHeader.split(" ")[1];
   }
   if (jwtToken === undefined) {
     response.status(401);
     return response.send({"response":"Invalid Access Token"});
   } else {
     jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
       if (error) {
         return response.status(401).send({
           response: 'Invalid Access Token',
         })
     } else {
       if(payload.role === "admin"){
 
         const result = await addWork.insertOne( {
           vehicleId: String(request.body.vehicleId), 
           complaintId: String(request.body.complaintId),
           workDescription: String(request.body.workDescription),
           workStatus: String(request.body.workStatus),
           mechanic: String(request.body.mechanic),
           helper: String(request.body.helper),
         });
               console.log(`Document inserted with _id: ${result.insertedId}`);
         response.status(200);
        return response.send({ "response":'Complaint added successfully'})
   
       }else{
         response.status(403);
        return response.send({"response": "Invalid access, Not Authorized"})
       }
 
     }})}
 
 
   
 } catch (err) {
   response.status(500).send(err);
   console.log(err.message)
 }});





 app.get('/works/:id', async (request, response) => {

  try{
    let jwtToken;
    const authHeader = request.headers["authorization"];
    if (authHeader !== undefined) {
      jwtToken = authHeader.split(" ")[1];
    }
    if (jwtToken === undefined) {
      response.status(401);
      return response.send({"response":"Invalid Access Token"});
    } else {
      jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
        if (error) {
          return response.status(401).send({
            response: 'Invalid Access Token',
          })
      } else {

          const {id} = request.params
  
          const vehicleDetail = await addWork.find({complaintId: id}).toArray();
          return response.status(200).send({
           response: 'works fetched successfully',
           data: vehicleDetail,
         })
    
        
      }})}
  
  
    
  } catch (err) {
    response.status(500).send(err);
    console.log(err.message)
  }


 })


 app.get('/sparePartsSuggestions', async (request, response) => {

  
  try{
   let jwtToken;
   const authHeader = request.headers["authorization"];
   if (authHeader !== undefined) {
     jwtToken = authHeader.split(" ")[1];
   }
   if (jwtToken === undefined) {
     response.status(401);
     return response.send({"response":"Invalid Access Token"});
   } else {
     jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
       if (error) {
         return response.status(401).send({
           response: 'Invalid Access Token',
         })
     } else {

      

      const { partNumber = "", partDescription = "" } = request.query;
      let queryParameter = ""
      if (partNumber === ""){
        queryParameter = partDescription
      }else{
        queryParameter = partNumber
      }

const sparePartsSuggestionsList = await sparePartsSuggestions
  .find({
    $or: [
      {
        partNumber: {
          $regex: queryParameter,
          $options: "i",
        },
      },
      {
        partDescription: {
          $regex: queryParameter,
          $options: "i",
        },
      },
    ],
  }).limit(40).toArray();
;

return response.status(200).json({
  response: "spare parts list fetched successfully",
  data: sparePartsSuggestionsList,
});
   
       
     }})}
 
 
   
 } catch (err) {
   response.status(500).send(err);
   console.log(err.message)
 }});


 app.post('/addSpares', async (request, response) => {

  
  try{
   let jwtToken;
   const authHeader = request.headers["authorization"];
   if (authHeader !== undefined) {
     jwtToken = authHeader.split(" ")[1];
   }
   if (jwtToken === undefined) {
     response.status(401);
     return response.send({"response":"Invalid Access Token"});
   } else {
     jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
       if (error) {
         return response.status(401).send({
           response: 'Invalid Access Token',
         })
     } else {
       if(payload.role === "admin"){
 
         const result = await addSpares.insertOne( {
           vehicleId: String(request.body.vehicleId), 
           complaintId: String(request.body.complaintId),
           partNumber: String(request.body.sparePartNumber),
           partDescription: String(request.body.sparePartDescription),
           MRP: String(request.body.sparePartMRP),
           quantity: String(request.body.sparePartQuantity),
         });
               console.log(`Document inserted with _id: ${result.insertedId}`);
         response.status(200);
        return response.send({ "response":'Spare added successfully'})
   
       }else{
         response.status(403);
        return response.send({"response": "Invalid access, Not Authorized"})
       }
 
     }})}
 
 
   
 } catch (err) {
   response.status(500).send(err);
   console.log(err.message)
 }});
