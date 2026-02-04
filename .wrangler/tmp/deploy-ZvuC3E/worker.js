// src/worker.ts
var worker_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);
    if (response.status === 404 && !url.pathname.includes(".")) {
      response = await env.ASSETS.fetch(new URL("/index.html", request.url));
    }
    return response;
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
