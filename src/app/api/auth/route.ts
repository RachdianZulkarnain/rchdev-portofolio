// Dummy route supaya Next.js tidak error
export function GET() {
  return new Response("Auth route removed", { status: 200 });
}

export function POST() {
  return new Response("Auth route removed", { status: 200 });
}
