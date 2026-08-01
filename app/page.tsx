"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const data = {
  en: {
    nav: ["Experience", "Education", "Contact"],
    status: "Master Student at FAU",
    latest: "Latest:",
    label: ["Started my Bachelor Thesis with Bosch.", "Updating my website."],
    headline: ["Hi, I’m", "Sohan Saldanha"],
    intro:
      "I’m interested in research and development in robotics, computer vision, and vision-language-action (VLA) systems—building intelligent machines that can perceive, understand, and act.",
    explore: "View experience",
    connect: "Download CV",
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
    exp: ["Professional Experience"],
    experienceLabel: "Experience",
    pageLabel: "Page",
    detailsLabel: "Details",
    experiences: [
      {
        year: "2025",
        roles: [
          {
            title: "Research Assistant",
            page: true,
            date: "May 2025 – July 2025",
            organization: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
            location: "Erlangen, Germany",
            bullets: [
              "Engineered scikit-learn pipelines to predict brain-region volumes from facial features, benchmarking linear, ridge, decision-tree, SVM and SGD models.",
              "Constructed a PCA-based statistical shape model for 3D facial feature extraction and dimensionality reduction.",
              "Performed feature selection, correlation analysis, outlier detection, cross-validation and hyperparameter optimization.",
            ],
          },
          {
            title: "Infant Vision Simulation",
            page: true,
            date: "Oct 2024 – Jan 2025",
            organization: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
            location: "Erlangen, Germany",
            bullets: [
              "Simulated age-dependent visual perception and trained VGG and ResNet18 architectures to study visual development.",
              "Applied curriculum learning to TinyImageNet and egocentric datasets to emulate progressive infant visual maturation.",
              "Assessed layer freezing and staged learning strategies for model accuracy and representation quality.",
            ],
          },
        ],
      },
      {
        year: "2024",
        roles: [
          {
            title: "Product Manager — Software Development & Automation",
            date: "Dec 2023 – Apr 2024",
            organization: "Talents2Germany GmbH",
            location: "Frankfurt am Main, Germany",
            bullets: [
              "Architected scalable Python RPA workflows for web scraping, validation, transformation and database integration.",
              "Developed Laravel backend APIs connecting frontend applications, services and databases.",
              "Enhanced an internal LMS with Next.js and maintained documentation, deployment procedures and workflows.",
            ],
          },
        ],
      },
      {
        year: "2023",
        roles: [
          {
            title: "Programming Tutor — C++",
            date: "Apr 2023 – July 2023",
            organization: "Technical University of Applied Sciences Würzburg-Schweinfurt",
            location: "Schweinfurt, Germany",
            bullets: [
              "Mentored students in C++, data structures, algorithms and operating-system fundamentals.",
              "Designed practical coding exercises, debugging workshops and problem-solving sessions.",
              "Guided students toward efficient, maintainable solutions and stronger software-engineering skills.",
            ],
          },
          {
            title: "Bachelor Thesis — LiDAR-Based Localization Evaluation",
            page: true,
            date: "Sep 2022 – Mar 2023",
            organization: "Technical University of Applied Sciences Würzburg-Schweinfurt",
            location: "Schweinfurt, Germany",
            bullets: [
              "Investigated and benchmarked LiDAR localization algorithms in ROS for autonomous navigation.",
              "Built data-acquisition pipelines with OptiTrack motion capture and Unity simulation environments.",
              "Analyzed differences between simulated and real sensor data through reproducible experimentation.",
            ],
          },
        ],
      },
      {
        year: "2022",
        roles: [
          {
            title: "Software Developer Intern",
            date: "Apr 2022 – Sep 2022",
            organization: "biz4d — Mentoring Club",
            location: "Frankfurt am Main, Germany",
            bullets: [
              "Led five interns in developing a matching algorithm to improve recommendation quality and efficiency.",
              "Containerized SuiteCRM and Laravel applications with Docker and administered Linux servers.",
              "Established Git and GitHub practices for branching, reviews and collaborative debugging.",
            ],
          },
          {
            title: "Lab Assistant — Automated Systems and HMI",
            date: "Oct 2021 – Mar 2022",
            organization: "Technical University of Applied Sciences Würzburg-Schweinfurt",
            location: "Schweinfurt, Germany",
            bullets: [
              "Supported more than 45 students in Node-RED, MQTT, microcontrollers and embedded systems.",
              "Built and tested experimental HMI and automation setups for practical learning.",
              "Helped the class achieve a 100% pass rate in written and practical examinations.",
            ],
          },
        ],
      },
      {
        year: "2021",
        roles: [
          {
            title: "Mechatronic System for Part Classification",
            date: "Apr 2021 – Aug 2021",
            organization: "Kindermann GmbH",
            location: "Würzburg, Germany",
            bullets: [
              "Delivered an end-to-end mechatronic system using computer vision and Node-RED for real-time part classification.",
              "Trained ResNet and YOLO models that achieved 95% classification accuracy on production data.",
              "Deployed an image acquisition, preprocessing and inference pipeline robust to changing lighting conditions.",
            ],
          },
        ],
      },
    ],
    edu: "Education",
    specializationLabel: "Specialization",
    degrees: [
      {
        degree: "M.Sc. in Autonomy Technology",
        organization: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
        location: "Erlangen, Germany",
        specialization: ["Human-System Interfaces", "Sensor and Perception"],
        logo: "/logos/fau_erlangen_nrnberg_logo.jpeg",
      },
      {
        degree: "B.Eng. in Mechatronics",
        organization: "Technical University of Applied Sciences Würzburg-Schweinfurt (THWS)",
        location: "Schweinfurt, Germany",
        specialization: [
          "Automated Systems and Human-Machine Interaction",
          "Automation and Robotics",
        ],
        logo: "/logos/thws_logo.jpeg",
      },
    ],
    contact: [
      "Contact",
      "Let’s build something that moves.",
      "I’m open to engineering roles, ambitious projects and research collaborations in robotics, autonomy and software.",
    ],
    mail: "Send an email",
    linkedin: "Connect on LinkedIn",
    github: "View GitHub",
    footer: "Designed & engineered by Sohan Saldanha",
    top: "Back to top",
  },
  de: {
    nav: ["Erfahrung", "Ausbildung", "Kontakt"],
    status: "Masterstudent an der FAU",
    latest: "Aktuell:",
    label: ["Ich habe meine Bachelorarbeit bei Bosch begonnen.", "Ich aktualisiere meine Website."],
    headline: ["Hi, ich bin", "Sohan Saldanha"],
    intro:
      "Ich interessiere mich für Forschung und Entwicklung in den Bereichen Robotik, Computer Vision und Vision-Language-Action-Systeme (VLA) — mit dem Ziel, intelligente Maschinen zu entwickeln, die wahrnehmen, verstehen und handeln können.",
    explore: "Berufserfahrung ansehen",
    connect: "Lebenslauf herunterladen",
    move: "Scrollen zum Entdecken",
    about: [
      "01 — Profil",
      "An der Grenze zwischen Bits und Atomen.",
      "Ich bin Mechatronikingenieur und Masterstudent im Studiengang Autonomy Technologies an der FAU. Meine Arbeit reicht von Sensoren und Algorithmen bis hin zu Benutzeroberflächen und Deployment — denn die besten autonomen Produkte entstehen als ganzheitliche Systeme.",
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
    exp: ["Berufserfahrung"],
    experienceLabel: "Erfahrung",
    pageLabel: "Seite",
    detailsLabel: "Details",
    experiences: [
      {
        year: "2025",
        roles: [
          {
            title: "Wissenschaftliche Hilfskraft",
            page: true,
            date: "Mai 2025 – Juli 2025",
            organization: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
            location: "Erlangen, Deutschland",
            bullets: [
              "Entwicklung von scikit-learn-Pipelines zur Vorhersage des Volumens von Hirnregionen anhand von Gesichtsmerkmalen sowie Vergleich von linearer Regression, Ridge-Regression, Entscheidungsbäumen, SVM- und SGD-Modellen.",
              "Aufbau eines PCA-basierten statistischen Formmodells zur Extraktion von 3D-Gesichtsmerkmalen und Dimensionsreduktion.",
              "Durchführung von Merkmalsauswahl, Korrelationsanalysen, Ausreißererkennung, Kreuzvalidierung und Hyperparameteroptimierung.",
            ],
          },
          {
            title: "Simulation des kindlichen Sehens",
            page: true,
            date: "Okt. 2024 – Jan. 2025",
            organization: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
            location: "Erlangen, Deutschland",
            bullets: [
              "Simulation altersabhängiger visueller Wahrnehmung und Training von VGG- und ResNet18-Architekturen zur Untersuchung der visuellen Entwicklung.",
              "Anwendung von Curriculum Learning auf TinyImageNet und egozentrische Datensätze, um die fortschreitende visuelle Reifung von Kleinkindern nachzubilden.",
              "Bewertung von Layer Freezing und stufenweisen Lernstrategien hinsichtlich Modellgenauigkeit und Qualität der Merkmalsrepräsentation.",
            ],
          },
        ],
      },
      {
        year: "2024",
        roles: [
          {
            title: "Produktmanager — Softwareentwicklung & Automatisierung",
            date: "Dez. 2023 – Apr. 2024",
            organization: "Talents2Germany GmbH",
            location: "Frankfurt am Main, Deutschland",
            bullets: [
              "Konzeption skalierbarer Python-RPA-Workflows für Web Scraping, Validierung, Transformation und Datenbankintegration.",
              "Entwicklung von Laravel-Backend-APIs zur Verbindung von Frontend-Anwendungen, Diensten und Datenbanken.",
              "Weiterentwicklung eines internen LMS mit Next.js sowie Pflege von Dokumentation, Deployment-Prozessen und Workflows.",
            ],
          },
        ],
      },
      {
        year: "2023",
        roles: [
          {
            title: "Programmiertutor — C++",
            date: "Apr. 2023 – Juli 2023",
            organization: "Technische Hochschule Würzburg-Schweinfurt",
            location: "Schweinfurt, Deutschland",
            bullets: [
              "Betreuung von Studierenden in C++, Datenstrukturen, Algorithmen und Grundlagen von Betriebssystemen.",
              "Konzeption praktischer Programmierübungen, Debugging-Workshops und Problemlösungseinheiten.",
              "Anleitung zur Entwicklung effizienter, wartbarer Lösungen und zur Vertiefung softwaretechnischer Kompetenzen.",
            ],
          },
          {
            title: "Bachelorarbeit — Evaluation LiDAR-basierter Lokalisierung",
            page: true,
            date: "Sep. 2022 – März 2023",
            organization: "Technische Hochschule Würzburg-Schweinfurt",
            location: "Schweinfurt, Deutschland",
            bullets: [
              "Untersuchung und Benchmarking LiDAR-basierter Lokalisierungsalgorithmen in ROS für die autonome Navigation.",
              "Aufbau von Datenerfassungspipelines mit OptiTrack Motion Capture und Unity-Simulationsumgebungen.",
              "Analyse von Unterschieden zwischen simulierten und realen Sensordaten durch reproduzierbare Experimente.",
            ],
          },
        ],
      },
      {
        year: "2022",
        roles: [
          {
            title: "Praktikant Softwareentwicklung",
            date: "Apr. 2022 – Sep. 2022",
            organization: "biz4d — Mentoring Club",
            location: "Frankfurt am Main, Deutschland",
            bullets: [
              "Leitung eines fünfköpfigen Praktikantenteams bei der Entwicklung eines Matching-Algorithmus zur Verbesserung von Empfehlungsqualität und Effizienz.",
              "Containerisierung von SuiteCRM- und Laravel-Anwendungen mit Docker sowie Administration von Linux-Servern.",
              "Einführung von Git- und GitHub-Prozessen für Branching, Code Reviews und gemeinsames Debugging.",
            ],
          },
          {
            title: "Laborassistent — Automatisierte Systeme und HMI",
            date: "Okt. 2021 – März 2022",
            organization: "Technische Hochschule Würzburg-Schweinfurt",
            location: "Schweinfurt, Deutschland",
            bullets: [
              "Betreuung von mehr als 45 Studierenden in Node-RED, MQTT, Mikrocontrollern und eingebetteten Systemen.",
              "Aufbau und Test experimenteller HMI- und Automatisierungsaufbauten für die praktische Lehre.",
              "Beitrag zu einer Bestehensquote von 100 % in schriftlichen und praktischen Prüfungen.",
            ],
          },
        ],
      },
      {
        year: "2021",
        roles: [
          {
            title: "Mechatronisches System zur Teileklassifikation",
            date: "Apr. 2021 – Aug. 2021",
            organization: "Kindermann GmbH",
            location: "Würzburg, Deutschland",
            bullets: [
              "Entwicklung eines durchgängigen mechatronischen Systems mit Computer Vision und Node-RED zur Echtzeitklassifikation von Bauteilen.",
              "Training von ResNet- und YOLO-Modellen mit einer Klassifikationsgenauigkeit von 95 % auf Produktionsdaten.",
              "Bereitstellung einer Pipeline für Bildaufnahme, Vorverarbeitung und Inferenz, die gegenüber wechselnden Lichtverhältnissen robust ist.",
            ],
          },
        ],
      },
    ],
    edu: "Ausbildung",
    specializationLabel: "Spezialisierung",
    degrees: [
      {
        degree: "M.Sc. Autonomy Technology",
        organization: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
        location: "Erlangen, Deutschland",
        specialization: ["Mensch-System-Schnittstellen", "Sensorik und Wahrnehmung"],
        logo: "/logos/fau_erlangen_nrnberg_logo.jpeg",
      },
      {
        degree: "B.Eng. Mechatronik",
        organization: "Technische Hochschule Würzburg-Schweinfurt (THWS)",
        location: "Schweinfurt, Deutschland",
        specialization: [
          "Automatisierte Systeme und Mensch-Maschine-Interaktion",
          "Automatisierung und Robotik",
        ],
        logo: "/logos/thws_logo.jpeg",
      },
    ],
    contact: [
      "Kontakt",
      "Lass uns etwas entwickeln, das sich bewegt.",
      "Ich bin offen für Engineering-Positionen, ambitionierte Projekte und Forschungskooperationen in den Bereichen Robotik, Autonomie und Software.",
    ],
    mail: "E-Mail senden",
    linkedin: "Auf LinkedIn verbinden",
    github: "GitHub ansehen",
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
  const [latestIndex, setLatestIndex] = useState(0);
  const t = data[lang];
  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    if (savedLanguage === "en" || savedLanguage === "de") {
      setLang(savedLanguage);
      return;
    }

    const prefersGerman = window.navigator.languages.some((language) =>
      language.toLowerCase().startsWith("de"),
    );
    setLang(prefersGerman ? "de" : "en");
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  useEffect(() => {
    setLatestIndex(0);
    const timer = window.setInterval(() => {
      setLatestIndex((current) => (current + 1) % data[lang].label.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [lang]);
  const selectLanguage = (language: "en" | "de") => {
    window.localStorage.setItem("portfolio-language", language);
    setLang(language);
  };
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
      <a className="skip" href="#about">
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
            <a key={x} href={`#${["experience", "education", "contact"][i]}`}>
              {x}
            </a>
          ))}
        </nav>
        <div className="lang" aria-label="Select language">
          <button aria-pressed={lang === "en"} onClick={() => selectLanguage("en")}>
            EN
          </button>
          <button aria-pressed={lang === "de"} onClick={() => selectLanguage("de")}>
            DE
          </button>
        </div>
      </header>
      <section className="hero" id="about">
        <div className="heroCopy">
          <p className="status">
            <i />
            {t.status}
          </p>
          <p className="latestUpdate">
            <strong>{t.latest}</strong>
            <span key={`${lang}-${latestIndex}`}>{t.label[latestIndex]}</span>
          </p>
          <div className="heroIdentity">
            <h1>
              {t.headline[0]}
              <br />
              <em>{t.headline[1]}</em>
            </h1>
            <div className="heroProfile">
              <div className="profileFrame">
                <Image
                  src="/images/Bearbeitet.jpeg"
                  alt="Portrait of Sohan Saldanha"
                  fill
                  priority
                  sizes="(max-width: 600px) 42vw, 20vw"
                />
              </div>
              <div className="profileLinks" aria-label="Sohan Saldanha's contact links">
                <a href="https://www.linkedin.com/in/sohanjs/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/sohanjs111" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="mailto:sohan.j.saldanha@fau.de">Email</a>
              </div>
            </div>
          </div>
          <p className="intro">{t.intro}</p>
          <p className="intro">{t.about[2]}</p>
          <div className="actions">
            <a className="primary" href="#experience">
              {t.explore}
              <b>↘</b>
            </a>
            <a href="/CV/Sohan___CV.pdf" download>
              {t.connect}
              <b>↓</b>
            </a>
          </div>
        </div>
        <div className="signal">
          <span>01 PERCEIVE</span>
          <span>02 DECIDE</span>
          <span>03 ACT</span>
        </div>
      </section>
      <section className="section experience" id="experience">
        <h2 className="sectionTitle reveal">{t.exp[0]}</h2>
        <div className="experienceYears">
          {t.experiences.map((group, groupIndex) => (
            <section
              className="experienceYear"
              key={group.year}
              aria-labelledby={`year-${group.year}`}
            >
              <h3 className="yearMarker" id={`year-${group.year}`}>
                <span
                  className="reveal"
                  style={{ "--delay": `${groupIndex * 55}ms` } as React.CSSProperties}
                >
                  {group.year}
                </span>
              </h3>
              <div className="yearRoles">
                {group.roles.map((role, roleIndex) => (
                  <details
                    className="experienceCard reveal"
                    style={
                      {
                        "--delay": `${groupIndex * 55 + roleIndex * 80}ms`,
                      } as React.CSSProperties
                    }
                    key={`${role.title}-${role.date}`}
                  >
                    <summary>
                      <div className="roleIdentity">
                        <span className="entryType">{t.experienceLabel}</span>
                        <h4>{role.title}</h4>
                        <p className="organization">{role.organization}</p>
                      </div>
                      <div className="roleSide">
                        <span className="roleLocation">{role.location}</span>
                        <span className="roleActions">
                          {"page" in role && role.page ? (
                            <span className="pageLink" title="Project page link coming soon">
                              {t.pageLabel}
                            </span>
                          ) : null}
                          <span className="toggleLabel">{t.detailsLabel}</span>
                        </span>
                      </div>
                    </summary>
                    <div className="roleDetails">
                      <ul>
                        {role.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="section education" id="education">
        <h2 className="sectionTitle reveal">{t.edu}</h2>
        <div className="educationList">
          {t.degrees.map((degree, i) => (
            <details
              className="educationCard reveal"
              style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}
              key={degree.degree}
            >
              <summary>
                <Image
                  className="universityLogo"
                  src={degree.logo}
                  alt={`${degree.organization} logo`}
                  width={76}
                  height={76}
                />
                <div className="educationIdentity">
                  <h3>{degree.degree}</h3>
                  <p>{degree.organization}</p>
                </div>
                <div className="educationSide">
                  <span>{degree.location}</span>
                  <span className="specializationLabel">{t.specializationLabel}</span>
                </div>
              </summary>
              <div className="specializationContent">
                <small>{t.specializationLabel}</small>
                <ul>
                  {degree.specialization.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="contact" id="contact">
        <p className="eyebrow">{t.contact[0]}</p>
        <h2>{t.contact[1]}</h2>
        <p>{t.contact[2]}</p>
        <div className="contactLinks">
          <a href="mailto:sohan.j.saldanha@fau.de">
            {t.mail}
            <b>↗</b>
          </a>
          <a href="https://www.linkedin.com/in/sohanjs/" target="_blank" rel="noreferrer">
            {t.linkedin}
            <b>↗</b>
          </a>
          <a href="https://github.com/sohanjs111" target="_blank" rel="noreferrer">
            {t.github}
            <b>↗</b>
          </a>
        </div>
      </section>
      <footer>
        <p>
          © {new Date().getFullYear()} · {t.footer}
        </p>
      </footer>
      <a className="backToTop" href="#top" aria-label={t.top}>
        {t.top} <b>↑</b>
      </a>
    </main>
  );
}
