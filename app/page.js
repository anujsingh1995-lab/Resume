// Edit the data below – the page updates automatically.
const me = {
  name: "Anuj Singh",
  role: "Senior Full Stack Developer",
  intro:
    "I build fast, scalable e-commerce sites with Shopify Plus, WordPress and Next.js. 5 years of experience, leading web teams and shipping for SMB and enterprise clients.",
  email: "anujkumar05598@gmail.com",
  linkedin: "https://linkedin.com/in/anuj-singh-shopify-dev",
  location: "Indore, India · open to remote and international work",
};

const jobs = [
  {
    title: "Senior Web Developer", co: "Nucleo Analytics Pvt Ltd", when: "Apr 2024 – Present",
    points: [
      "Lead the web team on Shopify, WordPress, Squarespace, Webflow and Wix projects.",
      "Build and ship Next.js applications, including nucleoanalytics.com.",
    ],
  },
  {
    title: "Assistant Software Engineer", co: "Jeronone Technologies Pvt Ltd", when: "Sep 2021 – Mar 2024",
    points: [
      "Shopify and Shopify Plus theme customization, speed optimization and API integrations.",
      "Built custom WordPress and Shopify themes; reviewed code and mentored junior developers.",
    ],
  },
  {
    title: "Web Designer / Developer", co: "DigiQuack Technologies", when: "Oct 2020 – Aug 2021",
    points: [
      "Responsive sites with HTML, CSS, Bootstrap and JavaScript; WordPress, Elementor and WPBakery builds.",
      "Created graphic assets in Photoshop and Adobe XD.",
    ],
  },
];

const skills = {
  "E-commerce": "Shopify Plus, Liquid, Sections/Schema, App integrations, Core Web Vitals",
  "CMS & Frameworks": "WordPress, Elementor, Avada, Next.js, React, Webflow",
  Frontend: "HTML5, CSS3, JavaScript, Bootstrap, mobile-first design",
  Delivery: "Team leadership, client communication, QA, deployment",
  Tools: "Git, Cursor, Claude, ChatGPT, Photoshop, Adobe XD",
};

const projects = {
  "Next.js": ["giftlyst.com", "nucleoanalytics.com", "canvasclient.com"],
  "Shopify / Shopify Plus": [
    "applystickers.com", "shop.burkelman.com", "chosenstore.in", "parkerthatch.com",
    "neverfeltsogreat.com", "thefeelbar.com", "zaveribros.in", "domacoffee.com",
    "travelbagbuddy.com", "3dimension.se", "barefootkitchen.com",
  ],
  WordPress: [
    "theornamentshop.ie", "vedatokyo.com", "urbanmachine.build", "albiherylaw.com",
    "capbpm.com", "nightfallgroup.com", "aceconsult.co", "openwaterseptic.com",
  ],
  Webflow: ["childhoodhsp.com"],
};

export default function Home() {
  return (
    <main className="wrap">
      <header className="hero">
        <h1>{me.name}</h1>
        <p><strong>{me.role}.</strong> {me.intro}</p>
        <div className="links">
          <a className="btn main" href={`mailto:${me.email}`}>Email me</a>
          <a className="btn" href={me.linkedin}>LinkedIn</a>
        </div>
      </header>

      <section>
        <h2>Experience</h2>
        {jobs.map((j) => (
          <div className="job" key={j.title}>
            <h3>{j.title}, {j.co}</h3>
            <small>{j.when}</small>
            <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k}><b>{k}:</b> {v}</div>
          ))}
        </div>
      </section>

      <section>
        <h2>Selected projects</h2>
        {Object.entries(projects).map(([group, sites]) => (
          <div className="group" key={group}>
            <h3>{group}</h3>
            <div className="chips">
              {sites.map((s) => (
                <a key={s} href={`https://${s}`} target="_blank" rel="noopener noreferrer">{s}</a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        <p>MCA, Dr. A.P.J. Abdul Kalam Technical University (2018–2020)<br />
        BCA, Chaudhary Charan Singh University (2015–2018)</p>
        <p>Rising Star Award, Nucleo Analytics (2025) · Rising Star Award, JTPL Annual (2022)</p>
      </section>

      <footer>{me.location}</footer>
    </main>
  );
}
