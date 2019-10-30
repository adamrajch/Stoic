import React from "react";
import Link from "next/link";
// import Head from "next/head";
import Header from "./Header";
const links = [
  { href: "/about", label: "About" },
  { href: "/adam", label: "Creator" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <div>
    <Header />

    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: Cinzel, -apple-system, BlinkMacSystemFont, Avenir Next,
          Avenir, Helvetica, sans-serif;
        color: black;
        background: tan;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
        color: black;
      }
    `}</style>
  </div>
);

export default Nav;
