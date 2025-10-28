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
  // Validate first (works even if DB offline)
  let { title, content } = req.body || {};
  if (typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ error: 'title is required' });
  }
  title = title.trim();
  if (title.length < 3) {
    return res.status(400).json({ error: 'title must have at least 3 characters' });
  }
  const maybeErr = ensureDb(req, res);
  if (maybeErr) return maybeErr;
  const note = await Note.create({ title, content });
  res.status(201).json(note);
}

async function remove(req, res) {
  const maybeErr = ensureDb(req, res);
  if (maybeErr) return maybeErr;
  const { id } = req.params;
  const deleted = await Note.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ error: 'note not found' });
  res.status(204).send();
}

async function update(req, res) {
  // Validate basics first
  const { id } = req.params;
  let { title, content } = req.body || {};
  if (title != null) {
    if (typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({ error: 'title cannot be empty' });
    }
    title = title.trim();
    if (title.length < 3) {
      return res.status(400).json({ error: 'title must have at least 3 characters' });
    }
  }
  const maybeErr = ensureDb(req, res);
  if (maybeErr) return maybeErr;
  const updated = await Note.findByIdAndUpdate(
    id,
    { $set: { ...(title != null ? { title } : {}), ...(content != null ? { content } : {}) } },
    { new: true }
  );
  if (!updated) return res.status(404).json({ error: 'note not found' });
  res.json(updated);
}

module.exports = { list, create, remove, update };
