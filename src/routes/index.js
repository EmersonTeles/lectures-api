import express from "express";
import teachersRouter from "./teachersRouter.js";
import lecturesRouter from "./lecturesRouter.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Home Page");
  });

  app.use(express.json(), lecturesRouter, teachersRouter);
};

export default routes;
