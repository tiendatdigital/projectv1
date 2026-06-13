"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────
   TYPING HEADLINE
───────────────────────────────────────── */
const TYPING_PHRASES = [
  "Quảng cáo hiệu quả",
  "Facebook & Google Ads",
  "TikTok Ads chuyên nghiệp",
  "Performance Marketing",
  "Tăng ROAS vượt bậc",
  "Social Media Marketing",
];

function TypingText({ phrases }: { phrases: string[] }) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];

    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2200);
      return () => clearTimeout(t);
    }

    if (!isDeleting) {
      if (displayText.length < current.length) {
        const t = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 75);
        return () => clearTimeout(t);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 38);
        return () => clearTimeout(t);
      } else {
        setIsDeleting(false);
        setPhraseIdx(i => (i + 1) % phrases.length);
      }
    }
  }, [displayText, isDeleting, isPaused, phraseIdx, phrases]);

  return (
    <span style={{ display: "block", whiteSpace: "nowrap", lineHeight: 1.15 }}>
      <span style={{
        background: "linear-gradient(90deg,#0ea5e9 0%,#8b5cf6 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "-0.065em",
        paddingRight: "2px"
      }}>
        {displayText}
      </span>
      {/* Cursor — separate from gradient span so it stays visible */}
      <span style={{
        display: "inline-block",
        width: "0.08em",
        height: "0.9em",
        background: "linear-gradient(180deg,#0ea5e9,#8b5cf6)",
        marginLeft: "0.08em",
        verticalAlign: "middle",
        borderRadius: 2,
        animation: "blink 0.8s step-end infinite",
      }} />
    </span>
  );
}

/* ─────────────────────────────────────────
   HERO BACKGROUND
───────────────────────────────────────── */
function HeroBackground() {
  return (
    <>
      <div style={{ position:"absolute", width:700, height:700, borderRadius:"50%", filter:"blur(120px)", background:"rgba(14,165,233,0.13)", top:-150, left:-150, animation:"blobFloat1 14s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", filter:"blur(100px)", background:"rgba(139,92,246,0.11)", top:80, right:-80, animation:"blobFloat2 18s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", filter:"blur(90px)", background:"rgba(249,115,22,0.08)", bottom:-100, left:"35%", animation:"blobFloat1 20s ease-in-out infinite reverse", pointerEvents:"none" }} />
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(14,165,233,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.04) 1px,transparent 1px)",
        backgroundSize:"60px 60px",
        WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)",
        maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)",
      }} />
    </>
  );
}

/* ─────────────────────────────────────────
   PLATFORM LOGOS (hero floating icons)
───────────────────────────────────────── */
const FacebookIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877f2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const GoogleIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="#ea4335"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>;
const MobileVideoIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M10 8l6 4-6 4V8z"></path></svg>;
const InstagramIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#ig-grad)"><defs><linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f09433" /><stop offset="25%" stopColor="#e6683c" /><stop offset="50%" stopColor="#dc2743" /><stop offset="75%" stopColor="#cc2366" /><stop offset="100%" stopColor="#bc1888" /></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>;

const PLATFORMS = [
  { name:"Facebook Ads", color:"#1877f2", bg:"#e7f0ff", icon:<FacebookIcon/>, ring:1, angle:0 },
  { name:"Google Ads",   color:"#ea4335", bg:"#fde8e8", icon:<GoogleIcon/>, ring:1, angle:120 },
  { name:"TikTok Ads",   color:"#000000", bg:"#f0f0f0", icon:<MobileVideoIcon/>, ring:1, angle:240 },
  { name:"Zalo Ads",     color:"#0068ff", bg:"#e0edff", emoji:"💬", ring:2, angle:50 },
  { name:"YouTube Ads",  color:"#ff0000", bg:"#ffe4e4", emoji:"▶️", ring:2, angle:140 },
  { name:"Instagram",    color:"#c13584", bg:"#fce4f3", icon:<InstagramIcon/>, ring:2, angle:230 },
  { name:"Analytics",    color:"#f9ab00", bg:"#fff8e1", emoji:"📊", ring:2, angle:320 },
];

