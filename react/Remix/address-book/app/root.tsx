//  This code is extracted from the remix docs
//  https://remix.run/docs/en/main/start/tutorial

import { json, redirect } from "@remix-run/node";
import {
  Form,
  Links,
  NavLink,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit
} from "@remix-run/react";
import { useEffect } from "react";
import type { LinksFunction, LoaderFunctionArgs} from "@remix-run/node";
import appStylesHref from "./app.css?url";
// existing imports

import { createEmptyContact, getContacts } from "./data";

export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const quary = url.searchParams.get("quary");
  const contacts = await getContacts(quary);
  return json({ contacts, quary });
};

export default function App() {
  const { contacts, quary } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const submit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "quary"
    );
  useEffect(() => {
    const searchField= document.getElementById("q");
    if(searchField instanceof HTMLInputElement){
      searchField.value = quary ?? "";
    }
  }, [quary])


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Remix Contacts</h1>
          <div>
            <Form id="search-form" onChange={(event) => {
                const isFirstSearch = quary === null;
                submit(event.currentTarget, {
                  replace: !isFirstSearch,
                });
              }}
              role="search">
              <input
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
                defaultValue={quary || ""}
                placeholder="Search"
                type="search"
                name="quary"
              />
              <div id="search-spinner" aria-hidden hidden={!searching} />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                      to={`contacts/${contact.id}`}
                    >
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {contact.favorite ? <span>★</span> : null}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </nav>
        </div>
        <div className={ navigation.state === "loading" && !searching
              ? "loading"
              : ""} id="detail">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
