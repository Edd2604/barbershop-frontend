import { getToken } from 'next-auth/jwt'
import { NextResponse, type NextRequest } from 'next/server'
import { type JWT } from 'next-auth/jwt'

export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/admin/:path*'],
}

export async function middleware(req: NextRequest) {
  const token: JWT | null = await getToken({ req })

  if (!token) {
    return NextResponse.redirect(new URL('/not-found', req.url))
  }

  if (token.user?.role !== 'ADMINISTRADOR') {
    return NextResponse.redirect(new URL('/not-found', req.url))
  }

  return NextResponse.next()
}
