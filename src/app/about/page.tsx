"use client";
import { useState, useEffect, useRef, CSSProperties} from "react";
import Link from "next/link";
import Image from "next/image";

/* ─── CONSTANTS ──────────────────────────────────────────── */
const GOLD   = "#c8a84b";
const BLACK  = "#000000";
const WHITE  = "#ffffff";
const LIGHT  = "#cccccc";
const DIM    = "#888888";
const DARK   = "#111111";
const MARGIN = "24px";
const MAX_W  = 820;

/* ─── DATA ───────────────────────────────────────────────── */
const SERVICES = [
  "Consulting",
  "Project Management",
  "Artist Representation",
  "Art Agent",
  "Artist Management",
  "Marketing and Strategy",
];

const EXHIBITIONS = [
  {
    title: "A NIGHT WITH MWAMI",
    description:
      "The Yaaas Family had the privilege of organizing 'A Night With Mwami' in Lagos, debuting the highly anticipated Autumn/Winter 23 collection by Papi Wata. Hosted at the Federal Temple Lake, curated lifestyle concept store. The event aimed to amalgamate different forms of art, much like Papi Wata's creations, and featured a performance by Words of Azia, an Yaaas creative. Attendees from diverse backgrounds enjoyed exploring and purchasing the exquisite pieces, interacting with Papi (himself), and experiencing a lively and intimate musical performance by Wak. This exclusive event was a unique and successful experience, providing an immersive glimpse into contemporary African fashion and culture.",
  },
  {
    title: "EVIL GENIUS",
    description:
      "The Yaaas Family was honoured to take part in the creation of the Evil Genius Art Experience alongside Afrobeats Icon, Mr. Eazi. Our contributions were numerous, including sourcing 16 artists from across the continent, implementing the execution process, and ensuring successful completion. The project is also showcasing works from our own talented Yaaas Creatives, Palticoat, Tammy Sinclair, and Samuel Tate Kitchen. The Evil Genius Art Experience is a travelling gallery that aims to bridge the gap between visual and sonic art, originating in Accra, London, Lagos, and other major cities. This project serves as a means of democratising the art world, making it more accessible to a broader audience and breaking down barriers to comprehension and consumption.",
  },
  {
    title: "EVIL GENIUS — VOL. II",
    description:
      "A dark, experimental collective pushing the boundaries of sonic architecture and visual deconstruction. The project has garnered international recognition for its bold approach to merging sound and visual art across the continent.",
  },
  {
    title: "PUPPY WATER",
    description:
      "A playful yet profound exploration of liquidity, transparency, and digital organicism. This collaboration brought together some of the most innovative minds across the African creative landscape to challenge conventions and reimagine what contemporary art can be.",
  },
];

/* ─── SCROLL REVEAL HOOK ─────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis] as const;
}

/* ─── PHOTO COLLAGE ──────────────────────────────────────── */
function PhotoCollage() {
  return (
    <div style={cc.outer}>
      <div style={cc.goldBar} />
      <div style={cc.grid}>
        <div style={{ ...cc.cell, gridColumn: "1",     gridRow: "1"     }}><Pic /></div>
        <div style={{ ...cc.cell, gridColumn: "2",     gridRow: "1 / 3" }}><Pic /></div>
        <div style={{ ...cc.cell, gridColumn: "3",     gridRow: "1"     }}><Pic /></div>
        <div style={{ ...cc.cell, gridColumn: "4",     gridRow: "1"     }}><Pic /></div>
        <div style={{ ...cc.cell, gridColumn: "5",     gridRow: "1"     }}><Pic /></div>
        <div style={{ ...cc.cell, gridColumn: "1",     gridRow: "2"     }}><Pic /></div>
        <div style={{ ...cc.cell, gridColumn: "3",     gridRow: "2"     }}><Pic /></div>
        <div style={{ ...cc.cell, gridColumn: "4",     gridRow: "2 / 4" }}><Pic /></div>
        <div style={{ ...cc.cell, gridColumn: "5",     gridRow: "2"     }}><Pic /></div>
        <div style={{ ...cc.cell, gridColumn: "1 / 4", gridRow: "3"     }}><Pic /></div>
        <div style={{ ...cc.cell, gridColumn: "5",     gridRow: "3"     }}><Pic /></div>
      </div>
      <div style={cc.goldBar} />
    </div>
  );
}

