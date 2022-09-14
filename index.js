const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); //or middleware  body parser

const port = process.env.PORT || 5000;
/*
const handler=(req, res) => {
    res.send("success");
  }
  app
  .get("/", handler);
  app.listen(port,()=>{})
*/

const users = [
  {
    id: 0,
    name: "shabana",
    email: "shabana@gmail.com",
    phone: "017222222222",
  },
  {
    id: 1,
    name: "sabnur",
    email: "sabnur@gmail.com",
    phone: "017222222222",
  },
  {
    id: 2,
    name: "pornima",
    email: "pornima@gmail.com",
    phone: "017222222222",
  },
  {
    id: 3,
    name: "mehjabin",
    email: "mehjabin@gmail.com",
    phone: "017222222222",
  },
  {
    id: 4,
    name: "tanjin",
    email: "tanjin@gmail.com",
    phone: "017222222222",
  },
];

app.get("/users", (req, res) => {
  //   res.send("Here is my users");
  //   console.log(req.query.name);
  //   console.log(req.query.order);
  const search = req.query.search;
  //use search query parameter
  if (search) {
    const result = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(result);
  } else {
    res.send(users);
  }
});

// app.method

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  // console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});
//dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
  //   console.log(req.params.id);
});

app
  .get("/", (req, res) => {
    res.send("Here is my home page");
  })
  .listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
