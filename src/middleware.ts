import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req: any) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  const publicRoutes = ['/', '/login', '/about'];

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Se a rota for privada e o usuário não estiver autenticado, redirecionar para o login
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Se o usuário estiver autenticado, permitir o acesso à rota privada
  return NextResponse.next();
}

export const config = {
  matcher: ['/app/(private)/:path*'], // Protege todas as rotas dentro de "App/(private)"
};