// components/layout/Header.jsx
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src="/images/logo.svg" alt="Social Vision Logo" width={98} height={102} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ai-insights">AI Tech & Insights</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>
            </ul>
            <Link href="/contact" className="">
              Book Strategy Call
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
