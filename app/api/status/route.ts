export async function GET() {
  return new Response(
    JSON.stringify({
      status: "OK",
      version: "v4.1",
      message: "Canonical Companion baseline active"
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
