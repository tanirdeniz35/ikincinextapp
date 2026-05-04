"use client";
import Link from "next/link";
import {useState} from "react";
export default function Layout({ children }) {


const [darkMode,setDarkMode]=useState (false);

  return (
    <>
    <div className={darkMode?"bg-dark text-light min-vh-100 d-flex flex-column":"bg-light text-dark min-vh-100 d-flex flex-column"}>
      <header className="site-header">
        <nav className="d-flex justify-content-between align-items-center px-4 py-3">
        <div className="d-flex gap-4">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/contact">İletişim</Link>
          <Link href="/blog">Blog</Link>
        </div>
           <button className={darkMode ? "btn btn-light" : "btn btn-dark"} onClick={()=>setDarkMode(!darkMode)}> {darkMode?"Beyaz":"Siyah"}</button>
        </nav>
       
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">Alt bilgi alanı</footer>
      </div>
    </>
  );
}
