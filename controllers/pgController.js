const PG = require('../models/PG');

exports.getAllPGs = async (req, res) => {
  try {
    const pgs = await PG.find().populate('amenities');
    res.json(pgs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPGById = async (req, res) => {
  try {
    const pg = await PG.findById(req.params.id).populate('amenities');
    if (!pg) {
      return res.status(404).json({ message: 'PG not found' });
    }
    res.json(pg);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPG = async (req, res) => {
  try {
    const pg = new PG(req.body);
    const saved = await pg.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePG = async (req, res) => {
  try {
    const updated = await PG.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'PG not found' });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePG = async (req, res) => {
  try {
    const deleted = await PG.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'PG not found' });
    }
    res.json({ message: 'PG deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};