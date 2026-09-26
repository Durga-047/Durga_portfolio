 "use client";

import { useState } from "react";
import { ArrowUpRight, X, Sparkles, Code2, Layers3 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Microsoft Hackathon",
    category: "HACKATHON / PRODUCT",
    description: "A space for your Microsoft hackathon solution, impact and technical contribution.",
    tech: ["React", "Java", "Python"],
    details: ["Problem statement", "Your solution", "Architecture & APIs", "Your individual contribution", "Demo / GitHub link"]
  },
  {
    number: "02",
    title: "Paws & Tails",
    category: "WEB / ANIMAL SHELTER",
    description: "A responsive animal shelter website that helps visitors discover adoptable pets, learn about the shelter, and get in touch.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    details: ["Pet adoption showcase", "Responsive shelter website", "Interactive pet listing", "About and mission section", "Contact form", "Responsive navigation"]
  },
  {
    number: "03",
    title: "Automation Project",
    category: "RPA / AUTOMATION",
    description: "Highlight an Automation Anywhere workflow that removes repetitive work or improves a process.",
    tech: ["Automation Anywhere", "RPA"],
    details: ["Manual process", "Automation flow", "Tools used", "Time saved", "Outcome"]
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="project-grid">
        {projects.map(p => (
          <button className="project-card" key={p.number} onClick={()=>setSelected(p)}>
            <div className="project-number">{p.number}</div>
            <div className="project-icon"><Layers3 size={21}/></div>
            <div className="project-info">
              <span>{p.category}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
            <div className="project-tech">{p.tech.map(t=><b key={t}>{t}</b>)}</div>
            <ArrowUpRight className="project-open" size={21}/>
          </button>
        ))}
      </div>
      {selected && (
        <div className="modal-backdrop" onClick={()=>setSelected(null)}>
          <div className="project-modal" onClick={e=>e.stopPropagation()}>
            <button className="modal-close" onClick={()=>setSelected(null)}><X size={20}/></button>
            <span className="modal-label">{selected.category}</span>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
            <h4>CASE STUDY CHECKLIST</h4>
            <div className="case-list">{selected.details.map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div>
            <div className="modal-tags">{selected.tech.map(t=><span key={t}><Code2 size={13}/>{t}</span>)}</div>
          </div>
        </div>
      )}
    </>
  );
}