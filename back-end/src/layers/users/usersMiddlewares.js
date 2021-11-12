const { users } = require('../../database/models');
const crypto = require('crypto');

const getAll = async (req, res) => {
  try {
    const data = await users.findAll({ attributes: { exclude: ['password'] } });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Busca por id utilizando a chave primária
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const data = await users.findByPk(id,
      { attributes: { exclude: ['password'] },
    });
    if (data === null) { return res.status(404).json({ message: 'User does not exist' }); }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Buscar por id utilizando where
// const getById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await users.findOne({
//       where: { id },
//       attributes: { exclude: ['password'] },
//     });
//     return res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    console.log(id);
    const obj = { name, email, password, role };
    await users.update(obj, { where: { id } });
  return res.status(200).json(obj);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToDelete = await users.findByPk(id);
    await dataToDelete.destroy();
    return res.status(200).json(dataToDelete);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/* // Como remover chave de objeto
const removeKeyInObject = (obj, key) => {
  const { [key]: _, ...newObj } = obj;
   return newObj;
};
*/

const createNew = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log(name);
    const obj = { name, email, password, role };
    const newData = await users.create(obj);
    req.userInfo = { name, email, role };
    // req.userInfo = removeKeyInObject(obj, 'password');
    // const newData = await User.create(obj);
    return res.status(201).json(newData);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  updateById,
  deleteById,
  createNew,
};
