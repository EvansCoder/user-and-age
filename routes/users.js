import express from "express";
import user from "../models/users.model.js";
const router = express.Router();

router.get("/", (req, res) => {
  user
    .find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => console.log("User not  added"));
});
router.post("/add", (req, res) => {
  const username = req.body.username;
  const age = req.body.age;

  const newUser = new user({ username, age });
  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch(() => console.log("Error"));
});
router.patch("/update/:id", (req, res) => {
  user
    .findById(req.params.id)
    .then((update) => {
      update.username = req.body.username;
      update.age = Number(req.body.age);

      update
        .save()
        .then(() => res.json("user updated!"))
        .catch((error) => res.status(400).json("Error:" + error));
    })
    .catch((error) => res.status(400).json("Error:" + error));
});
router.delete("/delete/:id", (req, res) => {
  user
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("user Deleted!"))
    .catch((error) => res.status(400).json("Error:" + error));
});

export default router;
