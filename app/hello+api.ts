export function GET(request: Request) {
  console.log("get request to /hello");

  return Response.json({ hello: "world" });
}
