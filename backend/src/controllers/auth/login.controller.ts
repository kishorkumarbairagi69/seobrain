import { Request, Response } from "express";
import { loginUser } from "../../services/auth.service";

export async function loginController(
  req: Request,
  res: Response
) {
  try {
    const { email, password } = req.body;

    const data = await loginUser(
      email,
      password
    );

    res.status(200).json({
      success: true,
      ...data,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Login failed",
    });
  }
}