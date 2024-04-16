import { ApiError } from "next/dist/server/api-utils"
import { NextResponse } from "next/server"

export const textTransform = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const isSearchParamValid = (param: string) => {
  if (isNaN(parseInt(param))) {
    return false
  }

  return true
}

export const isApiError = (error: any): error is ApiError => {
  return (
    error && typeof error === "object" && "error" in error && "details" in error
  )
}

export const handleError = (error: any) => {
  if (isApiError(error)) {
    return NextResponse.json({
      ok: false,
      error: error.message,
      details: error.cause,
    })
  } else {
    return NextResponse.json({
      ok: false,
      error: "An unexpected error occurred",
      details: (error as Error).message || "No details available",
    })
  }
}
