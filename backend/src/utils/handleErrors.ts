import { Response } from "express"

const handleErrors = (res: Response, error: Error) => {
  if (error.message === "No secret token provided") {
    return res.status(401).json({
      ok: false,
      error: "Authentication required",
      details: error.message,
    })
  } else if (error.message === "Invalid secret token") {
    return res.status(403).json({
      ok: false,
      error: "Access denied",
      details: error.message,
    })
  } else if (error.message.includes("timeout")) {
    return res.status(504).json({
      ok: false,
      error: "The server did not respond in time",
      details: error.message,
    })
  } else if (error.message.includes("failed")) {
    return res.status(502).json({
      ok: false,
      error: "Bad gateway",
      details: error.message,
    })
  } else {
    return res.status(500).json({
      ok: false,
      error: "Internal server error",
      details: error.message,
    })
  }
}

export default handleErrors
