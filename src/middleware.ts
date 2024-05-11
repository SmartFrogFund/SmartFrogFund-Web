import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!request.nextUrl.pathname.startsWith("/admin/login")) {
      if (request.cookies.get("token") === undefined) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
    }
  }
  return null;
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
