"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const data = {
  en: {
    nav: ["About", "Experience", "Projects", "Education", "News", "Resume", "Contact"],
    status: "Available for selected opportunities",
    label: "Autonomy engineer · Software developer",
    headline: ["Hi, I’m", "Sohan Saldanha"],
    intro:
      "I’m interested in research and development in robotics, computer vision, and vision-language-action (VLA) systems—building intelligent machines that can perceive, understand, and act.",
    explore: "Explore projects",
    connect: "Start a conversation",
    move: "Scroll to explore",
    about: [
      "01 — Profile",
      "Across the boundary between bits and atoms.",
      "I am a mechatronics engineer and Master’s student in Autonomy Technologies at FAU. I work from sensors and algorithms through to interfaces and deployment — because the best autonomous products are built as complete systems.",
    ],
    facts: [
      ["Based in", "Germany"],
      ["Focus", "Robotics · CV · Software"],
      ["Approach", "System thinking"],
    ],
    skills: "Capabilities",
    skillList: [
      "C++",
      "Python",
      "ROS",
      "Computer Vision",
      "LiDAR",
      "Docker",
      "Linux",
      "Next.js",
      "Machine Learning",
    ],
    exp: ["02 — Experience", "Learning by building."],
    experiences: [
      [
        "Now",
        "M.Sc. Autonomy Technologies",
        "FAU Erlangen-Nürnberg",
        "Autonomous systems, robotics, machine learning and visual perception.",
      ],
      [
        "Previous",
        "Software Developer / Product Manager",
        "Talents2Germany",
        "RPA workflows, full-stack product development, chatbot and API integrations.",
      ],
      [
        "Previous",
        "Programming Tutor & Lab Assistant",
        "THWS",
        "C++ teaching and practical work in automation, embedded systems, computer vision and IoT.",
      ],
      [
        "Thesis",
        "LiDAR Localisation Research",
        "THWS",
        "Evaluation of localisation algorithms using simulated and real sensor data.",
      ],
    ],
    work: ["03 — Selected projects", "Proof of work."],
    details: "View project details",
    projects: [
      [
        "01",
        "LiDAR Localisation",
        "Robotics · Research",
        "A repeatable evaluation pipeline comparing localisation performance across simulated and real sensor data.",
        "ROS / C++ / Docker",
      ],
      [
        "02",
        "Vision Quality Control",
        "Vision · Automation",
        "A mechatronic inspection system that classifies injection-moulded parts and routes decisions through Node-RED.",
        "Computer Vision / IoT / Node-RED",
      ],
      [
        "03",
        "Intelligent Learning Platform",
        "Product · Full-stack",
        "A web platform combining API integrations, automated workflows and an intelligent support assistant.",
        "Next.js / APIs / AI",
      ],
    ],
    edu: ["04 — Education", "Built on two disciplines."],
    degrees: [
      [
        "Current",
        "M.Sc. Autonomy Technologies",
        "FAU Erlangen-Nürnberg",
        "Autonomous systems · Robotics · Machine learning",
      ],
      [
        "Completed",
        "B.Eng. Mechatronics",
        "THWS, Schweinfurt",
        "Mechanics · Electronics · Software engineering",
      ],
    ],
    contact: [
      "05 — Contact",
      "Let’s build something that moves.",
      "I’m open to engineering roles, ambitious projects and research collaborations in robotics, autonomy and software.",
    ],
    mail: "Send an email",
    linkedin: "Connect on LinkedIn",
    footer: "Designed & engineered by Sohan Saldanha",
    top: "Back to top",
  },
  de: {
    nav: ["Profil", "Erfahrung", "Projekte", "Kontakt"],
    status: "Offen für ausgewählte Möglichkeiten",
    label: "Autonomie-Ingenieur · Softwareentwickler",
    headline: ["Ich entwickle Systeme,", "die wahrnehmen."],
    intro:
      "Robotik, Wahrnehmung und Software — entwickelt zu zuverlässigen Produkten, die komplexe Technik verständlich machen.",
    explore: "Projekte ansehen",
    connect: "Gespräch beginnen",
    move: "Scrollen zum Entdecken",
    about: [
      "01 — Profil",
      "An der Grenze zwischen Bits und Atomen.",
      "Ich bin Mechatronik-Ingenieur und Masterstudent für Autonomy Technologies an der FAU. Ich arbeite von Sensoren und Algorithmen bis zu Benutzeroberflächen und Deployment — denn gute autonome Produkte entstehen als Gesamtsysteme.",
    ],
    facts: [
      ["Standort", "Deutschland"],
      ["Fokus", "Robotik · CV · Software"],
      ["Ansatz", "Systemdenken"],
    ],
    skills: "Kompetenzen",
    skillList: [
      "C++",
      "Python",
      "ROS",
      "Computer Vision",
      "LiDAR",
      "Docker",
      "Linux",
      "Next.js",
      "Machine Learning",
    ],
    exp: ["02 — Erfahrung", "Lernen durch Entwickeln."],
    experiences: [
      [
        "Aktuell",
        "M.Sc. Autonomy Technologies",
        "FAU Erlangen-Nürnberg",
        "Autonome Systeme, Robotik, Machine Learning und visuelle Wahrnehmung.",
      ],
      [
        "Zuvor",
        "Softwareentwickler / Produktmanager",
        "Talents2Germany",
        "RPA-Prozesse, Full-Stack-Produktentwicklung, Chatbot- und API-Integrationen.",
      ],
      [
        "Zuvor",
        "Programmiertutor & Laborassistent",
        "THWS",
        "C++-Lehre und praktische Arbeit in Automation, Embedded Systems, Computer Vision und IoT.",
      ],
      [
        "Abschlussarbeit",
        "LiDAR-Lokalisierungsforschung",
        "THWS",
        "Evaluation von Lokalisierungsalgorithmen mit simulierten und realen Sensordaten.",
      ],
    ],
    work: ["03 — Ausgewählte Projekte", "Arbeit, die für sich spricht."],
    details: "Projektdetails ansehen",
    projects: [
      [
        "01",
        "LiDAR-Lokalisierung",
        "Robotik · Forschung",
        "Eine Evaluationspipeline zum Vergleich von Lokalisierungsverfahren mit simulierten und realen Sensordaten.",
        "ROS / C++ / Docker",
      ],
      [
        "02",
        "Visuelle Qualitätskontrolle",
        "Vision · Automation",
        "Ein mechatronisches Prüfsystem zur Klassifizierung von Spritzgussteilen mit Prozesssteuerung über Node-RED.",
        "Computer Vision / IoT / Node-RED",
      ],
      [
        "03",
        "Intelligente Lernplattform",
        "Produkt · Full-stack",
        "Eine Webplattform mit API-Integrationen, automatisierten Abläufen und intelligentem Support-Assistenten.",
        "Next.js / APIs / AI",
      ],
    ],
    edu: ["04 — Ausbildung", "Auf zwei Disziplinen aufgebaut."],
    degrees: [
      [
        "Aktuell",
        "M.Sc. Autonomy Technologies",
        "FAU Erlangen-Nürnberg",
        "Autonome Systeme · Robotik · Machine Learning",
      ],
      [
        "Abgeschlossen",
        "B.Eng. Mechatronik",
        "THWS, Schweinfurt",
        "Mechanik · Elektronik · Softwareentwicklung",
      ],
    ],
    contact: [
      "05 — Kontakt",
      "Lass uns etwas entwickeln, das bewegt.",
      "Ich freue mich auf Engineering-Positionen, ambitionierte Projekte und Forschung in Robotik, Autonomie und Software.",
    ],
    mail: "E-Mail senden",
    linkedin: "Auf LinkedIn verbinden",
    footer: "Entworfen & entwickelt von Sohan Saldanha",
    top: "Nach oben",
  },
} as const;

function ScrollScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      canvas.hidden = true;
      document.documentElement.classList.add("no-webgl");
      return () => document.documentElement.classList.remove("no-webgl");
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.z = 7;
    const group = new THREE.Group();
    scene.add(group);
    const metal = new THREE.MeshStandardMaterial({
      color: 0x18242a,
      metalness: 0.78,
      roughness: 0.24,
    });
    const dark = new THREE.MeshStandardMaterial({
      color: 0x05090b,
      metalness: 0.35,
      roughness: 0.25,
    });
    const cyan = new THREE.MeshBasicMaterial({ color: 0x45e7ff });
    const acid = new THREE.MeshBasicMaterial({ color: 0xa8ff35 });
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.9, 0.32, 32), metal);
    base.position.y = -1.8;
    group.add(base);
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.48, 0.72, 24), dark);
    pedestal.position.y = -1.3;
    group.add(pedestal);
    const shoulder = new THREE.Group();
    shoulder.position.set(0, -0.95, 0);
    group.add(shoulder);
    const joint1 = new THREE.Mesh(new THREE.SphereGeometry(0.35, 24, 16), metal);
    shoulder.add(joint1);
    const arm1 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.75, 0.42), metal);
    arm1.position.y = 0.9;
    shoulder.add(arm1);
    const elbow = new THREE.Group();
    elbow.position.y = 1.78;
    shoulder.add(elbow);
    const joint2 = new THREE.Mesh(new THREE.SphereGeometry(0.31, 24, 16), metal);
    elbow.add(joint2);
    const arm2 = new THREE.Mesh(new THREE.BoxGeometry(0.36, 1.45, 0.36), metal);
    arm2.position.y = 0.72;
    elbow.add(arm2);
    const sensor = new THREE.Group();
    sensor.position.y = 1.5;
    elbow.add(sensor);
    const cameraBody = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.52, 0.55), dark);
    sensor.add(cameraBody);
    [-0.32, 0.32].forEach((x) => {
      const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.17, 0.14, 24), cyan);
      lens.rotation.x = Math.PI / 2;
      lens.position.set(x, 0, 0.34);
      sensor.add(lens);
    });
    const statusLed = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), acid);
    statusLed.position.set(0, 0.16, 0.3);
    sensor.add(statusLed);
    const scanCone = new THREE.Mesh(
      new THREE.ConeGeometry(1.35, 3.4, 4, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x45e7ff,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      }),
    );
    scanCone.rotation.x = -Math.PI / 2;
    scanCone.position.z = 2.05;
    sensor.add(scanCone);
    const targetBox = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(1.15, 0.85, 1.15)),
      new THREE.LineBasicMaterial({ color: 0xa8ff35, transparent: true, opacity: 0.75 }),
    );
    targetBox.position.set(-1.1, -0.15, 3.5);
    group.add(targetBox);
    const cloudPositions: number[] = [];
    for (let i = 0; i < 520; i++) {
      const a = Math.random() * Math.PI * 2,
        r = 0.2 + Math.random() * 2.4;
      cloudPositions.push(
        Math.cos(a) * r - 1.1,
        (Math.random() - 0.5) * 1.8 - 0.15,
        Math.sin(a) * r + 3.5,
      );
    }
    const points = new THREE.Points(
      new THREE.BufferGeometry().setAttribute(
        "position",
        new THREE.Float32BufferAttribute(cloudPositions, 3),
      ),
      new THREE.PointsMaterial({ color: 0x45e7ff, size: 0.025, transparent: true, opacity: 0.5 }),
    );
    group.add(points);
    const floor = new THREE.GridHelper(8, 18, 0x21414a, 0x13252b);
    floor.position.y = -1.98;
    group.add(floor);
    scene.add(new THREE.AmbientLight(0x8befff, 1.3));
    const light = new THREE.PointLight(0xa8ff35, 18, 18);
    light.position.set(3, 2, 4);
    scene.add(light);

    let targetScroll = 0,
      currentScroll = 0,
      frame = 0;
    const onScroll = () => {
      targetScroll =
        window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    const render = () => {
      currentScroll +=
        ((reduce ? targetScroll : targetScroll) - currentScroll) * (reduce ? 1 : 0.065);
      const phase = currentScroll * Math.PI * 2;
      group.position.x =
        window.innerWidth < 760 ? 0.15 : 2.25 - Math.sin(currentScroll * Math.PI) * 1.15;
      group.position.y = -0.05 - Math.sin(phase * 1.2) * 0.22;
      group.position.z = -0.2 - currentScroll * 0.9;
      group.rotation.y = -0.48 + currentScroll * 1.7;
      group.scale.setScalar(
        window.innerWidth < 760 ? 0.68 : 0.86 - Math.sin(currentScroll * Math.PI) * 0.08,
      );
      shoulder.rotation.z = -0.45 + Math.sin(currentScroll * Math.PI * 1.3) * 0.72;
      elbow.rotation.z = 0.72 - Math.sin(currentScroll * Math.PI * 1.15) * 0.92;
      sensor.rotation.y = Math.sin(currentScroll * Math.PI * 2) * 0.38;
      targetBox.rotation.y += reduce ? 0 : 0.004;
      targetBox.scale.setScalar(0.94 + Math.sin(Date.now() * 0.003) * 0.05);
      points.rotation.y = currentScroll * 0.35;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    render();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh || o instanceof THREE.Points) {
          o.geometry?.dispose();
        }
      });
    };
  }, []);
  return <canvas ref={canvasRef} className="scrollScene" aria-hidden="true" />;
}

