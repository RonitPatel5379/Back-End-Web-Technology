import express, { response } from "express";
import Librarian from "../models/librarian.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const librarian = await Librarian.create(req.body);
    res.status(201).json(librarian);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const librarians = await Librarian.find();
    res.json(librarians);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const librarian = await Librarian.findById(req.params.id);
    if (!librarian)
      return res.status(404).json({ message: "Librarian not found"});
    res.json(librarian);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedLibrarian = await Librarian.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedLibrarian)
      return res.status(404).json({ message: "Librarian not found"});
    res.json(updatedLibrarian);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedLibrarian = await User.findByIdAndDelete(req.params.id);

    if (!deletedLibrarian)
      return res.status(404).json({ message: "Librarian not found" });

    res.json({ message: "Librarian deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;