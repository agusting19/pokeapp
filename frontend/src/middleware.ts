import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { i18n } from "./i18n/config"

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const locales: string[] = Array.from(i18n.locales)

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  return matchLocale(languages, locales, i18n.defaultLocale)
}

async function handleLocaleRedirection(
  request: NextRequest,
  pathnameIsMissingLocale: boolean,
  locale: string | undefined,
  pathname: string,
  params: string
): Promise<NextResponse | null> {
  if (pathnameIsMissingLocale && locale) {
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}${params}`,
        request.url
      )
    )
  }
  return null
}

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const pathname = request.nextUrl.pathname
  const params = `?${request.nextUrl.searchParams.toString()}`

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  const locale = getLocale(request)

  const localeRedirection = await handleLocaleRedirection(
    request,
    pathnameIsMissingLocale,
    locale,
    pathname,
    params
  )
  if (localeRedirection) return localeRedirection

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
