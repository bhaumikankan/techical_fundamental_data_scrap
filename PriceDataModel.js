const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const PriceDataSchema = new Schema(
  {
    symbol: { type: String },
    label: { type: String },
    Code: { type: String },
    Price: { type: String },
    Previous_Price: { type: String },
    Price_Change: { type: String },
    Latest_Volume: { type: String },
    Five_Period_Avg_Volume: { type: String },
    Sector: { type: String },
    Industry: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("PriceDataScraper", PriceDataSchema);
