const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const FundamentalDataSchema = new Schema(
  {
    symbol: { type: String },
    label: { type: String },
    BalanceSheet: [],
    IncomeStatement: [],
    CashFlow: [],
    RiskPriceAndValuation: [],
    EfficiencyRatios: [],
  },
  { timestamps: true },
);

module.exports = mongoose.model(
  "FundamentalDataScraper",
  FundamentalDataSchema,
);
