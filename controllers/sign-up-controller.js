const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

async function signUp(req, res) {
  try {
    const { username, password } = req.body;

    if(username === "" || username.length < 4 && password === "" || password.length < 4) {
        return res.json({message: "Username and password cannot be empty or less than 3 characters"})
    }

    const user = await prisma.users.findUnique({
      where: {
        username,
      },
    });

    if (user) {
      return res.json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const signUserUp = await prisma.users.create({
      data: {
        username,
        password : hashedPassword,
      },
    });

    return res.json({success : true})
  } catch (error) {
    return res.json(error);
  }
}

module.exports = {
  signUp,
};
