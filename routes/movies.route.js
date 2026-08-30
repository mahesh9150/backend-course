import express, { response } from 'express'
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from '../controllers/movies.controller';
const router = express.Router()

//mvc


//for reading mvies
router.get("/", MovieIndex),
//for creating movies
router.post("/", MovieCreate);
     
//u- for updating movies
router.put("/", MovieUpdate );
//D - for delete movies
router.delete("/:id", MovieDelete);
export default router;