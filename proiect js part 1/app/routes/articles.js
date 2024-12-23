const express = require("express");
const router = express.Router();
const { Articles, Users } = require("../models");

// Crearea unui articol nou
router.post("/", async (req, res) => {
  const { title, content, authorId, conferenceId } = req.body;
  if (!title || !content || !authorId || !conferenceId) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const article = await Articles.create({ title, content, authorId, conferenceId });
  res.status(201).json(article);
});

// Aprobare/revizie articol
router.put("/:id/review", async (req, res) => {
  const { status, feedback } = req.body;
  const article = await Articles.findByPk(req.params.id);
  if (!article) {
    return res.status(404).json({ message: "Article not found" });
  }
  article.status = status || article.status;
  article.feedback = feedback || article.feedback;
  await article.save();
  res.status(200).json(article);
});

module.exports = router;
