import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";

import Dom from "./components/layout/Dom";
import LCanvas from "./components/layout/Canvas";
import tailwindcss from "./tailwind.css"

export const meta = () => ({
  charset: "utf-8",
  title: "Remix ThreeJS Starter",
  viewport: "width=device-width,initial-scale=1",
  contentType: "text/html",
  description: "",
  keywords: "",
  robots: "index,follow",
  distribution: "web"
});

export function links() {
  return [{ rel: "stylesheet", href: tailwindcss }]
}

export default function App() {
  const matches = useMatches()
  const r3fRoute = matches.find(match => match.handle && match.handle.r3f)
  
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        { r3fRoute && <LCanvas>{r3fRoute.handle.r3f(r3fRoute)}</LCanvas> }
        <Dom>
          <Outlet />
        </Dom>
        
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
