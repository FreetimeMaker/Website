import type { Metadata } from "next";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Freetime Maker — Web and Android developer building open-source applications. Explore selected projects, technologies, and ways to get in touch.",
  alternates: { canonical: "/" },
};

const projects = [
  {
    name: "GeoWeather",
    category: "Weather · Android",
    description:
      "A weather application with location search and weather information",
    image: "/images/geoweather.png",
    screenshot: "/images/geoweatheraction1.png",
    href: "https://github.com/FreetimeMaker/GeoWeather",
    color: "mint",
  },
  {
    name: "SuperSMP Companion",
    category: "Community · Android",
    description:
      "An Android companion for the SuperSMP community, with shop discovery and an interactive community map.",
    image: "/images/ssmpc.png",
    screenshot: "/images/ssmpcaction3.png",
    href: "https://github.com/FreetimeMaker/SuperSMP-Companion-App",
    color: "peach",
  },
  {
    name: "Luma Store",
    category: "App Store · Android",
    description:
      "An Android app store for browsing supported sources, viewing app details, and managing applications in one place.",
    monogram: "L",
    href: "https://github.com/FreetimeMaker/Luma-Store-Android",
    color: "lavender",
  },
  {
    name: "Dualist",
    category: "Productivity · Android",
    description:
      "A task management application for organizing everyday work and keeping track of what needs to get done.",
    monogram: "D",
    href: "https://github.com/FreetimeMaker/Dualist",
    color: "blue",
  },
];

const technologies = [
  ["Kotlin", "kt"],
  ["Java", "java"],
  ["C#", "cs"],
  ["HTML", "html"],
  ["CSS", "css"],
  ["Git", "git"],
  ["GitHub", "gh"],
  ["GitLab", "gitlab"],
  ["Linux", "linux"],
];

const links = [
  [
    "Luma Store",
    "Discover and submit applications",
    "https://luma.free-time.me",
  ],
  [
    "F-Droid Repository",
    "Download Android applications",
    "https://fdroid.free-time.me",
  ],
  ["Blog", "Development notes and updates", "https://blog.free-time.me"],
  [
    "Documentation",
    "Guides and project resources",
    "https://docs.free-time.me",
  ],
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Freetime Maker",
            url: "https://free-time.me",
            jobTitle: "Web and Android Developer",
            sameAs: ["https://github.com/FreetimeMaker"],
          }),
        }}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header shell">
        <a className="wordmark" href="#" aria-label="Freetime Maker home">
          <span className="brand-icon">
            fm<span>.</span>
          </span>{" "}
          <span>Freetime Maker</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">
            Contact <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <ThemeToggle />
      </header>
      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> WEB, ANDROID & OPEN SOURCE
            </p>
            <h1 id="hero-title">
              Building apps.
              <br />
              Sharing code.
              <br />
              <span>Always learning.</span>
            </h1>
            <p className="hero-description">
              I’m Freetime Maker, a web and Android developer creating practical
              applications and sharing the work through open source.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View selected projects <span aria-hidden="true">↘</span>
              </a>
              <a
                className="text-link"
                href="https://github.com/FreetimeMaker"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <aside className="developer-panel" aria-label="Development focus">
            <div className="panel-header">
              <span className="panel-mark" aria-hidden="true">
                fm.
              </span>
              <span>INDEPENDENT DEVELOPER</span>
            </div>
            <p className="panel-title">
              Ideas into
              <br />
              working software.
            </p>
            <dl className="focus-list">
              <div>
                <dt>01 / Android</dt>
                <dd>Applications for everyday use</dd>
              </div>
              <div>
                <dt>02 / Web</dt>
                <dd>Experiences built for the browser</dd>
              </div>
              <div>
                <dt>03 / Open source</dt>
                <dd>Code you can explore and build on</dd>
              </div>
            </dl>
            <a
              className="panel-link"
              href="https://github.com/FreetimeMaker"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/FreetimeMaker <span aria-hidden="true">↗</span>
            </a>
          </aside>
          <div className="hero-bottom">
            <span>Independent projects. Open-source code.</span>
            <a href="#projects">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section
          className="section shell"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED PROJECTS</p>
              <h2 id="projects-title">
                Applications with
                <br />a practical purpose.
              </h2>
            </div>
            <p>
              A selection of Android apps
              <br />
              and open-source developer tools.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <a
                className={`project-card ${project.color} ${index < 2 ? "featured" : ""}`}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
              >
                <div className="project-visual">
                  <span className="project-number">0{index + 1}</span>
                  {project.screenshot ? (
                    <>
                      <div className="project-app-icon">
                        <Image
                          src={project.image!}
                          alt=""
                          width={88}
                          height={88}
                        />
                      </div>
                      <Image
                        className="project-screen"
                        src={project.screenshot}
                        alt={`${project.name} application preview`}
                        width={240}
                        height={480}
                      />
                    </>
                  ) : project.image ? (
                    <Image
                      className="standalone-icon"
                      src={project.image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  ) : (
                    <span className="project-monogram">
                      {project.monogram}
                      <span>.</span>
                    </span>
                  )}
                  <span className="project-open" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div className="project-info">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span className="project-source">
                    View source on GitHub <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="shell about-grid">
            <div>
              <p className="eyebrow">02 / ABOUT</p>
              <h2>
                Curious by nature.
                <br />
                Developer by practice<span className="accent">.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I’m Freetime Maker, an independent developer focused on web and
                Android applications. I enjoy turning an initial idea into
                software that solves a practical problem.
              </p>
              <p>
                My personal projects are a space to explore technologies,
                develop my skills, and share what I learn. Open source makes
                that process transparent and gives others the opportunity to
                contribute.
              </p>
              <a
                className="text-link"
                href="https://github.com/FreetimeMaker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore my GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="toolbox">
              <p className="eyebrow">LANGUAGES & TOOLS</p>
              <div className="technology-list">
                {technologies.map(([name, image]) => (
                  <div className="technology" key={name}>
                    <Image
                      src={`/images/${image}.png`}
                      alt=""
                      width={26}
                      height={26}
                    />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section shell" aria-labelledby="links-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / RESOURCES</p>
              <h2 id="links-title">
                Beyond the
                <br />
                source code.
              </h2>
            </div>
          </div>
          <div className="link-grid">
            {links.map(([name, description, href]) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={name}
              >
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>
        <section className="contact-section shell" id="contact">
          <p className="eyebrow">04 / GET IN TOUCH</p>
          <h2>
            Have a project in mind?
            <br />
            <span>Let’s talk.</span>
          </h2>
          <a className="button primary" href="mailto:FreetimeMaker@proton.me">
            Send me an email <span aria-hidden="true">↗</span>
          </a>
          <p>
            You can also find me on{" "}
            <a
              href="https://github.com/FreetimeMaker"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </main>
      <footer className="site-footer shell">
        <a className="wordmark" href="#">
          Freetime Maker<span className="accent">.</span>
        </a>
        <span>
          © {new Date().getFullYear()} · Freetime Maker. Licensed under the GPL-v3.0 · Built with purpose.
        </span>
        <a
          href="https://donation.free-time.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support my work ↗
        </a>
      </footer>
    </>
  );
}
