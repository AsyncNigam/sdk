import type { RequestInfo } from "rwsdk/worker";

export function RedirectingComponent({ request }: RequestInfo) {
  const url = new URL(request.url);
  return Response.redirect(`${url.origin}/`, 302);
  return <div>This should never render</div>;
}