export default function Home() {
  const [lang, setLang] = useState<"en" | "de">("en");
  const t = data[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);
  return (
    <main id="top">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="grid" aria-hidden="true" />
      <ScrollScene />
      <header>
        <a className="brand" href="#top" aria-label="Sohan Saldanha — back to top">
          Sohan Saldanha
        </a>
        <nav aria-label="Main navigation">
          {t.nav.map((x, i) => (
            <a key={x} href={`#${["about", "experience", "work", "contact"][i]}`}>
              {x}
            </a>
          ))}
        </nav>
        <div className="lang" aria-label="Select language">
          <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>
            EN
          </button>
          <button aria-pressed={lang === "de"} onClick={() => setLang("de")}>
            DE
          </button>
        </div>
      </header>
      <section className="hero" id="content">
        <div className="heroCopy">
          <p className="status">
            <i />
            {t.status}
          </p>
          <p className="eyebrow">{t.label}</p>
          <h1>
            {t.headline[0]}
            <br />
            <em>{t.headline[1]}</em>
          </h1>
          <p className="intro">{t.intro}</p>
          <div className="actions">
            <a className="primary" href="#work">
              {t.explore}
              <b>↘</b>
            </a>
            <a href="#contact">
              {t.connect}
              <b>↗</b>
            </a>
          </div>
        </div>
        <div className="sceneAnchor" aria-hidden="true">
          <small>{t.move}</small>
        </div>
        <div className="signal">
          <span>01 PERCEIVE</span>
          <span>02 DECIDE</span>
          <span>03 ACT</span>
        </div>
      </section>
      <section className="section about" id="about">
        <Head tag={t.about[0]} title={t.about[1]} />
        <div className="aboutLayout reveal">
          <p>{t.about[2]}</p>
          <div className="facts">
            {t.facts.map(([a, b], i) => (
              <div key={a} style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}>
                <small>{a}</small>
                <b>{b}</b>
              </div>
            ))}
          </div>
        </div>
        <div className="skills reveal">
          <small>{t.skills}</small>
          <div>
            {t.skillList.map((x, i) => (
              <span key={x} style={{ "--delay": `${i * 45}ms` } as React.CSSProperties}>
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section experience" id="experience">
        <Head tag={t.exp[0]} title={t.exp[1]} />
        <div className="timeline">
          {t.experiences.map(([a, b, c, d], i) => (
            <article
              className="reveal"
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              key={b}
            >
              <small>0{i + 1}</small>
              <span>{a}</span>
              <div>
                <h3>{b}</h3>
                <p>{c}</p>
              </div>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section work" id="work">
        <Head tag={t.work[0]} title={t.work[1]} />
        <div className="projects">
          {t.projects.map(([a, b, c, d, e], i) => (
            <article
              className="reveal"
              style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}
              key={a}
              tabIndex={0}
            >
              <div className="art">
                <small>{a}</small>
                <span className={`shape s${a}`}>
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="projectCopy">
                <small>{c}</small>
                <h3>{b}</h3>
                <p>{d}</p>
                <span>{e}</span>
                <a href="#contact">
                  {t.details}
                  <b>↗</b>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section education">
        <Head tag={t.edu[0]} title={t.edu[1]} />
        <div className="degrees">
          {t.degrees.map(([a, b, c, d], i) => (
            <article
              className="reveal"
              style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
              key={b}
            >
              <small>{a}</small>
              <h3>{b}</h3>
              <p>{c}</p>
              <span>{d}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="contact" id="contact">
        <p className="eyebrow">{t.contact[0]}</p>
        <h2>{t.contact[1]}</h2>
        <p>{t.contact[2]}</p>
        <div>
          <a href="mailto:your.email@example.com">
            {t.mail}
            <b>↗</b>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            {t.linkedin}
            <b>↗</b>
          </a>
        </div>
      </section>
      <footer>
        <p>
          © {new Date().getFullYear()} · {t.footer}
        </p>
        <a href="#top">{t.top} ↑</a>
      </footer>
    </main>
  );
}
function Head({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="head reveal">
      <p>{tag}</p>
      <h2>{title}</h2>
    </div>
  );
}
