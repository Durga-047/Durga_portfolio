import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Download, Terminal as TerminalIcon, Sparkles, Code2, Server, Bot, GraduationCap, Award } from "lucide-react";
import Terminal from "../components/Terminal";
import Projects from "../components/Projects";

const skills = [
  ["Java","PROGRAMMING",Code2],["Python","PROGRAMMING",Code2],["React","FRONTEND",Sparkles],
  ["JavaScript","FRONTEND",Code2],["HTML / CSS","FRONTEND",Code2],["REST APIs","BACKEND",Server],
  ["Backend Development","BACKEND",Server],["Automation Anywhere","RPA",Bot]
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#home" className="brand"><span>DP</span><strong>durga<span>.dev</span></strong></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Stack</a><a href="#journey">Journey</a>
        </div>
        <a href="#contact" className="nav-button">CONTACT <ArrowUpRight size={14}/></a>
      </nav>

      <section id="home" className="hero-v2">
        <div className="hero-noise"/>
        <div className="hero-left">
          <div className="status"><span/> AVAILABLE FOR OPPORTUNITIES</div>
          <div className="hero-kicker">COMPUTER SCIENCE · KLH UNIVERSITY</div>
          <h1>Code that<br/><em>means</em> something<span>.</span></h1>
          <p>I&apos;m <b>Durga Prasad Yadav</b> — a developer exploring full-stack development, automation and practical problem solving.</p>
          <div className="hero-buttons">
            <a className="neon-btn" href="#projects">VIEW PROJECTS <ArrowUpRight size={17}/></a>
            <a className="ghost-btn" href="/resume.pdf" download><Download size={16}/> RESUME</a>
          </div>
          <div className="hero-scroll"><ArrowDown size={15}/> SCROLL TO EXPLORE</div>
        </div>
        <div className="hero-right">
          <Terminal/>
          <div className="orbit orbit-a">REACT</div>
          <div className="orbit orbit-b">JAVA</div>
          <div className="orbit orbit-c">PYTHON</div>
        </div>
      </section>

      <section id="about" className="dashboard section-dark">
        <div className="section-title"><span>01</span><h2>Developer dashboard</h2></div>
        <div className="dashboard-grid">
          <div className="dash-intro">
            <span className="tiny">PROFILE STATUS</span>
            <h3>Learning fast.<br/><span>Building constantly.</span></h3>
            <p>My goal is to combine solid programming fundamentals with modern web development and automation to create useful products.</p>
            <div className="mini-status"><i/> OPEN TO COLLABORATION</div>
          </div>
          <div className="metric"><strong>8.36</strong><span>CGPA / 2ND YEAR</span><small>KLH University</small></div>
          <div className="metric"><strong>2028</strong><span>EXPECTED GRADUATION</span><small>Bachelor&apos;s Degree</small></div>
          <div className="metric"><strong>02</strong><span>CERTIFICATIONS</span><small>PCAP · RPA</small></div>
          <div className="metric accent"><strong>∞</strong><span>THINGS TO BUILD</span><small>Always learning</small></div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-title"><span>02</span><h2>Selected work</h2><p>Click a card to open its case-study structure.</p></div>
        <Projects/>
      </section>

      <section id="skills" className="section stack-section">
        <div className="section-title"><span>03</span><h2>My stack</h2><p>A growing toolkit across software, web and automation.</p></div>
        <div className="stack-grid">
          {skills.map(([name,type,Icon],i)=>(
            <div className="stack-card" key={name}>
              <span className="stack-num">0{i+1}</span><Icon size={22}/>
              <h3>{name}</h3><span className="stack-type">{type}</span>
              <div className="stack-line"><i style={{width:`${65+(i%4)*8}%`}}/></div>
            </div>
          ))}
        </div>
      </section>

      <section id="journey" className="section journey">
        <div className="section-title"><span>04</span><h2>Journey</h2></div>
        <div className="journey-grid">
          <article><span className="year">2024 — 2028</span><GraduationCap/><div><small>CURRENT</small><h3>Bachelor&apos;s Degree</h3><b>KLH University</b><p>Computer Science undergraduate · 8.36 CGPA through 2nd year.</p></div></article>
          <article><span className="year">2021 — 2023</span><GraduationCap/><div><h3>Intermediate — MPC</h3><b>Sri Gayathri Junior College</b><p>Aggregate: 84.6%</p></div></article>
          <article><span className="year">CERTIFICATION</span><Award/><div><small>PYTHON</small><h3>PCAP</h3><b>Certified Associate in Python Programming</b></div></article>
          <article><span className="year">CERTIFICATION</span><Award/><div><small>RPA</small><h3>Automation Anywhere</h3><b>Certified Advanced RPA Professional</b></div></article>
        </div>
      </section>

      <section className="easter">
        <div><span>CURIOUS?</span><h2>There&apos;s more<br/>under the surface.</h2><p>Try the terminal. Type <b>help</b>. Or just start exploring.</p></div>
        <div className="easter-code"><span>01</span><span>02</span><span>03</span><strong>BUILD<br/>LEARN<br/>SHIP</strong></div>
      </section>

      <section id="contact" className="contact-v2">
        <div className="contact-grid">
          <div><span className="tiny">05 / CONTACT</span><h2>Let&apos;s make<br/><em>something.</em></h2></div>
          <div className="contact-right">
            <p>Got a project, hackathon idea, collaboration, or opportunity? Let&apos;s talk.</p>
            <a className="big-email" href="mailto:durgaprasyadav9949@gmail.com">durgaprasyadav9949@gmail.com <ArrowUpRight/></a>
            <div className="social-row"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GITHUB</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LINKEDIN</a><a href="mailto:durgaprasyadav9949@gmail.com"><Mail size={17}/> EMAIL</a></div>
          </div>
        </div>
      </section>
      <footer><span>© 2026 DURGA PRASAD YADAV</span><span>NEXT.JS / REACT / CODE</span><a href="#home">TOP ↑</a></footer>
    </main>
  );
}