import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

const Person = model('Person', PersonSchema);

export default Person;
