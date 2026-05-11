"use client";
import Link from "next/link";
import { useState } from "react";
export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div
        className={
          darkMode
            ? "bg-dark text-light min-vh-100 d-flex flex-column"
            : "bg-light text-dark min-vh-100 d-flex flex-column"
        }
      >
        <header className="site-header">
          <nav className="top-navbar d-flex justify-content-between align-items-center px-4 py-3">
            <div className="nav-menud-flex gap-4">
              <Link className="nav-button" href="/">
                Ana Sayfa
              </Link>
              <Link className="nav-button" href="/about">
                Hakkımızda
              </Link>
              <Link className="nav-button" href="/contact">
                İletişim
              </Link>
              <Link className="nav-button" href="/blog">
                Blog
              </Link>
            </div>
            <button
              className={darkMode ? "btn btn-light" : "btn btn-dark"}
              onClick={() => setDarkMode(!darkMode)}
            >
              {" "}
              {darkMode ? "Beyaz" : "Siyah"}
            </button>
          </nav>
        </header>

        <main className="site-main">{children}</main>

        <footer className="site-footer">
          <div className="footer-section">
            <h4>Hakkımızda</h4>
            <p>
              Bu, Next.js kullanılarak oluşturulmuş örnek bir web sitesidir.
              Amacımız Next.js'in temel özelliklerini göstermek ve modern web
              geliştirme tekniklerini kullanarak hızlı ve kullanıcı dostu bir
              deneyim sunmaktır.
            </p>
          </div>
          <div className="footer-section">
            <h4>İletişim</h4>
            <p>Email: example@example.com</p>
          </div>
        </footer>
      </div>
    </>
  );
}
