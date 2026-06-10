import { Request, Response } from "express";
import { registerUser } from "../../services/auth.service";

export async function registerController(
  req: Request,
  res: Response
) {
  try {
    const { name, email, password } = req.body;

    const user = await registerUser(
      name,
      email,
      password
    );

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Registration failed",
    });
  }
}