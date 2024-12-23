const express = require("express");
const router = express.Router();
const { Conferences, Users } = require("../models");

// Listarea tuturor conferințelor
router.get("/", async (req, res) => {
  const conferences = await Conferences.findAll();
  res.json(conferences);
});

// Crearea unei conferințe noi
router.post("/", async (req, res) => {
  const { name, date, description } = req.body;
  if (!name || !date) {
    return res.status(400).json({ message: "Name and date are required" });
  }
  const conference = await Conferences.create({ name, date, description });
  res.status(201).json(conference);
});

// Asocierea unui utilizator ca organizator
router.post("/:id/organizers", async (req, res) => {
  const { userId } = req.body;
  const conference = await Conferences.findByPk(req.params.id);
  if (!conference) {
    return res.status(404).json({ message: "Conference not found" });
  }
  const user = await Users.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  await conference.addOrganizer(user);
  res.status(200).json({ message: "User added as organizer" });
});

module.exports = router;
