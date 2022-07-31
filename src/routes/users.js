module.exports = () => {
  const findAll = (req, res) => {
    const users = [{
      name: 'Jonh', email: 'john@hotmail.com',
    }];
    res.status(200).json(users);
  };

  const createUser = (req, res) => {
    res.status(201).json(req.body);
  };
  return { findAll, createUser };
};
