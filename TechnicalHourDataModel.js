const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const TechnicalHourDataSchema = new Schema(
  {
    symbol: { type: String },
    label: { type: String },
    Technical_Indicator: [],
    Overbought_Sold_Oscillators: [],
    Technicals_with_Overlay_Bands: [],
    Volume_based_Technicals: [],
  },
  { timestamps: true },
);

module.exports = mongoose.model(
  "TechnicalHourDataScraper",
  TechnicalHourDataSchema,
);
