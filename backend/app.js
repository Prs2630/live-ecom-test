const express = require('express');
const app = express();
const cors=require('cors');

const productRoute=require("./routes/productRoute")

app.use(express.json())
app.use(cors())
app.use('/app',productRoute)
// app.use('/app',loginRoute)
// app.use('/app/homepage',excelRoute)
module.exports = app;