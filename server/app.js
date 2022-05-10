const express=require('express');
 const expenseRoutes = require("./routes/index");
require("./db/expenseTrack");
const cors = require('cors');
const app=express();

app.use(cors());
app.use(express.json());
const port=process.env.PORT||5000;
 app.use("/expenses", expenseRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.listen(port,()=>{
console.log('connected');

})