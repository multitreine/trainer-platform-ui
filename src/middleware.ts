import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req: any) {
  let token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Verifica se a rota está dentro de /(public)/*
  if (pathname.startsWith('/public')) {
    return NextResponse.next(); // Permite o acesso a rotas públicas
  }

  // Se não houver token, define um token padrão
  if (!token) {
    token = {
      // Defina as propriedades padrão do token aqui
      name: 'Guest User',
      role: 'guest',
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expira em 1 hora
    };
  }

  // Permite o acesso à rota privada com o token (pode ser o padrão ou o autenticado)
  return NextResponse.next();
}

export const config = {
  matcher: ['/app/(private)/:path*'], // Protege todas as rotas dentro de "App/(private)"
};
