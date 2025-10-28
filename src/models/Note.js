const { Schema, model } = require('mongoose');

const NoteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = model('Note', NoteSchema);
