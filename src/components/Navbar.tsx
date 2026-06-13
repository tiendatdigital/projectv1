"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { 
    href: "#dich-vu", 
    label: "Dịch vụ",
    subItems: [
      { href: "https://zalo.me/0865922222", label: "Cho thuê TKQC Facebook" },
      { href: "https://zalo.me/0865922222", label: "Cho thuê TKQC Google" },
      { href: "https://zalo.me/0865922222", label: "Cho thuê TKQC TikTok" },
      { href: "https://zalo.me/0865922222", label: "Mở khóa tài khoản" },
      { href: "https://zalo.me/0865922222", label: "Quản lý & Tối ưu quảng cáo" },
      { href: "https://zalo.me/0865922222", label: "Content & Social Media" }
    ]
  },
  { 
    href: "#dich-vu", 
    label: "Xác minh tài khoản",
    subItems: [
      { href: "https://zalo.me/0865922222", label: "Tích xanh Profile/Fanpage" },
      { href: "https://zalo.me/0865922222", label: "Tích xanh Instagram" },
      { href: "https://zalo.me/0865922222", label: "Tích xanh Tiktok" }
    ]
  },
  { href: "#tai-sao", label: "Tại sao chọn chúng tôi" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#khach-hang", label: "Khách hàng" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 100,
      padding: scrolled ? "0.7rem 0" : "1.1rem 0",
      background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
      boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
    }}>
      <div className="container" style={{ maxWidth: "1560px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="Đạt Digital" style={{ height: 38, width: "auto", objectFit: "contain" }} />
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {NAV_ITEMS.map(item => (
            item.subItems ? (
              <div key={item.label} className="nav-dropdown" style={{ position: "relative", cursor: "pointer", padding: "10px 0" }}>
                <span className="nav-link" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {item.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </span>
                <div className="dropdown-menu" style={{
                  position: "absolute", top: "100%", left: "-10px", marginTop: "0",
                  background: "#fff", borderRadius: "12px", padding: "0.5rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)", minWidth: "240px",
                  opacity: 0, visibility: "hidden", transform: "translateY(10px)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)", border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex", flexDirection: "column", gap: "4px"
                }}>
                  {item.subItems.map(sub => (
                    <Link key={sub.label} href={sub.href} target={sub.href.startsWith("http") ? "_blank" : undefined} className="dropdown-link" style={{
                      display: "block", padding: "0.6rem 1rem", fontSize: "0.92rem", color: "#475569",
                      borderRadius: "8px", textDecoration: "none", transition: "all 0.2s"
                    }}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>
            )
          ))}
          <Link href="#lien-he" className="btn btn-primary" style={{ padding: "0.6rem 1.4rem", fontSize: "0.875rem" }}>
            Liên hệ ngay
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{
          display: "none", background: "none", border: "none",
          cursor: "pointer", color: "#0f172a", padding: "0.25rem",
        }} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)",
          padding: "1.25rem 2rem", borderTop: "1px solid rgba(0,0,0,0.07)",
        }}>
          {[...NAV_ITEMS, { href: "#lien-he", label: "Liên hệ ngay" }].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "0.8rem 0",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
              color: "#374151", fontSize: "0.95rem", fontWeight: 500,
            }}>
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-dropdown:hover .dropdown-menu {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
        }
        .dropdown-link:hover {
          background: #f1f5f9;
          color: #0ea5e9 !important;
          font-weight: 500;
        }
      `}</style>
    </nav>
  );
}
