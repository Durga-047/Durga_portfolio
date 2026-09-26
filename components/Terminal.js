 "use client";

import { useState } from "react";

const responses = {
  help: ["Available commands:", "about  →  who I am", "skills →  my toolkit", "focus  →  what I am building", "contact →  start a conversation", "clear  →  clear terminal"],
  about: ["Durga Prasad Yadav", "Computer Science undergraduate at KLH University.", "I build with Java, React, Python and automation."],
  skills: ["Java · Python · React · JavaScript", "HTML/CSS · REST APIs · Backend · RPA"],
  focus: ["Current focus:", "Full-stack development + hackathon problem solving.", "Build → Learn → Improve → Ship"],
  contact: ["Email:", "durgaprasyadav9949@gmail.com"],
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: "out", lines: ["Welcome to durga.exe", "Type 'help' to explore."] }
  ]);
  const [value, setValue] = useState("");

  function run(command) {
    const cmd = command.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([]);
      setValue("");
      return;
    }
    const lines = responses[cmd] || [`command not found: ${cmd}`, "Try 'help'."];
    setHistory(h => [...h, { type: "cmd", lines: [`$ ${cmd}`] }, { type: "out", lines }]);
    setValue("");
  }

  return (
    <div className="terminal">
      <div className="terminal-top">
        <div className="terminal-dots"><i/><i/><i/></div>
        <span>durga@portfolio ~ terminal</span>
        <span className="live">● LIVE</span>
      </div>
      <div className="terminal-body">
        {history.map((item, i) => (
          <div className={item.type} key={i}>{item.lines.map((line,j)=><div key={j}>{line}</div>)}</div>
        ))}
        <div className="terminal-input">
          <span>$</span>
          <input
            value={value}
            onChange={e=>setValue(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter")run(value)}}
            placeholder="type a command..."
            aria-label="Terminal command"
          />
        </div>
      </div>
    </div>
  );
}