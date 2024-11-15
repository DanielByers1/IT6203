const express = require('express');
const mongoose = require('mongoose');
const Packing = require('./models/Packing');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Item_List', {

}).then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

app.post('/add-item', async (req, res) => {
    try {
        const newItem = new Packing({ item: req.body.item });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/items', async (req, res) => {
    try {
        const items = await Packing.find({});
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/delete-item/:id', async (req, res) => {
    try {
        await Packing.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/update-item/:id', async (req, res) => {
    try {
        const updatedItem = await Packing.findByIdAndUpdate(
            req.params.id,
            { item: req.body.item },
            { new: true }
        );
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
