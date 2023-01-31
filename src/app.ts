import express from "express";
import db from "mongoose";
import todoRoutes from './router/routerTodo';
import { json, urlencoded } from "body-parser";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/todos", todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

db.connect("mongodb://localhost:27017/todos", () => {
  console.log("Database connected");
});

app.listen(3000);