const express = require("express");
const router = express.Router();
const Entry = require("../models/entry");

// Getting all entries
router.get("/", async (request, response) => {
  try {
    const entries = await Entry.find();
    response.json(entries);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

// Getting one entry
router.get("/:id", (request, response) => {});

// Creating an entry
router.post("/", async (request, response) => {
  const entry = new Entry({
    id: request.body.id,
    date: request.body.date,
    temperature: request.body.temperature,
    humidity: request.body.humidity,
    allergicReaction: request.body.allergicReaction,
    symptoms: request.body.symptoms,
    products: request.body.products,
  });

  try {
    const newEntry = await entry.save();
    response.status(201).json(newEntry);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

// Updating an entry
router.patch("/:id", (request, response) => {});

// Deleting an entry
router.delete("/:id", (request, response) => {});

module.exports = router;

// const entrySchema = new mongoose.Schema({
//   id: { type: ObjectId, required: true },
//   date: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },
//   temperature: Number,
//   humidity: Number,
//   allergicReaction: Boolean,
//   symptoms: [String],
//   products: [
//     {
//       id: { type: ObjectId, required: true },
//       time: String,
//       name: { type: String, required: true },
//       ingredients: [String],
//     },
//   ],
// });
