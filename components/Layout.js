import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/contact">İletişim</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">Alt bilgi alanı</footer>
    </>
  );
}
