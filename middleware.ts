import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  
  // if(req.nextUrl.pathname.startsWith("/api")) {
    
  //   console.log(req.url);

  // }
  

  return NextResponse.next();
}
