import { NextFunction, Request, Response } from "express"
import handleErrors from "../utils/handleErrors"

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"

export const verifySecret = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientSecret = req.headers["x-access-token"]

  if (!clientSecret) {
    const error = new Error("No secret token provided")
    return handleErrors(res, error)
  }

  if (clientSecret !== SECRET_KEY) {
    const error = new Error("Invalid secret token")
    return handleErrors(res, error)
  }

  next()
}
