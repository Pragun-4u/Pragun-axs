import UserService from "../service/user-service.js";

const userService = new UserService();

const signup = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.signup(data);
    return res.status(200).json({
      success: true,
      response,
      message: "User signed up successfully.",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.login(data);
    return res.status(200).json({
      success: true,
      response,
      message: "Logged In Successfully.",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { signup, login };
