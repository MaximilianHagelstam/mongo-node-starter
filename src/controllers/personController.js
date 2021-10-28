import Person from '../models/Person.js';

const showAll = (req, res) => {
  Person.find().then((persons) => {
    res.json(persons);
  });
};

const add = (req, res) => {
  const { name, number } = req.body;

  if (name === undefined || number === undefined) {
    return res.status(400).json({ error: 'content missing' });
  }

  const person = new Person({ name, number });
  person.save().then((savedPerson) => res.json(savedPerson));
};

export default { showAll, add };
