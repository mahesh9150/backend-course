import express, { response } from 'express'
const router = express.Router()

// /movies/movies
//for reading mvies
router.get('/', (req, res) =>{
    res.send("Get all movie lists")
    

});
//for creating movies
router.post('/', (req, res) =>{
     res.send("Create a movie")
    
});
//u- for updating movies
router.put('/:id', (req, res)=>{
     res.send("update the movie")

});
//D - for delete movies
router.delete('/:id', (req, res) =>{
     res.send("delete the movie")
    
});
export default router;