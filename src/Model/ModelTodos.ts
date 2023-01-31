import * as mongoose from "mongoose";
import { Model } from "mongoose";

type TodoType = TodoModel & mongoose.Document


export interface TodoModel{
    title : {
        required:true,
        type:String
    },
    description : {
        required:true,
        type:String
    }
}
 

const TodoSchema = new mongoose.Schema({
    title : {
        required:true,
        type:String
    },
    description : {
        required:true,
        type:String
    }
})

const Todo:Model <TodoType> = mongoose.model<TodoType>('Todo', TodoSchema)

export default Todo