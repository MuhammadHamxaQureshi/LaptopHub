import User from "../models/User.js";

export const updateProfile = (req, res) => {
  const { email, fullName, phoneNumber, city } = req.body;

  User.findOneAndUpdate(
    { email },
    { fullName, phoneNumber, city },
    { new: true },
  )
    .then((user) => {
      if (!user) return res.status(404).send("User not found");
      res.send("Profile updated successfully");
    })
    .catch((error) => res.status(500).send("Error updating profile: " + error));
};
