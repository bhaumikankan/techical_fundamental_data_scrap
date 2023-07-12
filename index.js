const axios = require("axios");
const cheerio = require("cheerio");
const https = require("https");
const express = require("express");
const symbol_list = require("./symbol");
const app = express();
const mongoose = require("mongoose");
const FundamentalDataModel = require("./FundamentalDataModel");
const TechnicalDailyDataModel = require("./TechnicalDailyDataModel");
const TechnicalHourDataModel = require("./TechnicalHourDataModel");
const PriceDataModel = require("./PriceDataModel");

const fetchFundamentalData = async (url, child_no) => {
  try {
    const data = [];
    const result = await axios.get(url, {
      headers: {
        host: "www.topstockresearch.com",
        "Content-Type": "application/json",
        "User-Agent": "PostmanRuntime/7.32.3",
      },
    });
    const $ = cheerio.load(result.data);
    const tableHeaderSelector = `body > div:nth-child(5) > div:nth-child(${child_no}) > div > div > div.card-body > div > table > thead >tr >th`;

    const headers = [];
    $(tableHeaderSelector).each((i, el) => {
      headers.push($(el).text().trim());
    });
    const tableRowSelector = `body > div:nth-child(5) > div:nth-child(${child_no}) > div > div > div.card-body > div > table > tbody > tr`;
    $(tableRowSelector).each((i, el) => {
      const obj = {};
      const tableColSelector = `body > div:nth-child(5) > div:nth-child(${child_no}) > div > div > div.card-body > div > table > tbody > tr:nth-child(${
        i + 1
      }) > td`;
      $(tableColSelector).each((i, el) => {
        obj[headers[i]] = $(el).text().trim();
      });
      data.push(obj);
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchTechnicalData = async (url, child_no, thead1, thead2) => {
  const result = await axios.get(url, {
    headers: {
      host: "www.topstockresearch.com",
      "Content-Type": "application/json",
      "User-Agent": "PostmanRuntime/7.32.3",
    },
  });
  const $ = cheerio.load(result.data);
  const data = [];
  const tableHeaderSelector = `body > div:nth-child(5) > div:nth-child(${child_no}) > div > div > div > table > ${thead1} > tr > th`;
  const headers = [];
  $(tableHeaderSelector).each((i, el) => {
    headers.push($(el).text().trim());
  });
  const tableRowSelector = `body > div:nth-child(5) > div:nth-child(${child_no}) > div > div > div > table > ${thead2} > tr`;
  $(tableRowSelector).each((i, el) => {
    const obj = {};

    const tableColSelector = `body > div:nth-child(5) > div:nth-child(${child_no}) > div > div > div > table > ${thead2} > tr:nth-child(${
      i + 1
    }) > td`;
    $(tableColSelector).each((i, el) => {
      obj[headers[i + 1]] = $(el).text().trim();
    });
    const tableFirstColumn = `body > div:nth-child(5) > div:nth-child(${child_no}) > div > div > div > table > ${thead2} > tr:nth-child(${
      i + 1
    }) > th`;
    if ($(tableFirstColumn).text().trim()) {
      obj[headers[0]] = $(tableFirstColumn).text().trim();
    }
    data.push(obj);
  });
  return data;
};

const getFundamentalDataFetchUrls = async () => {
  for (const SYMBOL of symbol_list) {
    const result = await axios.get(
      `https://www.topstockresearch.com/rt/AutoComplete.tsr?ex=in&eqSubCat=BalanceSheet&term=${SYMBOL}`,
      {
        headers: {
          host: "www.topstockresearch.com",
          "Content-Type": "application/json",
          "User-Agent": "PostmanRuntime/7.32.3",
        },
      },
    );
    const BalanceSheeturl = result.data[0].id;
    if (BalanceSheeturl == "#") {
      console.log("Symbol:", SYMBOL, " data Insertion failed");
      continue;
    }
    const label = result.data[0].label;
    const IncomeStatementurl = result.data[0].id.replace(
      "BalanceSheetOf",
      "IncomeStatementOf",
    );
    const CashFlowurl = result.data[0].id.replace(
      "BalanceSheetOf",
      "CashFlowOf",
    );
    const RiskPriceAndValuationurl = result.data[0].id.replace(
      "BalanceSheetOf",
      "RiskPriceAndValuationOf",
    );
    const EfficiencyRatiosurl = result.data[0].id.replace(
      "BalanceSheetOf",
      "EfficiencyRatiosOf",
    );

    const FundamentalDataObj = {
      symbol: SYMBOL,
      label,
    };
    const BalanceSheet = await fetchFundamentalData(BalanceSheeturl, 14);
    const IncomeStatement = await fetchFundamentalData(IncomeStatementurl, 14);
    const CashFlow = await fetchFundamentalData(CashFlowurl, 14);
    const RiskPriceAndValuation = await fetchFundamentalData(
      RiskPriceAndValuationurl,
      15,
    );
    const EfficiencyRatios = await fetchFundamentalData(
      EfficiencyRatiosurl,
      15,
    );
    (FundamentalDataObj["BalanceSheet"] = BalanceSheet),
      (FundamentalDataObj["IncomeStatement"] = IncomeStatement),
      (FundamentalDataObj["CashFlow"] = CashFlow),
      (FundamentalDataObj["RiskPriceAndValuation"] = RiskPriceAndValuation),
      (FundamentalDataObj["EfficiencyRatios"] = EfficiencyRatios);

    await FundamentalDataModel.findOneAndUpdate(
      { symbol: SYMBOL },
      FundamentalDataObj,
      {
        upsert: true,
      },
    );
    console.log(
      "Symbol:",
      SYMBOL,
      "Label:",
      label,
      " fundamental data Inserted",
    );
  }
};

const getTechnicalDataFetchDailyUrls = async (hour = false) => {
  try {
    for (const SYMBOL of symbol_list) {
      const result = await axios.get(
        `https://www.topstockresearch.com/rt/AutoComplete.tsr?ex=in&eqSubCat=BalanceSheet&term=${SYMBOL}`,
        {
          headers: {
            host: "www.topstockresearch.com",
            "Content-Type": "application/json",
            "User-Agent": "PostmanRuntime/7.32.3",
          },
        },
      );
      const BalanceSheeturl = result.data[0].id;
      if (BalanceSheeturl == "#") {
        console.log("Symbol:", SYMBOL, " data Insertion failed");
        continue;
      }
      const label = result.data[0].label;
      const TechnicalDataObj = {
        symbol: SYMBOL,
        label,
      };
      let url = `https://www.topstockresearch.com/rt/TechStrength/${SYMBOL}/Tech/Daily`;
      if (hour) {
        url = `https://www.topstockresearch.com/rt/TechStrength/${SYMBOL}/Tech/Hour1`;
      }

      const Technical_Indicator = await fetchTechnicalData(
        url,
        24,
        "thead",
        "tbody",
      );
      const Overbought_Sold_Oscillators = await fetchTechnicalData(
        url,
        26,
        "tbody:nth-child(1)",
        "tbody:nth-child(2)",
      );
      const Technicals_with_Overlay_Bands = await fetchTechnicalData(
        url,
        27,
        "tbody:nth-child(1)",
        "tbody:nth-child(2)",
      );
      const Volume_based_Technicals = await fetchTechnicalData(
        url,
        29,
        "tbody:nth-child(1)",
        "tbody:nth-child(2)",
      );
      TechnicalDataObj["Technical_Indicator"] = Technical_Indicator;
      TechnicalDataObj["Overbought_Sold_Oscillators"] =
        Overbought_Sold_Oscillators;
      TechnicalDataObj["Technicals_with_Overlay_Bands"] =
        Technicals_with_Overlay_Bands;
      TechnicalDataObj["Volume_based_Technicals"] = Volume_based_Technicals;

      if (hour) {
        await TechnicalHourDataModel.findOneAndUpdate(
          { symbol: SYMBOL },
          TechnicalDataObj,
          {
            upsert: true,
          },
        );
        console.log(
          "Symbol:",
          SYMBOL,
          "Label:",
          label,
          " Technical hour data Inserted",
        );
      } else {
        await TechnicalDailyDataModel.findOneAndUpdate(
          { symbol: SYMBOL },
          TechnicalDataObj,
          {
            upsert: true,
          },
        );
        console.log(
          "Symbol:",
          SYMBOL,
          "Label:",
          label,
          " Technical daily data Inserted",
        );
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const getLivePrice = async (url) => {
  const result = await axios.get(url, {
    headers: {
      host: "www.topstockresearch.com",
      "Content-Type": "application/json",
      "User-Agent": "PostmanRuntime/7.32.3",
    },
  });
  const $ = cheerio.load(result.data);
  const data = {};
  const tableHeaderSelector =
    "body > div:nth-child(5) > div:nth-child(22) > div > div > div > table > thead > tr > th";
  const headers = [];
  $(tableHeaderSelector).each((i, el) => {
    headers.push($(el).text().trim());
  });
  const tableRowSelector =
    "body > div:nth-child(5) > div:nth-child(22) > div > div > div > table > tbody > tr > td";
  $(tableRowSelector).each((i, el) => {
    data[headers[i]] = $(el).text().trim();
  });
  return data;
};

const getLivePriceUrls = async () => {
  for (const SYMBOL of symbol_list) {
    const result = await axios.get(
      `https://www.topstockresearch.com/rt/AutoComplete.tsr?ex=in&eqSubCat=BalanceSheet&term=${SYMBOL}`,
      {
        headers: {
          host: "www.topstockresearch.com",
          "Content-Type": "application/json",
          "User-Agent": "PostmanRuntime/7.32.3",
        },
      },
    );
    const BalanceSheeturl = result.data[0].id;
    if (BalanceSheeturl == "#") {
      console.log("Symbol:", SYMBOL, " data Insertion failed");
      continue;
    }
    const label = result.data[0].label;
    const url = `https://www.topstockresearch.com/rt/TechStrength/${SYMBOL}/Tech/Min5`;
    const data = await getLivePrice(url);
    const priceDataObj = {
      symbol: SYMBOL,
      label: label,
      Code: data["Code"],
      Price: data["Price"],
      Previous_Price: data["Previous Price"],
      Price_Change: data["Price Change"],
      Latest_Volume: data["Latest Volume"],
      Five_Period_Avg_Volume: data["5 Period Avg Volume"],
      Sector: data["Sector"],
      Industry: data["Industry"],
    };

    await PriceDataModel.findOneAndUpdate({ symbol: SYMBOL }, priceDataObj, {
      upsert: true,
    });
    console.log(
      "Symbol:",
      SYMBOL,
      "Label:",
      label,
      " Live Price data Inserted",
    );
  }
};

app.listen(8080, () => {
  console.log("server running on port 8080");
  mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
    console.log("Connected!");
    //getFundamentalDataFetchUrls(); //fundamental
    //getTechnicalDataFetchDailyUrls(); //daily technical
    //getTechnicalDataFetchDailyUrls(true); //hourly technical
    getLivePriceUrls(); //Live Price
  });
});
