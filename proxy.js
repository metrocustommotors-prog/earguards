import { NextResponse } from "next/server";

const APEX_HOST = "earguards.com";

/**
 * Send www to the apex host. Canonical tags already point at
 * https://earguards.com; this makes the preferred host the one that answers.
 * HTTP to HTTPS is left to Cloudflare "Always Use HTTPS" so this proxy cannot
 * loop when the edge connects to the Worker over HTTP.
 */
export function proxy(request) {
  const hostHeader =
    request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
  const host = hostHeader.split(",")[0].trim().replace(/:\d+$/, "").toLowerCase();

  if (host !== `www.${APEX_HOST}`) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = APEX_HOST;
  url.port = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/", "/:path*"],
};
