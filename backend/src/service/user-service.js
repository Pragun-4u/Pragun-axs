import UserRepository from "../repository/user-repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const { username, password } = data;

      const exisitingUser = await this.userRepository.getUser(username);
      if (exisitingUser) {
        throw new Error("User already exists. Please log in.");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.userRepository.createUser({
        ...data,
        password: hashedPassword,
      });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return { token };
    } catch (error) {
      throw error;
    }
  }

  async login(data) {
    const { username, password } = data;

    try {
      const user = await this.userRepository.getUser(username);

      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        throw new Error("Password does not match");
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return {
        user: {
          userName: user?.firstName ?? "" + " " + user?.lastName ?? "",
        },
        token,
      };
    } catch (error) {
      throw error;
    }
  }
}
