"use client";

import Link from "next/link";

const FOOTER_SERVICES = [
  { label: "Cho thuê TKQC Facebook", href: "https://zalo.me/0865922222" },
  { label: "Cho thuê TKQC Google",   href: "https://zalo.me/0865922222" },
  { label: "Cho thuê TKQC TikTok",   href: "https://zalo.me/0865922222" },
  { label: "Mở khóa tài khoản",      href: "https://zalo.me/0865922222" },
  { label: "Xác minh tài khoản",     href: "https://zalo.me/0865922222" },
  { label: "Quản lý quảng cáo",      href: "https://zalo.me/0865922222" },
  { label: "Content & Social Media", href: "https://zalo.me/0865922222" },
  { label: "Tư vấn chiến lược",       href: "https://zalo.me/0865922222" },
];

const FOOTER_LINKS = [
  { label: "Tại sao chọn chúng tôi", href: "#tai-sao" },
  { label: "Quy trình làm việc",      href: "#quy-trinh" },
  { label: "Khách hàng nói gì",        href: "#khach-hang" },
  { label: "Liên hệ tư vấn",           href: "#lien-he" },
];

const SOCIALS = [
  { label: "Facebook",  href: "#", bg: "#1877f2", emoji: "📘" },
  { label: "Zalo",      href: "#", bg: "#0068ff", emoji: "💬" },
  { label: "TikTok",    href: "#", bg: "#010101", emoji: "🎵" },
  { label: "YouTube",   href: "#", bg: "#ff0000", emoji: "▶️" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#fff", paddingTop: "4.5rem" }}>
      <div className="container">
        {/* Top */}
        <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap", paddingBottom: "3.5rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Brand column */}
          <div style={{ flex: "1 1 280px", maxWidth: 320 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
              <div style={{ background: "#fff", padding: "0.25rem 0.5rem", borderRadius: "8px", display: "inline-flex" }}>
                <img src="/logo.png" alt="Đạt Digital" style={{ height: 42, width: "auto", objectFit: "contain" }} />
              </div>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Agency Digital Marketing uy tín – Chuyên cung cấp dịch vụ cho thuê tài khoản quảng cáo và giải pháp marketing toàn diện cho doanh nghiệp Việt.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} title={s.label} style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.05rem", transition: "all 0.25s ease",
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = s.bg;
                    el.style.borderColor = s.bg;
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255,255,255,0.07)";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s.emoji}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div style={{ flex: "0 0 auto" }}>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Dịch vụ
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {FOOTER_SERVICES.map(item => (
                <Link key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#0ea5e9"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div style={{ flex: "0 0 auto" }}>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Khám phá
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {FOOTER_LINKS.map(item => (
                <Link key={item.label} href={item.href} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#0ea5e9"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ flex: "1 1 200px", maxWidth: 250 }}>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Liên hệ
            </h4>
            {[
              { icon: "📞", label: "Hotline", value: "086 59 22222" },
              { icon: "✉️", label: "Email", value: "hi@dat.digital" },
              { icon: "⏰", label: "Giờ hỗ trợ", value: "8:00 – 22:00 hàng ngày" },
            ].map(c => (
              <div key={c.label} style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.1rem" }}>{c.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", fontWeight: 500 }}>{c.value}</div>
                </div>
              </div>
            ))}

            <a href="https://zalo.me/0865922222" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "0.75rem", fontSize: "0.875rem" }}>
              Tư vấn miễn phí
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", padding: "1.5rem 0" }}>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Đạt Digital Marketing. Bảo lưu mọi quyền.
          </span>
          <div style={{ display: "flex", gap: "1.75rem" }}>
            {["Chính sách bảo mật", "Điều khoản dịch vụ"].map(item => (
              <a key={item} href="#" style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.2)"}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
