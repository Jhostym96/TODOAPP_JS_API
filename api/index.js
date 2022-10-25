import express from "express";

const app = express();

app.use(express.json());

const tasks = [];


app.get("/", (req, res) => {

    return res.json({
        message: "Hola",
    });

});

app.get("/tasks", (req, res) => {

    res.json({
        tasks: tasks,
    });

});

app.post("./task", (req, res) => {
const task = req.body;
task.push(task);

res.json({
    message: "ok",
});
});


app.listen(4000);

