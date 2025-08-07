export default {
  async fetch(_req: Request, _env: any) {
    return new Response("Hello from LaunchWing!", { headers: { "Content-Type": "text/plain" } });
  }
};