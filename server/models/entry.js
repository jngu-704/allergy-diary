const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  id: { type: String, required: true },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  temperature: Number,
  humidity: Number,
  allergicReaction: Boolean,
  symptoms: [String],
  products: [
    {
      id: { type: String, required: true },
      time: String,
      name: { type: String, required: true },
      ingredients: [String],
    },
  ],
});

module.exports = mongoose.model("Entry", entrySchema);

// const entriesData = [
//   {
//     id: uuidv4(),
//     date: "31-03-2023",
//     temperature: 30,
//     humidity: 40,
//     allergicReaction: false,
//     symptoms: "",
//     products: [
//       {
//         id: uuidv4(),
//         time: "6:30PM",
//         name: "Burger",
//         ingredients:
//           "Bun, Beef Patty, American Cheese, Ketchup, Pickle Slices, Onions, Mustard",
//       },
//       {
//         id: uuidv4(),
//         time: "12:30PM",
//         name: "Coca-cola",
//         ingredients:
//           "Carbonated Water, Sugar, Colour (Caramel 150d), Food Acid (338), Flavour, Caffeine",
//       },
//     ],
//   },
// ];
