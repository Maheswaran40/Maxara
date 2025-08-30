// bulkUpload.js
const mongoose = require("mongoose");
const csv = require("csv-parser");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const dataModel = require("../model/userModel"); // updated schema path

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const results = [];

fs.createReadStream("csvbluk/imageData.csv", { encoding: "utf8" })
  .pipe(csv())
  .on("data", (row) => {
    results.push(row); // collect rows first
  })
  .on("end", async () => {
    try {
      for (let row of results) {
        // normalize keys
        let normalizedRow = {};
        for (let key in row) {
          if (key) normalizedRow[key.trim().toLowerCase()] = row[key];
        }

        if (!normalizedRow.filename) {
          console.warn("⚠️ Skipping row without filename:", normalizedRow);
          continue;
        }
        await dataModel.updateOne(
          { filename: normalizedRow.filename.trim().toLowerCase() }, // unique condition // normalized
          {
            $set: {
              url: (normalizedRow.url || "").trim(),
              folder: (normalizedRow.folder || "").trim(),
              name: (normalizedRow.name || "").trim(),
              price: (!isNaN(parseFloat(normalizedRow.price)))
                ? parseFloat(normalizedRow.price)
                : null,
              category: (normalizedRow.category || "").trim(),
              desc: (normalizedRow.desc || "").trim()
            }
          },
          { upsert: true }
        );
      }
      console.log("CSV data uploaded to 'images' collection ✅");
    } catch (err) {
      console.error("Error uploading data:", err);
    } finally {
      mongoose.connection.close();
    }
  });


  // node ./csvbluk/blukcode.js-------run command