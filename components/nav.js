import Link from "next/link";

import WhatsappSVG from "../assets/Whatsapp.svg";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav className="nav-container">
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <h1 className="text-blue-500 font-bold text-2xl no-underline">Poorna Clinic</h1>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
            <Link href="https://wa.me/917200434397?text=hello">
            <a className="inline-flex">
              <WhatsappSVG height="24px" />
              <h1 className="ml-4">9629103452</h1>
            </a>
          </Link>
        </ul>
      </ul>
    </nav>
  );
}
