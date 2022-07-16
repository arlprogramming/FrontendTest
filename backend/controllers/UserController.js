import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll(); //User diambil dari UserModel.js
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

//Setelah membuat method diatas bikin routes dulu juga request.rest dan install ext. restclient

//lalu membuat method ini untuk mengambil single data
export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

//lalu membuat method create lalu tambahkan userRoute dan send request di request.rest
export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};

//lalu membuat method update lalu tambahkan userRoute dan send request di request.rest
export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

//lalu membuat method delete lalu tambahkan userRoute dan send request di request.rest
export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
