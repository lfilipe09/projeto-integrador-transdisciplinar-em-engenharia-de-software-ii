const Note = require('../models/Note');
const { connectionStatus } = require('../db');

function ensureDb(req, res) {
  const status = connectionStatus();
  if (status !== 1) {
    return res.status(503).json({ error: 'Database not connected' });
  }
}

async function list(req, res) {
  const maybeErr = ensureDb(req, res);
  if (maybeErr) return maybeErr;
  const notes = await Note.find().sort({ createdAt: -1 }).lean();
  res.json(notes);
}

async function create(req, res) {
  const maybeErr = ensureDb(req, res);
  if (maybeErr) return maybeErr;
  const { title, content } = req.body || {};
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'title is required' });
  }
  const note = await Note.create({ title, content });
  res.status(201).json(note);
}

module.exports = { list, create };
