const input = document.getElementById("command-input");
const output = document.getElementById("output");

const commands = {
  help: "Available commands: help, about, projects, contact, clear",
  about: "I am a web developer who loves retro terminals.",
  projects: "Project 1, Project 2, Project 3.",
  contact: "Email: example@example.com",
  clear: ""
};

    input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    const div = document.createElement("div");
    div.textContent = `$ ${cmd}`;
    output.appendChild(div);

    if (cmd === "clear") {
      output.innerHTML = "";
    } else if (commands[cmd]) {
      const res = document.createElement("div");
      res.textContent = commands[cmd];
      output.appendChild(res);
    } else {
      const res = document.createElement("div");
      res.textContent = "Command not found. Type 'help'.";
      output.appendChild(res);
    }
    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});