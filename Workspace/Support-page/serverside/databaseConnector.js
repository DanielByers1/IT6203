const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const mongoose = require('mongoose');


app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/supportTickets', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


const Ticket = require('./models/ticket');


app.get('/readTickets', async (req, res) => {
    try {
        const tickets = await Ticket.find({});
        res.json(tickets);
    } catch (error) {
        console.error('Error fetching tickets:', error);
        res.status(500).json({ error: 'Error fetching tickets' });
    }
});


app.post('/createTicket', async (req, res) => {
    try {
        const newTicket = new Ticket(req.body);
        const result = await newTicket.save();
        res.json(result);
    } catch (error) {
        console.error('Error creating ticket:', error);
        res.status(500).json({ error: 'Error creating ticket' });
    }
});


app.put('/updateTicket/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTicket = req.body;
        const result = await Ticket.findByIdAndUpdate(id, updatedTicket, { new: true });
        res.json(result);
    } catch (error) {
        console.error('Error updating ticket:', error);
        res.status(500).json({ error: 'Error updating ticket' });
    }
});


app.delete('/deleteTicket/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Ticket.findByIdAndDelete(id);
        res.json(result);
    } catch (error) {
        console.error('Error deleting ticket:', error);
        res.status(500).json({ error: 'Error deleting ticket' });
    }
});


app.listen(5000, () => {
    console.log('Database Connector running on http://localhost:5000');
});
