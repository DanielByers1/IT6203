const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/student'); 

mongoose.connect('mongodb://localhost:27017/IT6203')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('This line is always called');
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

app.get('/students', (req, res, next) => {
  console.log('GET request received at /students'); 

  Student.find()
    .then(data => {
      console.log('Data retrieved from MongoDB:', data); 
      res.status(200).json(data); 
    })
    .catch(err => {
      console.log('Error retrieving students:', err); 
      res.status(500).json(err); 
    });
});

app.get('/students/:id', (req, res, next) => {
  Student.findOne({_id: req.params.id}) 
      .then(data => {
          res.status(200).json(data)
          console.log(data);
      })
      .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
  });
});

app.post('/students', (req, res, next) => { 
    const student = new Student({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });
    student.save()
      .then(() => { console.log('Success');})
      .catch(err => {console.log('Error:' + err);});
});

app.delete("/students/:id", (req, res, next) => {
  Student.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json("Deleted!");
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.put('/students/:id', (req, res, next) => { 
  console.log("id: " + req.params.id) 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
      Student.findOneAndUpdate( 
          {_id: req.params.id}, 
          {$set:{ 
              firstName : req.body.firstName, 
              lastName : req.body.lastName 
          }}, 
          {new:true} 
      ) 
      .then((student) => { 
          if (student) { 
              console.log(student); 
          } else { 
              console.log("no data exist for this id"); 
          } 
      }) 
      .catch((err) => { 
          console.log(err); 
      }); 
  } else { 
      console.log("please provide correct id"); 
  } 
});