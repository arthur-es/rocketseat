const express = require("express")

const server = express();

server.use(express.json());

//Middleware global:  
server.use((req, res, next) => {
    console.time("Request");

    console.log(`Método: ${req.method} - `, `URL: ${req.url}`);

    next();

    console.timeEnd("Request");
});

function checkNameExists(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: "Request body: name is required." })
    }

    return next();
}

function checkUserIndex(req, res, next) {
    if (!users[req.params.index]) {
        return res.status(404).json({ error: "Param: user does not exist." })
    }
    return next();
}

let users = ["Arthur Castro", "Lucas", "Isadora"];

server.get("/users", (req, res) => {
    return res.json({ users: users })
});

server.get("/users/:index", checkUserIndex, (req, res) => {
    const { index } = req.params;
    return res.json(
        {
            user: `${users[index]}`
        }
    );
});

server.post("/users", checkNameExists, (req, res) => {
    const { name } = req.body;
    users.push(name);
    return res.json({ name: `${name}` });
});

server.put("/users/:index", checkUserIndex, checkNameExists, (req, res) => {
    const { name } = req.body;
    const { index } = req.params;
    users[index] = name;
    return res.json({ users });
});

server.delete("/users/:index", checkUserIndex, (req, res) => {
    const { index } = req.params;
    users.splice(index, 1);
    return res.send();
})


server.listen(3000, () => {
    console.log("Server listening on port 3000.")
});