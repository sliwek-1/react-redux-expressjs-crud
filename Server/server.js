import express from "express"
import cors from "cors"
import { Users } from "./models/usersModel.js";
import { fetchAllUsers } from "./actions/fetchAllUsers.js";
import { deleteUser } from "./actions/deleteUser.js";
import { createUser } from "./actions/createUsers.js";
import { updateUser } from "./actions/updateUser.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/api/allUsers', (req, res) => {
    fetchAllUsers()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(error => {
        res.send(404).json(error)
      })
});

app.post('/api/createUser/:firstname/:lastname/:email', async (req, res) => {
  try {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    const email = req.params.email;
    const newUser = {
      firstname: firstname,
      lastname: lastname,
      email: email
    }
    const users = await createUser(newUser);
    console.log(users)
    if(users) {
      res.status(200).json({ users });
    } else {
      res.status(500).json({ error: "Error" });
    }
  } catch(error) {
    throw new Error(error)
  }
})

app.put('/api/updateUser/:userId/:firstname/:lastname/:email',async (req, res) => {
  try {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    const email = req.params.email;
    const id = req.params.userId;
    const newUser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      id: id
    }
    const users = await updateUser(newUser);
    if(users) {
      res.status(200).json({ users });
    } else {
      res.status(500).json({ error: "Error" });
    }
  } catch(error) {
    throw new Error(error)
  }
})

app.delete('/api/deleteUser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await deleteUser(userId)
    if(result) {
      res.status(200).json({ userId });
    } else {
      res.status(500).json({ error: "Error" });
    }
  } catch(error) {
    throw new Error(error)
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});