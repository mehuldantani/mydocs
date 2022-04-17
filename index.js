const express = require("express");

//swagger api document relateds
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

//for swagger api documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT || 4100;

app.get("/",(req,resp)=>{
    resp.send("<h1> Welcome to MyDocs.</h1>");
})

app.listen(PORT,()=>{
    console.log("Server is running on ${"+PORT+"}");
})