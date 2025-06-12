import UserRepository from "../repository/user-repository.js";
import bcrypt from "bcrypt";

export default class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const { email, password } = data;

      const exisitingUser = await this.userRepository.getUser(email);
      if (exisitingUser) {
        throw new Error("User already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.userRepository.createUser({
        ...data,
        password: hashedPassword,
      });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return { user, token };
    } catch (error) {
      throw error;
    }
  }

  async login(data) {
    const { email, password } = data;

    try {
      const user = await this.userRepository.getUser(email);

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

      return { user, token };
    } catch (error) {
      throw error;
    }
  }
}
