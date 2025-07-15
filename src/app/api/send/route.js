export async function POST(req) {
  return new Response(
    JSON.stringify({ message: "This is a dummy response." }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
