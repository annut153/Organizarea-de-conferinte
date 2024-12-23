const express = require("express");
const router = express.Router();
const db = require("../models");
const models = require("../models");
const User = models.Users;

//requestul 


//ia toti userii din baza de date
router.get("/", (req, res) => {
  User.findAll().then((users) => {
    res.json(users);
  });
});

//returneaza un anumit user dupa id ul introdus 
router.get("/:id", (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    res.json(user);
  });
});

router.post("/", (req, res) => {
  try {
    //ia din postman ce am scris ca si json in body
    const { username, password, email } = req.body;

    if (!username  || !password || !email) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    //ca sa nu iti poata accesa cineva datele 
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      const user = await User.create({ username, password: hash, email });
      return res.status(201).json(user);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

//verifica daca userul introdus (username si parola) exista in baza de date
//500 -eroare de autorizare
//200 - e ok
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ where: { username } }).then((user) => {
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      if (result) {
        return res.status(200).json(user);
      }
      return res.status(401).json({ message: "Incorrect password" });
    });
  });
});

//daca vreau sa modific un user cu idul introdus
//persoana cu cnpul ... isi schimba numele din ... in ...
router.put("/:id", (req, res) => {
  User.update(req.body, { where: { id: req.params.id } }).then((user) => {
    res.json(user);
  });
});

//daca vreau sa sterg un user cu idul introdus
router.delete("/:id", (req, res) => {
  User.destroy({ where: { id: req.params.id } }).then((user) => {
    res.json(user);
  });
});

module.exports = router; //de aici se vor trage date