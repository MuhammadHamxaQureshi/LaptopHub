import User from "../models/User.js";

export const registerUser = (req, res) => {
  const { fullName, email, password, accountType } = req.body;
  const newUser = new User({ fullName, email, password, accountType });

  newUser.save()
    .then((savedUser) => res.status(201).send(`User registered successfully. ID: ${savedUser._id}`))
    .catch((error) => res.status(500).send("Error registering user: " + error));
};

export const loginUser = (req, res) => {
  const { email, password, accountType } = req.body;

  User.findOne({ email, password, accountType })
    .then((user) => {
      if (!user) return res.status(401).send("Invalid login details");
      res.send("Login successful");
    })
    .catch((error) => res.status(500).send("Error logging in: " + error));
};
