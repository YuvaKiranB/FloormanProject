const mongoose = require("mongoose");

const express = require('express');
const app = express();


mongoose.connect("mongodb://localhost:27017/firstMongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
 .then(function(){
  console.log("Data Base connected successfully")
 })
 .catch(function(error){
  console.log(error)
 });


 const contactSchema = new mongoose.Schema({
    email: { type: String, required: true },
    query: { type: String, required: true },
  });

  const Contact = mongoose.model("Contact", contactSchema);

  app.use(express.urlencoded({ extended: true }));

app.post('/contact', async(req, res) => {
  try{
    console.log(req.body)
    const contact = new Contact({
      email: req.body.email,
      query: req.body.query,
    });
    console.log("started")
    await contact.save()
    res.status(200).send("Data saved successfully")
  }
  catch(err){
    res.status(200).send(err)
  }
 

});
app.get("/get",(req,res)=>{
  try{
    res.status(200).send("Test1")
  }catch(er){
    res.status(200).send("failure")
  }

})

app.listen(4000, () => {
  console.log('Server running on port 4000');
});