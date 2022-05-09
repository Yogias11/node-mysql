import express from "express";
import cors from "cors";

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json('welcome to api nodejs');
});

const port = process.env.port || 8080;
app.listen(port, ()=> {
    console.log(`server running on port ${port}.`);
})