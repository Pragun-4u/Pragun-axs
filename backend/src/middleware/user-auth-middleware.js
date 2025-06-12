const signUpAndLoginMiddleware = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i).test(username))
    throw res
      .status(400)
      .json({ success: false, message: "Username is Invalid" });

  if (
    !password ||
    !new RegExp(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    ).test(password)
  )
    throw res
      .status(400)
      .json({ success: false, message: "Password is Invalid" });

  next();
};

export { signUpAndLoginMiddleware };
