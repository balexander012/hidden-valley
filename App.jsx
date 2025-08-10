import React, { useEffect, useState } from "react";

export default function App() {
  useEffect(() => {
    if (document.getElementById("hvalley-css")) return;
    const css = `
    :root { --mx: 100vw; --brand:#111; --muted:#666; --line:#eee; }

    .wrap{
      max-width: 1120px;         
      margin: 0 auto;
      padding: 0 20px;         /* keep small side padding */
    }
    
    /* optional: limit long text blocks so lines don't get too wide */
    section .wrap > div,
    section .wrap > .row { max-width: 1400px; margin: 0 auto; }
    
      .nav{height:64px;display:flex;align-items:center;justify-content:space-between;gap:16px}
      .menu{display:flex;gap:18px;font-size:14px}
      .btn {
        display:inline-flex;
        align-items:center;
        justify-content:center;
        padding:10px 14px;
        border-radius:10px;
        border:1px solid #ddd;
        background:#fff;
        cursor:pointer;
        font-weight:600;
        color:#000000;
      }
      
      .btn.primary{background:var(--brand);color:#fff;border-color:var(--brand)}
      .hero {
        position: relative;
        color: #ffffff;
        min-height: 60vh;
        width: 100vw; /* full viewport width */
        left: 50%;
        transform: translateX(-50%); /* center it */
      }
      
      .hero::before,
      .hero::after {
        content: "";
        position: absolute;
        inset: 0; /* fill entire hero */
        background-size: cover;
        background-position: center;
      }
      
      .hero::before {
        background-image: url('/Barn01.jpeg');
      }
      
      .hero::after {
        background: linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.35));
      }
      
      .hero > .wrap {
        position: relative;
        max-width: 1120px;
        margin: 0 auto; /* center text block */
        padding: 96px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      
      
      
      
      .eyebrow{text-transform:uppercase;letter-spacing:.12em;font-size:12px;opacity:.9}
      h1{font-size:clamp(28px,5vw,48px);line-height:1.1;margin:10px 0}
      p.lead{font-size:18px;opacity:.95}
      .actions{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap}
      .stats{background:#fafafa;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:24px 0}
      .statgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
      @media (min-width:640px){.statgrid{grid-template-columns:repeat(4,1fr)}}
      .stat{display:flex;gap:10px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:14px;padding:12px 14px}
      .stat .icon{width:28px;height:28px;display:grid;place-items:center;border-radius:8px;background:#f4f4f4}
      .meta{font-size:12px;color:#666;text-transform:uppercase;letter-spacing:.06em}
      section{padding:56px 0}
      h2{font-size:28px;margin:0 0 16px}
      .row{display:grid;gap:20px}
      @media (min-width:768px){.row-2{grid-template-columns:1fr 1fr}}
      .ph{aspect-ratio:16/9;background:#f2f2f2;border-radius:12px;display:grid;place-items:center;color:#aaa;font-size:12px}
      .cards{display:grid;gap:16px}
      @media (min-width:768px){.cards{grid-template-columns:1fr 1fr}}
      .card{border:1px solid var(--line);border-radius:14px;padding:16px;background:#fff}
      .card h3{margin:0 0 8px;font-size:18px}
      .muted{color:#666;font-size:12px}
      .amen{display:grid;gap:12px}
      @media (min-width:720px){.amen{grid-template-columns:1fr 1fr 1fr}}
      .amen > div{border:1px solid var(--line);border-radius:12px;padding:12px;font-size:14px}
      .gallery{display:grid;gap:8px;grid-template-columns:repeat(2,1fr)}
      @media (min-width:768px){.gallery{grid-template-columns:repeat(3,1fr)}}
      .tile{aspect-ratio:4/3;background:#eee;border-radius:12px}
      form .in{width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:10px}
      form .in + .in, textarea.in{margin-top:10px}
      textarea.in{min-height:110px;resize:vertical}
      footer{border-top:1px solid var(--line);padding:28px 0;color:#777;font-size:14px}
      .pill{padding:2px 8px;border:1px solid var(--line);border-radius:999px;font-size:12px}
    `;
    const tag = document.createElement("style");
    tag.id = "hvalley-css";
    tag.textContent = css;
    document.head.appendChild(tag);
  }, []);

  const showTests =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("test") === "1";

  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="#home" style={{ fontWeight: 700, fontSize: 18 }}>Hidden Valley Farm</a>
          <nav className="menu">
            <a href="#about">About</a>
            <a href="#services">Boarding & Lessons</a>
            <a href="#amenities">Amenities</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn primary">Book a Tour</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <div className="eyebrow">Berwyn, Pennsylvania</div>
            <h1>Boarding & Lessons on a Beautiful 50-Acre Farm</h1>
            <p className="lead">Family-run since 1996. Now welcoming riders at our location on White Horse Road.</p>
            <div className="actions">
              <a href="#contact" className="btn primary">Contact Ellie</a>
              <a href="#services" className="btn">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="wrap statgrid">
          <Stat icon={AwardIcon()} label="Since" value="1996" />
          <Stat icon={PinIcon()} label="Acreage" value="50 acres" />
          <Stat icon={CheckIcon()} label="Services" value="Boarding • Lessons" />
          <Stat icon={CalendarIcon()} label="Tours" value="By appointment" />
        </div>
      </div>

      <section id="about">
        <div className="wrap row row-2" style={{ alignItems: "center" }}>
          <div>
            <h2>About Hidden Valley Farm</h2>
            <p className="lead">
              Hidden Valley Farm is a welcoming equestrian facility in Berwyn, PA, offering quality care,
              experienced instruction, and a safety-focused environment for riders of all levels. We offer
              boarding as well as lessons on your horse or ours.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
              {[
                "Family-owned and managed since 1996",
                "Emphasis on excellent daily care and communication",
                "Lesson programs tailored for beginners through experienced riders",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start", margin: "6px 0" }}>
                  {CheckIcon(16)}
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src="public/barn01.jpeg" alt="Main Barn Image" style={{ borderRadius: 12, width: "100%" }} />
        </div>
      </section>

      <section id="services" style={{ background: "#fafafa", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div className="wrap">
          <h2>Boarding & Lessons</h2>
          <div className="cards">
            <div className="card">
              <h3>Full Board</h3>
              <p>Quality daily care with turnout, individualized feed programs, and attentive on-site management.</p>
              <ul>
                <li>Stalls and turnout: <em>[add specifics]</em></li>
                <li>Feeding & supplements: <em>[add details]</em></li>
                <li>Veterinary & farrier coordination: <em>[cadence]</em></li>
                <li>Facilities access: <em>[ring, trails, wash stall, etc.]</em></li>
              </ul>
              <div className="muted">*Replace placeholders with exact amenities and barn rules.</div>
            </div>
            <div className="card">
              <h3>Riding Lessons</h3>
              <p>Private and small-group lessons for all levels, on school horses or your own.</p>
              <ul>
                <li>Disciplines: <em>[hunters, equitation, basic dressage]</em></li>
                <li>Schedule: <em>[days/times]</em></li>
                <li>Coaching & show support: <em>[optional]</em></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="amenities">
        <div className="wrap">
          <h2>Amenities</h2>
          <div className="amen">
            {[
              "Large [XX] × [XX] riding ring with [footing]",
              "Ample turnout with safe fencing",
              "Heated/insulated tack room",
              "Wash stall with hot/cold water",
              "Trailer parking (by arrangement)",
              "Miles of nearby hacking/trails",
            ].map((t) => (
              <div key={t}>{t}</div>
            ))}
          </div>
          <div className="muted" style={{ marginTop: 8 }}>Replace with your confirmed list.</div>
        </div>
      </section>

      <section id="gallery" style={{ background: "#fafafa", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16 }}>
            <h2>Gallery</h2>
            <span className="pill">Request Media Kit</span>
          </div>
          <div className="gallery">
            {["Farm03.jpeg", "InsideRing01.jpeg", "Pony01.jpeg", "barn03.jpeg", "farm02.jpeg", "horses.jpeg"].map((file, i) => (
    <div key={i} className="tile" style={{ overflow: "hidden" }}>
    <img
      src={`/${file}`}
      alt={`Gallery image ${i + 1}`}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "12px"
      }}
    />
  </div>
))}
</div>


        </div>
      </section>

      <section id="contact">
        <div className="wrap row row-2">
          <div>
            <h2>Get in touch</h2>
            <p className="muted" style={{ marginBottom: 12 }}>
              Tours and lessons are scheduled by appointment. Call or message to check availability.
            </p>
            <div style={{ display: "grid", gap: 8, fontSize: 15 }}>
              <div><strong>Phone:</strong> <a href="tel:+16103316199">(610) 331-6199</a> (Ellie)</div>
              <div><strong>Address:</strong> 2400 White Horse Rd, Berwyn, PA</div>
              <div><strong>Email:</strong> <a href="mailto:info@hiddenvalley.farm">info@hiddenvalley.farm</a></div>
            </div>
          </div>

          <div className="card">
            <h3>Send a message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
          <div>© {new Date().getFullYear()} Hidden Valley Farm. All rights reserved.</div>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#policies">Boarding Policies</a>
            <a href="#waivers">Waivers</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      {showTests && <SmokeTests />}
    </>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="stat">
      <div className="icon">{icon}</div>
      <div>
        <div className="meta">{label}</div>
        <div style={{ fontWeight: 700 }}>{value}</div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input className="in" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="in" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <textarea className="in" placeholder="How can we help?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      <div className="actions">
        <button className="btn primary" type="submit">Submit</button>
        <span className="muted">This demo doesn’t send email.</span>
      </div>
    </form>
  );
}

/* Inline SVG icons (no external packages) */
function Svg({ path, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}
const CheckIcon = (s = 18) => <Svg size={s} path="M20 6L9 17l-5-5" />;
const AwardIcon = (s = 18) => <Svg size={s} path="M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8-3.5-1-2.5 3-2.5-3L5 16l2-6h10l2 6Z" />;
const CalendarIcon = (s = 18) => <Svg size={s} path="M8 7V3h8v4M3 10h18M7 14h10M7 18h10" />;
const PinIcon = (s = 18) => <Svg size={s} path="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />;

function SmokeTests() {
  const tests = [
    {
      name: "Renders hero heading",
      pass:
        !!document.querySelector("h1") &&
        (document.querySelector("h1")?.textContent || "").includes("Boarding & Lessons"),
    },
    { name: "Contact includes phone number", pass: !!document.body.textContent?.includes("(610) 331-6199") },
    { name: "Icons render", pass: !!document.querySelector("svg") },
  ];
  return (
    <section style={{ padding: "16px 0", background: "#fff9e6", borderTop: "1px solid #f5e6a8" }}>
      <div className="wrap">
        <h3 style={{ margin: "0 0 8px" }}>Smoke Tests</h3>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14 }}>
          {tests.map((t) => (
            <li key={t.name}>
              {t.name}:{" "}
              <strong style={{ color: t.pass ? "#15803d" : "#b91c1c" }}>
                {t.pass ? "PASS" : "FAIL"}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
