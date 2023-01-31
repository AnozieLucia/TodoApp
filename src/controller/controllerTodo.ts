import { RequestHandler } from "express";

import Todo, {TodoModel} from "../Model/ModelTodos"

export const createToDo: RequestHandler = async (req, res, next) => {
    try {
      const data: TodoModel = req.body;
      console.log("Data", data);
      var todos = await Todo.create(data);
      return res
        .status(200)
        .json({ message: "Todo created successfully", data: todos });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };

  export  const getToDo: RequestHandler =async(req,res, next)=>{
    try{
      const todos = await Todo.find()
      return res.status(200).json({
        data: todos,
        message: "all todos"
      })
    }
    catch(err: any){
      return res.status(500).json({message: err.message})
    }
  }


  export  const updateToDo: RequestHandler =async(req,res, next)=>{
    try{
      const {id} = req.params
      const todos = await Todo.findByIdAndUpdate(id, req.body, {new:true})
      res.status(200).json({
        data:todos,
        message: "Todo successfully updated"
      })
    }
    catch(err: any){
      return res.status(500).json({message: err.message})
    }
  }

  export const deleteToDo: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      var isDeleted = await Todo.findByIdAndDelete(id);
      if (!isDeleted) throw new Error("Failed to delete todo");
      return res.status(200).json({ message: "Todo deleted successfully!" });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };