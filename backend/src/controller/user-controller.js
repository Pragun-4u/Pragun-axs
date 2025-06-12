import UserService from "../service/user-service.js";

const userService = new UserService();

const signup = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.signup(data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.login(data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { signup, login };
