import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction
} from "remix";
import type { MetaFunction } from "remix";
import FavIcon from "./assets/Mask group.png"
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Station - the place you need for links.",
  viewport: "width=device-width,initial-scale=1",
});
export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: FavIcon,
      type: "image/png"
    }
  ]
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