const cc = {
  outer: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 18,
    height: 220,
  },
  goldBar: {
    width: 8,
    height: 60,
    flexShrink: 0,
    backgroundColor: GOLD,
    borderRadius: 2,
  },
  grid: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: 3,
    overflow: "hidden",
    height: "100%",
  },
  cell: { overflow: "hidden", minWidth: 0, minHeight: 0 },
};

function Pic() {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "100%", height: "100%",
        backgroundColor: hov ? "#2a2a2a" : "#1c1c1c",
        border: `1px solid ${hov ? "#555" : "#2a2a2a"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background-color 0.2s, border-color 0.2s",
        cursor: "pointer",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 28 28" fill="none">
        <rect x="1" y="4" width="26" height="20" rx="2" stroke="#3a3a3a" strokeWidth="1.5"/>
        <circle cx="9" cy="11" r="2" stroke="#3a3a3a" strokeWidth="1.5"/>
        <polyline points="1,21 9,14 14,18 20,12 27,19" stroke="#3a3a3a" strokeWidth="1.5" fill="none"/>
      </svg>
    </div>
  );
}

/* ─── LOGO ───────────────────────────────────────────────── */
function YaaasLogo({ size = 36 }) {
  return (
    <div>
      <Link href="/">
        <Image src="/images/logo.png" alt="Yaa Asantewaa Agency" width={80} height={80} className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" />
      </Link>
    </div>
  );
}

/* ─── MAIN PAGE ──────────────────────────────────────────── */
export default function YaaasAboutPage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [exVis, setExVis]             = useState(EXHIBITIONS.map(() => false));

  useEffect(() => {
    const fn = () => setNavScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // per-exhibition reveal
  const exRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = exRefs.current.map((el, i) => {
      if (!el) return null;

      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setExVis(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
          obs.disconnect();
        }
      }, { threshold: 0.05 });

      obs.observe(el);
      return obs;
    });

    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const [heroRef,   heroVis]   = useReveal(0.1);
  const [bodyRef,   bodyVis]   = useReveal(0.1);
  const [svcRef,    svcVis]    = useReveal(0.1);

  return (
    <>
      <style>{CSS}</style>
      <div style={s.page}>

        {/* ════ NAV ════ */}
        <nav style={{ ...s.nav, boxShadow: navScrolled ? "0 2px 20px rgba(0,0,0,0.85)" : "none" }}>
          <div style={s.navInner}>
          <div>
            <Link href="/">
              <Image src="/images/logo.png" alt="Yaa Asantewaa Agency" width={80} height={80} className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </Link>
          </div>
            <ul style={s.navList}>
              {[
                { name:"HOME", path:"/"},
                {name:"CATALOGUE", path:"/catalogue"},
                {name:"TALENT", path:"/talent"},
                {name:"GALLERY", path:"gallery"},].map(link => (
                <li key={link.name}><Link href="link.path" style={s.navLink} className="nav-link">{link.name}</Link></li>
              ))}
              <li><Link href="/contact" style={s.contactBtn} className="contact-btn">CONTACT</Link></li>
            </ul>
          </div>
        </nav>

        {/* ════ ABOUT US ════ */}
        <section style={s.aboutSection}>

          <div ref={heroRef} className={heroVis ? "fade-up vis" : "fade-up"}>
            <h1 style={s.aboutHeading}>ABOUT US</h1>
          </div>

          {/* thin white line */}
          <div style={s.hrThin} />

          <div ref={bodyRef} className={bodyVis ? "fade-up vis" : "fade-up"}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={s.para}>
              Our agency is dedicated to promoting African art and culture by providing a platform for talented
              creatives to showcase their work to a wider audience. We believe that inclusivity and diversity
              should be at the forefront of the art world, and we're proud to be making a positive impact.
            </p>
            <p style={s.para}>
              Our team works with artists from all over the continent. In every art form, from emerging talents to
              established names. We provide support and representation to help those creatives navigate the
              often-challenging art world. At the Yaaas Asanterwa (Yaaas) Agency, we are passionate about
              discovering and promoting raw talent globally. Our ultimate goal is to create a vibrant and
              sustainable ecosystem that supports African art and culture. We take pride in representing a
              diverse range of artists from painters and sculptors to photographers and fashion designers.
            </p>
            <p style={s.para}>
              We believe that art can inspire, educate, and transform society, and our mission is to make it
              accessible to everyone. We invite you to join us on our journey to celebrate African creativity and
              talent, and lets make a difference together!
            </p>
          </div>

          {/* Services */}
          <div ref={svcRef} style={{ marginTop: 22 }}>
            <p className={svcVis ? "fade-up vis" : "fade-up"} style={s.servicesHeading}>
              OUR SERVICES
            </p>
            {SERVICES.map((item, i) => (
              <p key={item} style={{
                fontSize: 11, color: LIGHT, margin: "0 0 4px", lineHeight: 1.7,
                opacity:   svcVis ? 1 : 0,
                transform: svcVis ? "translateX(0)" : "translateX(-12px)",
                transition: `opacity 0.5s ease ${i * 65}ms, transform 0.5s ease ${i * 65}ms`,
              }}>{item}</p>
            ))}
          </div>

          {/* thick white separator with bottom breathing room */}
          <div style={s.hrThick} />
        </section>

        {/* ════ EXHIBITIONS BAND — gold bg ════ */}
        <div style={s.exhibBand}>
          <div style={s.exhibBandInner}>
            <h2 style={s.exhibBandTitle}>EXHIBITIONS</h2>
          </div>
        </div>

        {/* ════ EXHIBITIONS — stacked rows on black ════ */}
        <section style={s.exhibSection}>
          {EXHIBITIONS.map((ex, i) => (
            <div
              key={i}
              ref={el => {exRefs.current[i] = el;}}
              className={exVis[i] ? "fade-up vis" : "fade-up"}
              style={s.exhibEntry}
            >
              <div style={s.exhibTitleBadge}>
                <span style={s.exhibTitleText}>{ex.title}</span>
              </div>
              <PhotoCollage />
              <p style={s.exhibDesc}>{ex.description}</p>
            </div>
          ))}
        </section>

        {/* ════ FOOTER ════ */}
        <footer style={s.footer}>
          <div style={s.footerGrid}>

            <div style={s.footerColLogo}>
            <div>
              <Link href="/">
                <Image src="/images/logo.png" alt="Yaa Asantewaa Agency" width={80} height={80} className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </Link>
            </div>
            </div>

            <div style={s.footerColNav}>
              {["HOME","CATALOGUE","TALENT","GALLERY","CONTACT"].map(l => (
                <a key={l} href="#" style={s.footerNavLink} className="footer-link">{l}</a>
              ))}
            </div>

            <div style={s.footerColSocials}>
              {[
                { icon: "𝕏",  title: "X / Twitter" },
                { icon: "▶",  title: "YouTube"      },
                { icon: "⬜", title: "Instagram"    },
                { icon: "♪",  title: "TikTok"       },
              ].map(({ icon, title }) => (
                <div key={title} title={title} style={s.socialIcon} className="social-icon">{icon}</div>
              ))}
            </div>

          </div>
          <p style={s.copyright}>© YAA ASANTERWA 2024. ALL RIGHTS RESERVED.</p>
        </footer>

      </div>
    </>
  );
}

/* ─── STYLES ─────────────────────────────────────────────── */
const s: Record<string, CSSProperties> = {
  page: {
    backgroundColor: BLACK,
    color: LIGHT,
    fontFamily: "(--font-sans), sans-serif",
    fontSize: "14",
    minHeight: "100vh",
    overflowX: "hidden",
    paddingTop:"60px"
  },

  /* NAV */
  nav: {
    backgroundColor: "rgba(10,10,10,0.97)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #1c1c1c",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 250,
    transition: "box-shadow 0.3s",
  },
  navInner: {
    maxWidth: MAX_W, margin: "0 auto",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: `10px ${MARGIN}`,
  },
  navList: {
    display: "flex", gap: 22,
    listStyle: "none", margin: 0, padding: 0, alignItems: "center",
  },
  navLink: {
    color: "#aaa", textDecoration: "none", fontSize: 9,
    letterSpacing: "0.14em", textTransform: "uppercase",
    position: "relative", paddingBottom: 3, display: "inline-block",
  },
  contactBtn: {
    color: WHITE, textDecoration: "none", fontSize: 9,
    letterSpacing: "0.14em", textTransform: "uppercase",
    border: `1px solid ${WHITE}`, borderRadius:"2px", padding: "5px 12px",
    display: "inline-block", backgroundColor: "transparent",
    cursor: "pointer", transition: "background-color 0.22s, color 0.22s",
  },

  /* ABOUT */
  aboutSection: {
    maxWidth: MAX_W, margin: "0 auto", fontSize: 14,
    padding: `36px ${MARGIN} 0`,
  },
  aboutHeading: {
    fontSize: 17, fontWeight: 700, letterSpacing: "0.22em",
    color: GOLD, textTransform: "uppercase", margin: "0 0 12px",
  },
  hrThin: {
    width: "100%", height: "0.5px",
    backgroundColor: WHITE, marginBottom: 22,
  },
  hrThick: {
    width: "100%", height: 3,
    backgroundColor: WHITE, margin: "28px 0 36px",
  },
  para: {
    fontSize: 11, lineHeight: 1.9, color: LIGHT, margin: 0,
  },
  servicesHeading: {
    fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
    color: WHITE, textTransform: "uppercase", margin: "0 0 8px",
  },

  /* EXHIBITIONS BAND */
  exhibBand: { backgroundColor: GOLD, padding: "18px 0 14px" },
  exhibBandInner: {
    maxWidth: MAX_W, margin: "0 auto", padding: `0 ${MARGIN}`,
  },
  exhibBandTitle: {
    fontSize: 17, fontWeight: 700, letterSpacing: "0.22em",
    color: WHITE, textTransform: "uppercase", margin: 0,
  },

  /* EXHIBITIONS */
  exhibSection: {
    backgroundColor: BLACK,
    padding: `28px ${MARGIN} 64px`,
    maxWidth: MAX_W, margin: "0 auto",
    display: "flex", flexDirection: "column", gap: 56,
  },
  exhibEntry: {},
  exhibTitleBadge: {
    display: "inline-block",
    backgroundColor: WHITE,
    padding: "4px 14px", marginBottom: 14,
  },
  exhibTitleText: {
    fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
    color: DARK, textTransform: "uppercase", display: "block",
  },
  exhibDesc: {
    fontSize: 11, lineHeight: 1.95, color: DIM, margin: 0,
  },

  /* FOOTER */
  footer: {
    backgroundColor: BLACK,
    borderTop: "1px solid #1e1e1e",
    padding: `60px ${MARGIN} 40px`,
  },
  footerGrid: {
    maxWidth: MAX_W, margin: "0 auto",
    display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center", gap: 16, marginBottom: 48,
  },
  footerColLogo: {
    display: "flex", justifyContent: "center", alignItems: "center",
  },
  footerColNav: {
    display: "flex", flexDirection: "column",
    alignItems: "center", gap: 10,
  },
  footerNavLink: {
    color: DIM, textDecoration: "none", fontSize: 9,
    letterSpacing: "0.16em", textTransform: "uppercase", transition: "color 0.2s",
  },
  footerColSocials: {
    display: "flex", flexDirection: "row",
    gap: 8, justifyContent: "center", alignItems: "center",
  },
  socialIcon: {
    color: DIM, fontSize: 11, width: 26, height: 26,
    display: "flex", alignItems: "center", justifyContent: "center",
    border: "1px solid #2e2e2e", borderRadius: 2,
    cursor: "pointer", transition: "border-color 0.2s, color 0.2s",
  },
  copyright: {
    maxWidth: MAX_W, margin: "0 auto", display: "block",
    textAlign: "center", fontSize: 8, color: "#3a3a3a",
    letterSpacing: "0.16em", paddingTop: 12,
    borderTop: "1px solid #1a1a1a",
  },
};

/* ─── CSS ─────────────────────────────────────────────────── */
const CSS = `
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; overflow-x: hidden; scrollbar-width: none; }
  body::-webkit-scrollbar { display: none; }

  .fade-up { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .fade-up.vis { opacity: 1; transform: translateY(0); }

  .logo-hover { cursor: pointer; display: inline-block; transition: transform 0.28s ease; }
  .logo-hover:hover { transform: scale(1.1); }

  .nav-link { position: relative; }
  .nav-link::after {
    content: '';
    position: absolute; bottom: 0; left: 0;
    width: 0; height: 1px;
    background: ${GOLD};
    transition: width 0.22s ease;
  }
  .nav-link:hover { color: #fff !important; }
  .nav-link:hover::after { width: 100%; }

  .contact-btn:hover { background-color: ${WHITE} !important; color: ${BLACK} !important; }
  .footer-link:hover { color: ${GOLD} !important; }
  .social-icon:hover { border-color: ${GOLD} !important; color: ${GOLD} !important; }
`;
