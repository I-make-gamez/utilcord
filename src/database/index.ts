import mongoose from "mongoose";

mongoose
  .connect(`${process.env.MONGODBURL}`)
  .then(() => {
    console.log(`connected`);
  })
  .catch((err) => {
    console.log(err);
  });