function PlatformOrbit() {
  return (
    <div style={{ position:"relative", width:460, height:460, flexShrink:0 }}>
      <div style={{ position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", width:460, height:460, borderRadius:"50%", background:"radial-gradient(circle,rgba(14,165,233,0.1) 0%,rgba(139,92,246,0.06) 50%,transparent 70%)", pointerEvents:"none" }} />

      {/* Ring 1 */}
      <div style={{ position:"absolute", left:"50%", top:"50%", width:240, height:240, transform:"translate(-50%,-50%)", border:"1.5px solid rgba(14,165,233,0.2)", borderRadius:"50%", animation:"orbitSpin 20s linear infinite" }}>
        {PLATFORMS.filter(p=>p.ring===1).map(p=>(
          <div key={p.name} style={{ position:"absolute", left:"50%", top:"50%", width:52, height:52, transform:`rotate(${p.angle}deg) translateX(120px) rotate(-${p.angle}deg)`, marginLeft:-26, marginTop:-26, animation:"orbitSpinReverse 20s linear infinite" }}>
            <div title={p.name} style={{ width:"100%", height:"100%", borderRadius:"50%", background:p.bg, border:`2px solid ${p.color}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", boxShadow:`0 4px 16px ${p.color}22, 0 2px 6px rgba(0,0,0,0.06)` }}>
              {p.icon || p.emoji}
            </div>
          </div>
        ))}
      </div>

      {/* Ring 2 */}
      <div style={{ position:"absolute", left:"50%", top:"50%", width:400, height:400, transform:"translate(-50%,-50%)", border:"1.5px dashed rgba(139,92,246,0.18)", borderRadius:"50%", animation:"orbitSpinReverse 30s linear infinite" }}>
        {PLATFORMS.filter(p=>p.ring===2).map(p=>(
          <div key={p.name} style={{ position:"absolute", left:"50%", top:"50%", width:46, height:46, transform:`rotate(${p.angle}deg) translateX(200px) rotate(-${p.angle}deg)`, marginLeft:-23, marginTop:-23, animation:"orbitSpin 30s linear infinite" }}>
            <div title={p.name} style={{ width:"100%", height:"100%", borderRadius:"50%", background:p.bg, border:`2px solid ${p.color}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.25rem", boxShadow:`0 4px 12px ${p.color}18, 0 2px 4px rgba(0,0,0,0.05)` }}>
              {p.icon || p.emoji}
            </div>
          </div>
        ))}
      </div>

      {/* Center */}
      <div style={{ position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", width:95, height:95, borderRadius:"50%", background:"linear-gradient(135deg,#0ea5e9,#8b5cf6)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 40px rgba(14,165,233,0.35)", animation:"pulseGlow 3s ease-in-out infinite", zIndex:10 }}>
        <span style={{ fontSize:"2rem" }}>🚀</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   COUNTER HOOK
───────────────────────────────────────── */
function useCounter(target: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return value;
}

/* ─────────────────────────────────────────
   STAT CARD
───────────────────────────────────────── */
const STATS = [
  { value:500,  suffix:"+", label:"Khách hàng tin tưởng",    icon:"🤝", color:"#0ea5e9", bg:"linear-gradient(135deg,#e0f2fe,#f0f9ff)" },
  { value:5,    suffix:"+", label:"Năm kinh nghiệm",          icon:"📅", color:"#8b5cf6", bg:"linear-gradient(135deg,#f3e8ff,#faf5ff)" },
  { value:2000, suffix:"+", label:"Chiến dịch thành công",    icon:"🎯", color:"#10b981", bg:"linear-gradient(135deg,#d1fae5,#f0fdf4)" },
  { value:98,   suffix:"%", label:"Khách hàng hài lòng",      icon:"⭐", color:"#f59e0b", bg:"linear-gradient(135deg,#fef3c7,#fffbeb)" },
];

function StatCard({ stat, delay, idx }: { stat: typeof STATS[0]; delay: number; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const count = useCounter(stat.value, 2200, vis);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="stat-card" style={{
      flex:"1 1 180px", background:stat.bg, border:`1px solid ${stat.color}25`,
      borderRadius:24, padding:"clamp(1.5rem, 5vw, 2.25rem) 1.5rem", textAlign:"center",
      animation:vis?`fadeInUp 0.7s ${delay}ms cubic-bezier(0.16,1,0.3,1) forwards`:"none",
      opacity:vis?undefined:0, boxShadow:"0 2px 16px rgba(0,0,0,0.04)",
      transition:"transform 0.3s,box-shadow 0.3s", cursor:"default",
    }}
      onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform="translateY(-5px)"; el.style.boxShadow="0 14px 32px rgba(0,0,0,0.09)"; }}
      onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform="translateY(0)"; el.style.boxShadow="0 2px 16px rgba(0,0,0,0.04)"; }}
    >
      <div style={{ fontSize:"2rem", marginBottom:"0.5rem" }}>{stat.icon}</div>
      <div style={{ fontSize:"3rem", fontWeight:900, letterSpacing:"-0.05em", color:stat.color, lineHeight:1, marginBottom:"0.5rem" }}>{count}{stat.suffix}</div>
      <div style={{ color:"#64748b", fontSize:"0.875rem", fontWeight:500, lineHeight:1.4 }}>{stat.label}</div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SERVICES
───────────────────────────────────────── */
const SERVICES = [
  {
    id:1, icon:"📘", title:"Cho thuê TKQC Facebook",
    color:"#1877f2", bg:"linear-gradient(135deg,#dbeafe,#eff6ff)",
    tags:["BM cao cấp","Hạn mức cao","Anti-block"],
    desc:"Tài khoản Business Manager chính hãng, hạn mức từ 50–1000 USD/ngày. Ổn định, không lo bị vô hiệu hóa – Cam kết hoàn tiền nếu lỗi hệ thống.",
  },
  {
    id:2, icon:"🔍", title:"Cho thuê TKQC Google",
    color:"#ea4335", bg:"linear-gradient(135deg,#fee2e2,#fff5f5)",
    tags:["Google Agency","Billing ổn định","Không giới hạn camp"],
    desc:"Tài khoản Google Ads Agency chạy mượt mà, không cần verify thẻ, hỗ trợ tất cả loại hình quảng cáo Search, Display, Video, Shopping.",
  },
  {
    id:3, icon:"🎵", title:"Cho thuê TKQC TikTok",
    color:"#000000", bg:"linear-gradient(135deg,#f1f5f9,#e2e8f0)",
    tags:["TikTok Agency","Targeting mạnh","Video ads"],
    desc:"Tài khoản TikTok Ads Agency chính hãng, tiếp cận hàng triệu người dùng trẻ. Phù hợp cho eCommerce, App Install, Brand Awareness.",
  },
  {
    id:4, icon:"📊", title:"Quản lý & Tối ưu Quảng cáo",
    color:"#8b5cf6", bg:"linear-gradient(135deg,#f3e8ff,#faf5ff)",
    tags:["Setup camp","Tối ưu ROAS","Báo cáo hàng tuần"],
    desc:"Đội ngũ chuyên gia setup, vận hành và tối ưu chiến dịch quảng cáo trên đa nền tảng. Giảm CPA, tăng ROAS – Báo cáo real-time minh bạch.",
  },
  {
    id:5, icon:"📱", title:"Content & Social Media",
    color:"#ec4899", bg:"linear-gradient(135deg,#fce7f3,#fdf4ff)",
    tags:["Viết content","Thiết kế banner","Quản lý fanpage"],
    desc:"Sản xuất nội dung sáng tạo – Thiết kế hình ảnh/video chuyên nghiệp. Lên kế hoạch content, đăng bài và tương tác fanpage thay bạn.",
  },
  {
    id:6, icon:"🎯", title:"Tư vấn Chiến lược Digital",
    color:"#10b981", bg:"linear-gradient(135deg,#d1fae5,#f0fdf4)",
    tags:["Marketing funnel","Audit tài khoản","Roadmap 90 ngày"],
    desc:"Phân tích toàn diện tình trạng marketing hiện tại, đề xuất chiến lược tăng trưởng bài bản. Audit tài khoản miễn phí cho khách hàng mới.",
  },
  {
    id:7, icon:"🔓", title:"Mở khóa tài khoản",
    color:"#f59e0b", bg:"linear-gradient(135deg,#fef3c7,#fffbeb)",
    tags:["Mở khóa Facebook","Mở khóa Instagram","Mở khóa Tiktok"],
    desc:"Dịch vụ hỗ trợ mở khóa tài khoản Facebook, Instagram, TikTok bị khóa, vô hiệu hóa, checkpoint, hạn chế quảng cáo một cách an toàn và nhanh chóng.",
  },
  {
    id:8, icon:"✅", title:"Xác minh tài khoản",
    color:"#3b82f6", bg:"linear-gradient(135deg,#eff6ff,#dbeafe)",
    tags:["Tích xanh Facebook","Tích xanh TikTok","Tích xanh Instagram"],
    desc:"Dịch vụ tư vấn và hỗ trợ lên Tích xanh chính chủ cho Fanpage, Profile cá nhân, TikTok, Instagram uy tín, nhanh chóng với tỉ lệ duyệt cao.",
  },
];

function ServiceCard({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [hov, setHov] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{
      background: hov ? svc.bg : "#fff",
      border:`1.5px solid ${hov ? svc.color+"40" : "rgba(0,0,0,0.07)"}`,
      borderRadius:20, padding:"2rem", cursor:"default",
      animation:vis?`fadeInUp 0.7s ${index*80}ms cubic-bezier(0.16,1,0.3,1) forwards`:"none",
      opacity:vis?undefined:0,
      transform:hov?"translateY(-6px)":"translateY(0)",
      boxShadow:hov?`0 20px 50px ${svc.color}18,0 4px 16px rgba(0,0,0,0.07)`:"0 2px 12px rgba(0,0,0,0.04)",
      transition:"all 0.35s cubic-bezier(0.16,1,0.3,1)",
    }}>
      <div style={{ width:52, height:52, borderRadius:14, background:hov?`${svc.color}15`:"#f8fafc", border:`1.5px solid ${svc.color}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.6rem", marginBottom:"1.25rem", transition:"background 0.3s" }}>
        {svc.icon}
      </div>
      <h3 style={{ fontSize:"1.05rem", fontWeight:700, marginBottom:"0.6rem", color:"#0f172a" }}>{svc.title}</h3>
      <p style={{ color:"#64748b", fontSize:"0.875rem", lineHeight:1.75, marginBottom:"1rem" }}>{svc.desc}</p>
      <div style={{ display:"flex", gap:"0.4rem", flexWrap:"wrap" }}>
        {svc.tags.map(t=>(
          <span key={t} style={{ padding:"0.25rem 0.7rem", borderRadius:999, fontSize:"0.72rem", fontWeight:600, background:`${svc.color}12`, color:svc.color, border:`1px solid ${svc.color}25` }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   WHY CHOOSE US
───────────────────────────────────────── */
const REASONS = [
  { icon:"🔒", title:"Tài khoản ổn định & an toàn", desc:"TKQC được kiểm định kỹ lưỡng trước khi bàn giao. Cam kết không bị khóa, vô hiệu hóa trong thời gian thuê. Hoàn tiền 100% nếu lỗi từ phía chúng tôi.", color:"#0ea5e9" },
  { icon:"⚡", title:"Hỗ trợ 24/7 – Phản hồi nhanh", desc:"Đội ngũ support luôn online qua Zalo, Messenger, Telegram. Giải quyết sự cố trong vòng 1–2 giờ, không để chiến dịch của bạn bị gián đoạn.", color:"#f59e0b" },
  { icon:"💰", title:"Chi phí cạnh tranh – Minh bạch", desc:"Báo giá rõ ràng, không phát sinh chi phí ẩn. Tính phí theo ngày/tuần/tháng linh hoạt. Chiết khấu hấp dẫn cho khách hàng lâu dài.", color:"#10b981" },
  { icon:"📈", title:"Báo cáo real-time & minh bạch", desc:"Dashboard theo dõi chiến dịch 24/7. Báo cáo chi tiết hàng tuần: spend, CPM, CPC, ROAS, chuyển đổi. Dữ liệu chính xác – quyết định nhanh.", color:"#8b5cf6" },
  { icon:"🎓", title:"Đội ngũ chuyên gia giàu kinh nghiệm", desc:"5+ năm thực chiến trên các nền tảng lớn. Hiểu sâu về thuật toán, chính sách quảng cáo. Tối ưu chiến dịch theo đúng ngành hàng của bạn.", color:"#ec4899" },
  { icon:"🌐", title:"Đa nền tảng – Một đầu mối", desc:"Facebook, Google, TikTok, Zalo, YouTube – tất cả trong một. Một đội ngũ quản lý toàn bộ, đồng bộ chiến lược đa kênh hiệu quả.", color:"#6366f1" },
];

function ReasonCard({ item, index }: { item: typeof REASONS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      flex:"1 1 280px", padding:"1.75rem", borderRadius:20,
      background:"#fff", border:"1.5px solid rgba(0,0,0,0.06)",
      boxShadow:"0 2px 12px rgba(0,0,0,0.04)",
      animation:vis?`fadeInUp 0.7s ${index*80}ms cubic-bezier(0.16,1,0.3,1) forwards`:"none",
      opacity:vis?undefined:0,
      transition:"transform 0.3s,box-shadow 0.3s,border-color 0.3s",
    }}
      onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform="translateY(-4px)"; el.style.boxShadow=`0 16px 36px ${item.color}14`; el.style.borderColor=`${item.color}30`; }}
      onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform="translateY(0)"; el.style.boxShadow="0 2px 12px rgba(0,0,0,0.04)"; el.style.borderColor="rgba(0,0,0,0.06)"; }}
    >
      <div style={{ width:48, height:48, borderRadius:12, background:`${item.color}12`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.5rem", marginBottom:"1rem" }}>{item.icon}</div>
      <h3 style={{ fontSize:"1rem", fontWeight:700, color:"#0f172a", marginBottom:"0.6rem" }}>{item.title}</h3>
      <p style={{ color:"#64748b", fontSize:"0.875rem", lineHeight:1.75 }}>{item.desc}</p>
    </div>
  );
}

/* ─────────────────────────────────────────
   PROCESS
───────────────────────────────────────── */
const PROCESS_STEPS = [
  { step:"01", icon:"💬", title:"Tư vấn miễn phí", desc:"Phân tích mục tiêu kinh doanh, ngân sách và đề xuất giải pháp phù hợp nhất. Hoàn toàn miễn phí – không ràng buộc.", color:"#0ea5e9", bg:"linear-gradient(135deg,#e0f2fe,#f0f9ff)" },
  { step:"02", icon:"⚙️", title:"Setup & bàn giao tài khoản", desc:"Cấu hình TKQC, cài đặt pixel/conversion tracking. Bàn giao đầy đủ thông tin trong vòng 2–24 giờ kể từ khi ký hợp đồng.", color:"#8b5cf6", bg:"linear-gradient(135deg,#f3e8ff,#faf5ff)" },
  { step:"03", icon:"🎯", title:"Chạy & tối ưu chiến dịch", desc:"Setup chiến dịch, target đúng tệp khách hàng, A/B test creative. Tối ưu liên tục để giảm chi phí và tăng tỷ lệ chuyển đổi.", color:"#10b981", bg:"linear-gradient(135deg,#d1fae5,#f0fdf4)" },
  { step:"04", icon:"📊", title:"Báo cáo & mở rộng quy mô", desc:"Báo cáo kết quả chi tiết hàng tuần. Tư vấn scale budget khi ROI tốt – đồng hành dài hạn cùng sự phát triển của bạn.", color:"#f59e0b", bg:"linear-gradient(135deg,#fef3c7,#fffbeb)" },
];

/* ─────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────── */
const TESTIMONIALS = [
  { name:"Nguyễn Minh Hoàng", role:"CEO – Công ty TNHH TM Minh Hoàng", avatar:"👨‍💼", rating:5, text:"Mình đã thuê TKQC Facebook của Đạt Digital hơn 6 tháng. Tài khoản luôn ổn định, hạn mức cao, đội support phản hồi cực nhanh. Doanh số từ Facebook Ads tăng 3x so với trước. Rất uy tín!" },
  { name:"Trần Thị Thu Hà",   role:"Founder – Thương hiệu làm đẹp HANA", avatar:"👩‍💼", rating:5, text:"Ban đầu mình khá lo ngại về việc thuê TKQC, nhưng sau khi trải nghiệm dịch vụ của Đạt Digital thì yên tâm hoàn toàn. Tài khoản Google Ads chạy mượt, không phải lo về billing hay verify." },
  { name:"Lê Văn Đức",        role:"Marketing Manager – FashionHub VN",   avatar:"🧑‍💼", rating:5, text:"Đội ngũ Đạt Digital không chỉ cung cấp TKQC mà còn tối ưu toàn bộ chiến dịch TikTok Ads cho shop mình. ROAS cải thiện từ 2.1x lên 4.8x chỉ trong 2 tháng. Cực kỳ chuyên nghiệp!" },
  { name:"Phạm Tấn Tài",      role:"Chủ shop Online",                     avatar:"🧔", rating:5, text:"Trang fanpage bán hàng của tôi tự nhiên bị vô hiệu hóa, may nhờ Đạt Digital hỗ trợ mở khóa thành công chỉ trong vòng 24h. Rất nhanh chóng và nhiệt tình, cứu tinh của shop luôn!" },
  { name:"Võ Lê Bảo Trân",    role:"KOL / Content Creator",               avatar:"👩‍🎤", rating:5, text:"Tài khoản TikTok của mình bị khóa oan do lỗi vi phạm cộng đồng, tưởng chừng mất trắng. Nhờ dịch vụ bên này kháng nghị và lấy lại được cực nhanh. 10 điểm uy tín!" },
  { name:"Hoàng Ngọc Tuấn",   role:"Giám đốc Marketing – Tuấn Real Estate", avatar:"😎", rating:5, text:"BM và tài khoản quảng cáo Facebook bị checkpoint hàng loạt khiến mọi chiến dịch đình trệ. Nhờ team Đạt Digital vào cuộc mở khóa và kháng BM cực kỳ mượt mà, công việc lại trôi chảy." },
  { name:"Ngô Phương Linh",   role:"Doanh nhân & KOL",                    avatar:"👩‍💼", rating:5, text:"Cảm ơn Đạt Digital đã hỗ trợ xin Tích Xanh Facebook thành công. Quy trình rõ ràng, minh bạch và tỉ lệ duyệt rất nhanh. Giờ thì mình đã có thể yên tâm bảo vệ thương hiệu cá nhân." },
  { name:"Trịnh Quang Minh",  role:"Giám đốc - Minh TechStore",           avatar:"👨‍💻", rating:5, text:"Fanpage của công ty bị rất nhiều page giả mạo làm mất uy tín. Nhờ Đạt Digital lo trọn gói dịch vụ lên Tích Xanh, chỉ sau vài ngày là xong. Dịch vụ tuyệt vời, 5 sao!" },
  { name:"Lý Kim Ngân",       role:"Chủ thương hiệu thời trang",          avatar:"👱‍♀️", rating:5, text:"Lên tích xanh Instagram cực kỳ mượt mà. Bên Đạt Digital hướng dẫn làm giấy tờ rất chuyên nghiệp. Giờ IG của mình cực kỳ uy tín trong mắt khách hàng." },
];

function TestimonialCard({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      flex:"1 1 280px", background:"#fff",
      border:"1.5px solid rgba(0,0,0,0.07)",
      borderRadius:20, padding:"2rem",
      boxShadow:"0 2px 12px rgba(0,0,0,0.04)",
      animation:vis?`fadeInUp 0.7s ${index*100}ms cubic-bezier(0.16,1,0.3,1) forwards`:"none",
      opacity:vis?undefined:0,
      transition:"transform 0.3s,box-shadow 0.3s",
    }}
      onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform="translateY(-4px)"; el.style.boxShadow="0 16px 40px rgba(0,0,0,0.08)"; }}
      onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform="translateY(0)"; el.style.boxShadow="0 2px 12px rgba(0,0,0,0.04)"; }}
    >
      {/* Stars */}
      <div style={{ display:"flex", gap:2, marginBottom:"1rem" }}>
        {Array.from({length:t.rating}).map((_,i)=>(
          <span key={i} style={{ color:"#f59e0b", fontSize:"1rem" }}>★</span>
        ))}
      </div>
      <p style={{ color:"#374151", fontSize:"0.9rem", lineHeight:1.8, marginBottom:"1.5rem", fontStyle:"italic" }}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
        <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#e0f2fe,#f3e8ff)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem" }}>{t.avatar}</div>
        <div>
          <div style={{ fontWeight:700, fontSize:"0.9rem", color:"#0f172a" }}>{t.name}</div>
          <div style={{ color:"#94a3b8", fontSize:"0.78rem" }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function TestimonialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={scrollLeft} aria-label="Previous" style={{ position:"absolute", left:"-1rem", top:"50%", transform:"translateY(-50%)", zIndex:10, width:44, height:44, borderRadius:"50%", background:"#fff", border:"1px solid rgba(0,0,0,0.05)", boxShadow:"0 4px 16px rgba(0,0,0,0.1)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", transition:"all 0.2s" }}
        onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-50%) scale(1.05)" }}
        onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(-50%) scale(1)" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      
      <div ref={scrollRef} className="testimonial-slider" style={{ display:"flex", gap:"2rem", overflowX:"auto", paddingBottom:"2rem", scrollSnapType:"x mandatory", scrollBehavior:"smooth", margin:"0 -1rem", padding:"0 1rem 2rem" }}>
        {TESTIMONIALS.map((t,i) => (
          <div key={t.name} style={{ scrollSnapAlign:"start", flexShrink:0, width:"380px", maxWidth:"85vw", display:"flex" }}>
            <TestimonialCard t={t} index={i} />
          </div>
        ))}
      </div>

      <button onClick={scrollRight} aria-label="Next" style={{ position:"absolute", right:"-1rem", top:"50%", transform:"translateY(-50%)", zIndex:10, width:44, height:44, borderRadius:"50%", background:"#fff", border:"1px solid rgba(0,0,0,0.05)", boxShadow:"0 4px 16px rgba(0,0,0,0.1)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", transition:"all 0.2s" }}
        onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-50%) scale(1.05)" }}
        onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(-50%) scale(1)" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────
   MARQUEE (platform names)
───────────────────────────────────────── */
const MARQUEE_ITEMS = ["Facebook Ads","Google Ads","TikTok Ads","Zalo Ads","YouTube Ads","Instagram Ads","Performance Marketing","Social Media Marketing","Content Marketing","SEO/SEM"];


function Marquee() {
  return (
    <div style={{ overflow:"hidden", padding:"1.1rem 0", background:"#f8fafc", borderTop:"1px solid rgba(0,0,0,0.06)", borderBottom:"1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ display:"flex", width:"max-content", animation:"marqueeScroll 30s linear infinite" }}>
        {[...MARQUEE_ITEMS,...MARQUEE_ITEMS].map((item,i)=>(
          <span key={i} style={{ display:"flex", alignItems:"center", gap:"0.7rem", color:"#94a3b8", fontSize:"0.82rem", fontWeight:600, letterSpacing:"0.06em", textTransform:"uppercase", whiteSpace:"nowrap", marginRight:"3rem" }}>
            <span style={{ width:5, height:5, borderRadius:"50%", background:"#0ea5e9", display:"inline-block", flexShrink:0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function Home() {
  const [heroVis, setHeroVis] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => { setHeroVis(true); }, []);

  return (
    <div style={{ background:"#fff" }}>

      {/* ══════════ HERO ══════════ */}
      <section style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", paddingTop:"5rem", background:"#ffffff" }}>
        <HeroBackground />
        <div className="container" style={{ position:"relative", zIndex:1, width:"100%", paddingTop:"2rem", paddingBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:"4rem", flexWrap:"wrap" }}>

            {/* Text */}
            <div style={{ flex:"1 1 480px", maxWidth:580 }}>
              <div style={{ opacity:heroVis?1:0, animation:"fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards" }}>
                <div className="section-badge" style={{ marginBottom:"1.5rem" }}>
                  🚀 &nbsp;Agency Digital Marketing Uy Tín
                </div>
              </div>

              <h1 className="animate-fade-in delay-1" style={{ fontSize:"clamp(2.6rem,5.5vw,4.5rem)", fontWeight:900, lineHeight:1.15, letterSpacing:"-0.04em", marginBottom:"1.25rem", color:"#0f172a" }}>
                Tăng trưởng doanh số với <br className="desktop-br" />
                <TypingText phrases={TYPING_PHRASES} />
              </h1>

              <p className="animate-fade-in delay-2" style={{ fontSize:"1.1rem", color:"#64748b", lineHeight:1.8, marginBottom:"2rem", maxWidth:480 }}>
                Cho thuê tài khoản quảng cáo Facebook, Google, TikTok uy tín – hạn mức cao, ổn định. Quản lý chiến dịch, dịch vụ Social Media, Xác minh tích xanh & hỗ trợ Mở khóa tài khoản toàn diện cho doanh nghiệp Việt.
              </p>

              {/* CTA */}
              <div className="animate-fade-in delay-3" style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
                <Link href="#dich-vu" className="btn btn-primary">
                  Xem dịch vụ
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="https://zalo.me/0865922222" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Tư vấn miễn phí</a>
              </div>

              {/* Trust badges */}
              <div className="animate-fade-in delay-4" style={{ display:"flex", gap:"1.5rem", flexWrap:"wrap", alignItems:"center" }}>
                {[
                  { icon:"✅", text:"Hơn 500 khách hàng tin tưởng" },
                  { icon:"⚡", text:"Hỗ trợ kỹ thuật 24/7" },
                ].map(b=>(
                  <div key={b.text} style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                    <span style={{ fontSize:"1rem" }}>{b.icon}</span>
                    <span style={{ fontSize:"0.82rem", color:"#64748b", fontWeight:500 }}>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Orbital */}
            <div className="animate-fade-in delay-2" style={{ flex:"1 1 400px", display:"flex", justifyContent:"center" }}>
              <PlatformOrbit />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <Marquee />

      {/* ══════════ STATS ══════════ */}
      <section className="section" style={{ background:"#fff" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"4rem" }}>
            <div className="section-badge">Con số biết nói</div>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.03em", color:"#0f172a" }}>
              Kết quả{" "}
              <span style={{ background:"linear-gradient(90deg,#0ea5e9,#8b5cf6)", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                chứng minh mọi thứ
              </span>
            </h2>
          </div>
          <div className="stats-mobile-scroll">
            {STATS.map((s,i) => <StatCard key={s.label} stat={s} delay={i*80} idx={i} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════ SERVICES ══════════ */}
      <section className="section" id="dich-vu" style={{ background:"#f8fafc" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"4rem" }}>
            <div className="section-badge">Dịch vụ</div>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.03em", color:"#0f172a" }}>
              Giải pháp{" "}
              <span style={{ background:"linear-gradient(90deg,#0ea5e9,#8b5cf6)", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                toàn diện
              </span>{" "}cho doanh nghiệp của bạn
            </h2>
            <p style={{ color:"#64748b", maxWidth:540, margin:"1rem auto 0", fontSize:"1rem", lineHeight:1.7 }}>
              Từ cho thuê tài khoản quảng cáo đến quản lý chiến dịch và content – chúng tôi là đối tác marketing tin cậy của bạn.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.5rem" }}>
            {SERVICES.map((s,i) => <ServiceCard key={s.id} svc={s} index={i} />)}
          </div>
          <div style={{ textAlign:"center", marginTop:"3rem" }}>
            <Link href="#lien-he" className="btn btn-primary">
              Nhận báo giá ngay – Miễn phí tư vấn
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section className="section" id="tai-sao" style={{ background:"#fff" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"4rem" }}>
            <div className="section-badge">Tại sao chọn chúng tôi</div>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.03em", color:"#0f172a" }}>
              Đạt Digital Marketing –{" "}
              <span style={{ background:"linear-gradient(90deg,#0ea5e9,#8b5cf6)", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Đối tác đáng tin cậy
              </span>
            </h2>
            <p style={{ color:"#64748b", maxWidth:520, margin:"1rem auto 0", lineHeight:1.7 }}>
              Chúng tôi không chỉ cung cấp dịch vụ – chúng tôi cam kết đồng hành và tăng trưởng cùng doanh nghiệp của bạn.
            </p>
          </div>
          <div style={{ display:"flex", gap:"1.5rem", flexWrap:"wrap" }}>
            {REASONS.map((r,i) => <ReasonCard key={r.title} item={r} index={i} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════ PROCESS ══════════ */}
      <section className="section" id="quy-trinh" style={{ background:"#f8fafc" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"4rem" }}>
            <div className="section-badge">Quy trình làm việc</div>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.03em", color:"#0f172a" }}>
              Bắt đầu{" "}
              <span style={{ background:"linear-gradient(90deg,#0ea5e9,#8b5cf6)", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                dễ dàng & nhanh chóng
              </span>
            </h2>
            <p style={{ color:"#64748b", maxWidth:480, margin:"1rem auto 0" }}>Chỉ 4 bước đơn giản để bắt đầu chạy quảng cáo hiệu quả cùng Đạt Digital Marketing.</p>
          </div>
          <div style={{ display:"flex", gap:"1.5rem", flexWrap:"wrap" }}>
            {PROCESS_STEPS.map((item, i) => {
              const ref = useRef<HTMLDivElement>(null);
              const [vis, setVis] = useState(false);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              useEffect(() => {
                const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
                if (ref.current) obs.observe(ref.current);
                return () => obs.disconnect();
              }, []);
              return (
                <div key={item.step} ref={ref} style={{
                  flex:"1 1 210px", background:item.bg, border:`1.5px solid ${item.color}25`,
                  borderRadius:20, padding:"2rem 1.75rem",
                  animation:vis?`fadeInUp 0.7s ${i*120}ms cubic-bezier(0.16,1,0.3,1) forwards`:"none",
                  opacity:vis?undefined:0,
                  boxShadow:"0 2px 12px rgba(0,0,0,0.04)",
                  transition:"transform 0.3s,box-shadow 0.3s",
                }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform="translateY(-4px)"; el.style.boxShadow="0 14px 32px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform="translateY(0)"; el.style.boxShadow="0 2px 12px rgba(0,0,0,0.04)"; }}
                >
                  <div style={{ fontWeight:800, fontSize:"0.72rem", letterSpacing:"0.1em", color:item.color, marginBottom:"0.7rem" }}>{item.step}</div>
                  <div style={{ fontSize:"2rem", marginBottom:"0.7rem" }}>{item.icon}</div>
                  <h3 style={{ fontSize:"1rem", fontWeight:700, color:"#0f172a", marginBottom:"0.6rem" }}>{item.title}</h3>
                  <p style={{ color:"#64748b", fontSize:"0.875rem", lineHeight:1.75 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="section" id="khach-hang" style={{ background:"#fff" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"4rem" }}>
            <div className="section-badge">Khách hàng nói gì</div>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.03em", color:"#0f172a" }}>
              Hơn 500 khách hàng đã{" "}
              <span style={{ background:"linear-gradient(90deg,#0ea5e9,#8b5cf6)", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                tin tưởng & thành công
              </span>
            </h2>
          </div>
          <style>{`
            .testimonial-slider::-webkit-scrollbar { display: none; }
            .testimonial-slider { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          <TestimonialSlider />
        </div>
      </section>

      <div className="divider" />

      {/* ══════════ CONTACT / CTA BANNER ══════════ */}
      <section style={{
        background:"linear-gradient(135deg,#0ea5e9 0%,#8b5cf6 100%)",
        padding:"6rem 0", position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", background:"rgba(255,255,255,0.06)", top:-150, right:-100, pointerEvents:"none" }} />
        <div style={{ position:"absolute", width:300, height:300, borderRadius:"50%", background:"rgba(255,255,255,0.04)", bottom:-100, left:-50, pointerEvents:"none" }} />
        <div className="container" style={{ textAlign:"center", position:"relative", zIndex:1 }}>
          <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, color:"#fff", marginBottom:"1rem", letterSpacing:"-0.03em" }}>
            Sẵn sàng tăng trưởng cùng Đạt Digital?
          </h2>
          <p style={{ color:"rgba(255,255,255,0.85)", fontSize:"1.1rem", marginBottom:"2.5rem", maxWidth:500, margin:"0 auto 2.5rem" }}>
            Tư vấn miễn phí – Không ràng buộc. Hãy để chúng tôi giúp bạn chạy quảng cáo hiệu quả hơn ngay hôm nay.
          </p>
          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="#lien-he" style={{ background:"#fff", color:"#0284c7", padding:"0.85rem 2.25rem", borderRadius:999, fontWeight:700, fontSize:"1rem", display:"inline-flex", alignItems:"center", gap:"0.5rem", boxShadow:"0 4px 20px rgba(0,0,0,0.15)", transition:"transform 0.2s,box-shadow 0.2s" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLAnchorElement; el.style.transform="translateY(-2px)"; el.style.boxShadow="0 8px 30px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLAnchorElement; el.style.transform="translateY(0)"; el.style.boxShadow="0 4px 20px rgba(0,0,0,0.15)"; }}
            >
              💬 Liên hệ ngay
            </Link>
            <a href="https://zalo.me/0865922222" target="_blank" rel="noopener noreferrer" style={{ background:"transparent", color:"#fff", padding:"0.85rem 2.25rem", borderRadius:999, fontWeight:700, fontSize:"1rem", border:"2px solid rgba(255,255,255,0.5)", display:"inline-flex", alignItems:"center", gap:"0.5rem", transition:"all 0.2s" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLAnchorElement; el.style.background="rgba(255,255,255,0.1)"; el.style.borderColor="rgba(255,255,255,0.8)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLAnchorElement; el.style.background="transparent"; el.style.borderColor="rgba(255,255,255,0.5)"; }}
            >
              📱 Chat Zalo
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT FORM ══════════ */}
      <section className="section" id="lien-he" style={{ background:"#f8fafc" }}>
        <div className="container">
          <div style={{ maxWidth:760, margin:"0 auto", background:"#fff", border:"1.5px solid rgba(14,165,233,0.15)", borderRadius:32, padding:"clamp(2rem,5vw,4rem)", boxShadow:"0 8px 40px rgba(14,165,233,0.08),0 2px 16px rgba(0,0,0,0.04)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", width:300, height:300, background:"radial-gradient(circle,rgba(14,165,233,0.07) 0%,transparent 70%)", top:-80, right:-80, pointerEvents:"none" }} />
            <div style={{ position:"relative", zIndex:1 }}>
              <div className="section-badge" style={{ marginBottom:"1.5rem" }}>Liên hệ</div>
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.6rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:"0.75rem", color:"#0f172a" }}>
                Nhận tư vấn{" "}
                <span style={{ background:"linear-gradient(90deg,#0ea5e9,#8b5cf6)", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  miễn phí ngay
                </span>
              </h2>
              <p style={{ color:"#64748b", marginBottom:"2.5rem", fontSize:"0.95rem" }}>
                Điền thông tin bên dưới – Chúng tôi sẽ liên hệ lại trong vòng <strong>30 phút</strong> trong giờ hành chính.
              </p>

              <form style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}
                onSubmit={async (e) => { 
                  e.preventDefault(); 
                  if (formStatus !== "idle") return;
                  setFormStatus("submitting");

                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);

                  // ⚠️ THAY LINK GOOGLE APPS SCRIPT CỦA BẠN VÀO ĐÂY
                  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxVUtZJ3sSC5xs-_Jnx_Xn6BEAO_94vWZk5xUuGM_NU9rfzRf10rsKLA3veZlIzjDcZ/exec";

                  try {
                    // Send POST request without expecting a CORS JSON response, just use mode: no-cors
                    await fetch(SCRIPT_URL, {
                      method: "POST",
                      body: formData,
                      mode: "no-cors",
                    });

                    // Wait a moment for UX
                    setFormStatus("success");
                    setShowToast(true);
                    form.reset();
                    
                    setTimeout(() => {
                      setShowToast(false);
                      setTimeout(() => setFormStatus("idle"), 300);
                    }, 5000);
                  } catch (error) {
                    console.error("Lỗi gửi form:", error);
                    alert("Có lỗi xảy ra, vui lòng thử lại sau!");
                    setFormStatus("idle");
                  }
                }}
              >
                <div style={{ display:"flex", gap:"1.25rem", flexWrap:"wrap" }}>
                  <input name="name"  id="contact-name"  type="text"  placeholder="Họ và tên *"         className="input-field" style={{ flex:"1 1 200px" }} required />
                  <input name="phone" id="contact-phone" type="tel"   placeholder="Số điện thoại *"     className="input-field" style={{ flex:"1 1 200px" }} required />
                </div>
                <input name="email" id="contact-email"   type="email" placeholder="Email (không bắt buộc)" className="input-field" />
                <select name="service" id="contact-service" className="input-field" defaultValue="" required style={{ appearance:"none", backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat:"no-repeat", backgroundPosition:"right 12px center", color:"#0f172a" }}>
                  <option value="" disabled>Bạn cần dịch vụ gì? *</option>
                  <option>Cho thuê TKQC Facebook</option>
                  <option>Cho thuê TKQC Google</option>
                  <option>Cho thuê TKQC TikTok</option>
                  <option>Quản lý & tối ưu quảng cáo</option>
                  <option>Content & Social Media</option>
                  <option>Tư vấn chiến lược Digital Marketing</option>
                  <option>Mở khóa tài khoản</option>
                  <option>Xác minh tài khoản</option>
                  <option>Gói kết hợp nhiều dịch vụ</option>
                </select>
                <textarea name="message" id="contact-message" placeholder="Mô tả ngắn về doanh nghiệp / nhu cầu của bạn..." className="input-field" rows={4} style={{ resize:"vertical" }} />
                <button type="submit" className="btn btn-primary" style={{ alignSelf:"flex-start", padding:"0.85rem 2rem", opacity: formStatus === "submitting" ? 0.7 : 1, pointerEvents: formStatus !== "idle" ? "none" : "auto", transition: "all 0.3s" }}>
                  {formStatus === "submitting" ? "Đang gửi yêu cầu..." : formStatus === "success" ? "Đã gửi thành công ✅" : "Gửi yêu cầu tư vấn"}
                  {formStatus === "idle" && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>}
                </button>
              </form>

              {/* Toast Notification */}
              <div style={{
                position: "fixed", bottom: "2rem", right: "2rem", zIndex: 1000,
                background: "#fff", border: "1.5px solid #10b981", borderRadius: 16,
                padding: "1rem 1.5rem", boxShadow: "0 10px 30px rgba(16,185,129,0.15)",
                display: "flex", alignItems: "center", gap: "0.75rem",
                transform: showToast ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
                opacity: showToast ? 1 : 0, pointerEvents: showToast ? "auto" : "none",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#d1fae5", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>✓</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>Đã nhận yêu cầu!</div>
                  <div style={{ color: "#64748b", fontSize: "0.85rem" }}>Chúng tôi sẽ liên hệ trong 30 phút.</div>
                </div>
              </div>

              <div style={{ marginTop:"2.5rem", paddingTop:"2rem", borderTop:"1px solid rgba(0,0,0,0.06)", display:"flex", gap:"2rem", flexWrap:"wrap" }}>
                {[
                  { label:"Hotline", value:"086 59 22222" },
                  { label:"Email", value:"hi@dat.digital" },
                  { label:"Thời gian", value:"8:00 – 22:00 mỗi ngày" },
                ].map(item=>(
                  <div key={item.label}>
                    <div style={{ color:"#94a3b8", fontSize:"0.7rem", marginBottom:"0.2rem", letterSpacing:"0.06em", fontWeight:600 }}>{item.label.toUpperCase()}</div>
                    <div style={{ color:"#0ea5e9", fontWeight:700, fontSize:"0.9rem" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
