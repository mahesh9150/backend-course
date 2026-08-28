import express from "express";
const app =express();
const PORT =6969;


app.get('/', (req,res) => {
    res.json({
        msg: "Hello students"
    })

});
// crud functionality of movies
//for reading mvies
app.get('/movies', () =>{

})
//for creating movies
app.post('/movies', () =>{
    
})
//u- for updating movies
app.put('/movies/:id', ()=>{

})
//D - for delete movies
app.delete('/movies/:id', () =>{
    
})


app.listen(PORT, ()=>{
    console.log(`The server is running at http://localhost:${6969}`);
    
});



