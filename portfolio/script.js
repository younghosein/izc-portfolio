// Cyberpunk CV Website - JavaScript Functionality

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
  initializeMatrixRain();
  initializeTerminal();
  initializeNavigation();
  initializeSkills();
  initializeTimeline();
  initializeAvatar();
  initializeGlitchEffects();
  updateTime();

  // Update time every second
  setInterval(updateTime, 1000);
}

// Matrix Rain Effect
function initializeMatrixRain() {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");

  // Resize canvas to full screen
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const matrixArray = matrix.split("");

  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];

  // Initialize drops
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = `${fontSize}px JetBrains Mono, monospace`;

    for (let i = 0; i < drops.length; i++) {
      if (Math.random() > 0.5) {
        // Reduced density
        const text =
          matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillStyle = i % 2 === 0 ? "#00ff00" : "#00cc00";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += 0.5; // Slower speed
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

// Terminal Functionality
function initializeTerminal() {
  const terminalInput = document.getElementById("terminal-input");
  const terminalContent = document.getElementById("terminal-content");

  let commandHistory = [];
  let historyIndex = -1;
  let isTyping = false;

  const username = "user";
  const hostname = "IZC";
  const currentPath = "main/portfolio";

  // Terminal commands
  const commands = {
    main: {
      description: "Show available commands",
      execute: () => [
        "Available commands:",
        "  main          - Show this help message",
        "  abt         - Display information about me",
        "  skl        - List technical skills",
        "  exp   - Show work experience",
        "  prj      - Display portfolio projects",
        "  cnt       - Show contact information",
        "  cls         - Clear terminal screen",
        "  wi        - Display current user",
        "  pwd           - Print working directory",
        "  ls            - List directory contents",
        "  cat [file]    - Display file contents",
        "  print      - Show system information",
        "  matrix        - Enter the matrix...",
        "",
        "Use TAB for autocompletion, UP/DOWN arrows for command history",
      ],
    },

    abt: {
      description: "Display information about me",
      execute: () => [
        "╔══════════════════════════════════════════════════════════════╗",
        "║                         ABOUT ME                             ║",
        "╠══════════════════════════════════════════════════════════════╣",
        "║ Name: hosein mohamadpor (IZC)                                ║",
        "║ Role: full-stack DEV & algorithm SPZ                         ║",
        "║ Location: The Digital Frontier                               ║",
        "║                                                              ║",
        "║ i'm  25 , INTP & freelance developer, CE graduate from MUST, ║",
        "║ working at the intersection of creativity and coding.        ║",
        "║ leveraging my expertise in various programming languages     ║",
        "║ ​​and frameworks, i create digital experiences that push       ║",
        "║ the boundaries of my capabilities and challenge my mind.     ║",
        "║                                                              ║",
        "║ when i'm not coding, you will find me exploring cutting-edge ║",
        "║ technologies, contributing to open-source projects,          ║",
        "║ gaming, or designing complex algorithms. i believe in        ║",
        "║ the power of technology to turn ideas into reality.          ║",
        "╚══════════════════════════════════════════════════════════════╝",
      ],
    },

    skl: {
      description: "List technical skills",
      execute: () => [
        "TECHNICAL SKILLS MATRIX:",
        "",
        "💻 Programming Languages:",
        "   ▸ Python                 [████████████] Expert",
        "   ▸ JavaScript/TypeScript  [██████████  ] Advanced",
        "   ▸ React/Next.js          [████████████] Expert",
        "   ▸ C#                     [████████████] Expert",
        "   ▸ Node.js                [███████     ] Intermediate",
        "   ▸ Django                 [████████████] Expert",
        "   ▸ Go                     [██████      ] Learning",
        "",
        "🛠 Technologies & Tools:",
        "   ▸ DS                     [███████████ ] Advanced",
        "   ▸ AWS/WEB                [██████████  ] Advanced",
        "   ▸ PostgreSQL/Sqlite      [███████████ ] Advanced",
        "   ▸ WAP                    [████████    ] Intermediate",
        "   ▸ SQL                    [█████████   ] Advanced",
        "   ▸ ML/NN                  [██████████  ] Advanced",
        "",
        "🔒 Security & DevOps:",
        "   ▸ Penetration Testing    [█████████   ] Advanced",
        "   ▸ CI/CD Pipelines        [████████    ] Intermediate",
        "   ▸ Infrastructure as Code [██████      ] Learning",
        "   ▸ Monitoring & Logging   [██████      ] Learning",
      ],
    },

    exp: {
      description: "Show work experience",
      execute: () => [
        "WORK EXPERIENCE TIMELINE:",
        "",
        "┌─ software engineer @ Digital Nexus Labs (2023-Present)",
        "│  ▸ built scalable web applications using react and node.js and django",
        "│  ▸ developed RESTful APIs and graphQL services",
        "│  ▸ optimized database performance reducing query time by 60%",
        "│  ▸ collaborated with cross-functional teams in agile environment",
        "│",
        "├─ junior developer @ startupTech solutions (2021-2023)",
        "│  contributed to backend development using modern frameworks",
        "│  collaborated on code review and software testing processes",
        "│  familiarity with software development life cycle (SDLC) principles and best practices",
        "│  gained experience in designing sales software",
        "│  participated and ranked in DAC and SPOJ competitions",
        "│",
        "└─ B.SC. in computer engineering @ MUST (2020-2025)",
        "   ▸ graduated summa cum laude with a GPA of 19.3",
        "   ▸ specialized in data structures, algorithm design, and neural networks",
        "   ▸ led the university's competitive programming team, achieving a problem-solving success rate of over 85%",
        "   ▸ published research on neural network optimization",
      ],
    },

    prj: {
      description: "Display portfolio projects",
      execute: () => [
        "PORTFOLIO PROJECTS:",
        "",
        "🚀 Project: Photo Processing",
        "   Description: Image processing notebook with OpenCV and Matplotlib examples",
        "   Stack: Python, OpenCV, NumPy, Pandas, Matplotlib, Jupyter Lab",
        "   Status: Active | Users: younghosein | GitHub: ⭐ 1",
        "",
        "🚀 Project: Michka Invoice V2",
        "   Description: Persian RTL invoicing desktop app for an interior decoration business",
        "   Stack: WPF, .NET, Entity Framework Core, SQLite, QuestPDF, CommunityToolkit.Mvvm",
        "   Status: In development | Users: younghosein | GitHub: ⭐ n/a",
        "",
        "🚀 Project: KNN Pancake Prediction Bot",
        "   Description: Desktop app that uses K-Nearest Neighbors to predict rounds of a Pancake-style prediction game on BNB Chain",
        "   Stack: C# (.NET Framework), WinForms, Accord.NET KNN, MSSQL, BNB Chain",
        "   Status: Early stage | Users: younghosein | GitHub: ⭐ 1",
        "",
        "🚀 Project: ASP.NET Core API",
        "   Description: Simple REST API built with ASP.NET Core",
        "   Stack: C#, ASP.NET Core (.NET)",
        "   Status: Early stage | Users: younghosein | GitHub: ⭐ 3",
        "",
        "🚀 Project: Console Chat App",
        "   Description: Console-based chat app with a client and a server, built with Socket.io",
        "   Stack: Python, Socket.io",
        "   Status: Early stage | Users: younghosein | GitHub: ⭐ 1",
      ],
    },

    cnt: {
      description: "Show contact information",
      execute: () => [
        "📡 CONTACT MATRIX:",
        "",
        "┌─────────────────────────────────────────────────────────┐",
        "│                    SECURE CHANNELS                      │",
        "├─────────────────────────────────────────────────────────┤",
        "│ 📧 Email:     youngsinatragi@gmail.com                 │",
        "│ 🐙 GitHub:    github.com/younghosein                   │",
        "│ 💼 LinkedIn:  linkedin.com/in/younghosein              │",
        "│ 📱 Signal:    +98-9929846114                           │",
        "└─────────────────────────────────────────────────────────┘",
        "",
        "🔐 PGP Key Fingerprint: 4A1B 2C3D 7E5F 6789 ABCD UF01 2345 6789",
        "",
        "⚠️  All communications are end-to-end encrypted ⚠️",
      ],
    },

    cls: {
      description: "Clear terminal screen",
      execute: () => [],
    },

    wi: {
      description: "Display current user",
      execute: () => [username],
    },

    pwd: {
      description: "Print working directory",
      execute: () => [`/home/${username}/portfolio`],
    },

    ls: {
      description: "List directory contents",
      execute: () => [
        "total 42",
        "drwxr-xr-x  8 hacker hacker  4096 Dec 13 23:59 .",
        "drwxr-xr-x  3 hacker hacker  4096 Dec 13 20:00 ..",
        "-rw-r--r--  1 hacker hacker   220 Dec 13 20:00 .bash_logout",
        "-rw-r--r--  1 hacker hacker  3771 Dec 13 20:00 .bashrc",
        "drwx------  2 hacker hacker  4096 Dec 13 20:01 .cache",
        "-rw-r--r--  1 hacker hacker   807 Dec 13 20:00 .profile",
        "drwxr-xr-x  2 hacker hacker  4096 Dec 13 23:59 projects",
        "-rw-r--r--  1 hacker hacker  2048 Dec 13 23:58 README.md",
        "-rw-r--r--  1 hacker hacker  1024 Dec 13 23:57 skills.txt",
        "drwxr-xr-x  2 hacker hacker  4096 Dec 13 23:56 experience",
      ],
    },

    print: {
      description: "Show system information",
      execute: () => [

        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡿⠇⠀⠀⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⡸⣞⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⢀⣧⢿⣽⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⣼⣞⡿⣞⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⣰⣟⢾⣽⢫⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣠⢤⣶⡻⣞⣿⣺⢯⣽⣳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⢠⣄⡀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⣀⣠⣤⣿⣽⣻⢾⣽⣷⣾⣽⣻⣞⣷⣳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣶⣄⡀⠀⠀⠀⣉⣲⣴⢶⣞⡿⣽⣞⡷⣯⢿⡽⣞⣿⠟⠋⠁⠉⠈⠳⣟⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⢶⣾⣿⡽⣯⣟⡾⣽⡷⣯⣟⡽⡾⣽⡯⠁⠀⠀⠀⠀⠀⠀⢮⣭⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢞⣿⣿⢯⡿⣿⣯⣟⣷⣯⢿⣳⣟⡷⣽⣼⣻⣽⠀⠀⠀⠀⠀⠀⠀⢀⣼⡯⡗⠋⠤⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⣿⣿⣯⣽⣾⣿⣾⣗⡿⣯⡷⣯⣟⡷⣞⣼⣿⣀⠀⠀⠀⠀⢀⣠⡿⣏⡗⠈⠐⠈⠅⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠛⠏⠉⠉⠽⢟⢿⣿⣿⣿⣿⣷⣻⢾⡽⣞⡷⠄⡹⣶⢿⣻⢿⣻⡽⢯⣼⢦⠶⠁⠈⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣯⠇⠀⠀⠀⠀⠀⠁⣽⣿⣿⣿⣷⣯⣿⣽⣛⡦⠀⠀⢩⣿⣹⢯⣷⢻⣟⠺⢣⡖⣘⠤⠓⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⡃⠁⠀⠀⠀⢀⣤⣾⣟⢿⣻⣿⣿⣟⡾⣽⡳⠄⠎⢳⣯⢯⣟⡾⢯⣞⣯⣓⠉⢀⠀⠀⡄⢢⡀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣷⣷⣶⣳⣶⣺⣿⣿⣳⢯⣟⣿⣿⣳⢯⠛⠅⠃⠀⠀⣴⣿⡿⣬⢶⠾⠙⣊⣥⠾⡒⠊⢁⢠⠣⣌⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⡽⣾⡽⣯⣟⣿⡿⣯⣿⣿⣾⢿⣿⠳⢏⣈⢠⠀⠀⣰⢿⡿⣽⣉⡶⠌⠋⠉⣀⡀⠁⠀⠀⠀⣘⡐⣂⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣽⣳⣟⣳⣟⣾⣽⣿⣿⣿⣿⣿⣦⣜⡻⡽⠆⠧⣴⡟⣯⢟⡳⣭⠲⠄⠐⠀⠀⠀⠈⠁⠉⠑⢊⡕⢃⠄⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣾⣿⣯⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣾⢧⠀⠹⠾⡵⡞⡽⢢⣃⠐⠀⠀⠄⡐⠀⠀⠀⡘⢦⠘⣌⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠒⡈⠀⡀⠄⡑⠢⣉⠴⣈⣆",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣏⡴⣶⣵⣢⢤⢠⡀⡄⢠⠐⡰⢌⡱⠀⡁⡀⠆⡥⠆⡥⣛⡽⣾",
        "",
        `${username}@${hostname}`,
        "─".repeat(30),
        "Uptime: 13 days, 37 hours, 42 mins",
        "Shell: zsh 5.9",
        "Theme: Matrix",
        "Terminal: neo-terminal",
      ],
    },

    matrix: {
      description: "Enter the matrix...",
      execute: () => [
        "Entering the Matrix...",
        "",
        "01001000 01100001 01100011 01101011 01100101 01110010",
        "01001101 01100001 01110100 01110010 01101001 01111000",
        "",
        "⠊⠉⠑⠀⠞⠕⠀⠍⠑⠑⠞⠀⠽⠕⠥⠂⠀⠝⠑⠕⠲⠲⠲",
        "",
        "The Matrix has you...",
        "Follow the white rabbit 🐰",
        "",
        "Wake up, Neo...",
        "The Matrix is calling you.",
        "",
        "> red_pill.exe executed successfully",
        "> Connecting to Zion mainframe...",
        "> Welcome to the real world.",
      ],
    },
  };

  // Add line to terminal
  function addLine(type, content) {
    const line = document.createElement("div");
    line.className = `terminal-line ${type}`;
    line.textContent = content;
    terminalContent.appendChild(line);
    terminalContent.scrollTop = terminalContent.scrollHeight;
  }

  // Execute command
  async function executeCommand(cmd) {
    const trimmedCmd = cmd.trim();

    if (!trimmedCmd) return;

    // Add command to history
    commandHistory.push(trimmedCmd);
    historyIndex = -1;

    // Add command line
    addLine("command", `${username}@${hostname}:${currentPath}$ ${trimmedCmd}`);

    // Handle special commands
    if (trimmedCmd === "clear") {
      terminalContent.innerHTML = "";
      return;
    }

    // Parse command and arguments
    const [baseCmd, ...args] = trimmedCmd.split(" ");

    if (commands[baseCmd]) {
      isTyping = true;

      // Simulate typing delay
      await new Promise((resolve) =>
        setTimeout(resolve, 300 + Math.random() * 700),
      );

      const output = commands[baseCmd].execute();
      output.forEach((line) => {
        addLine("output", line);
      });

      isTyping = false;
    } else if (baseCmd === "cat" && args.length > 0) {
      // Handle cat command with file arguments
      const filename = args[0];
      isTyping = true;
      await new Promise((resolve) => setTimeout(resolve, 200));

      if (filename === "README.md") {
        addLine("output", "# Welcome to My Digital Portfolio");
        addLine("output", "");
        addLine(
          "output",
          "This is the personal portfolio of a cybersecurity expert",
        );
        addLine(
          "output",
          "and full-stack developer living in the digital frontier.",
        );
        addLine("output", "");
        addLine("output", "Type `help` to see available commands.");
      } else if (filename === "skills.txt") {
        addLine(
          "output",
          "JavaScript, TypeScript, React, Node.js, Python, Go, Rust",
        );
        addLine("output", "Docker, Kubernetes, AWS, GCP, PostgreSQL, MongoDB");
        addLine("output", "Penetration Testing, Security Analysis, DevOps");
      } else {
        addLine("error", `cat: ${filename}: No such file or directory`);
      }

      isTyping = false;
    } else {
      addLine(
        "error",
        `Command '${baseCmd}' not found. Type 'help' for available commands.`,
      );
    }
  }

  // Handle keyboard input
  terminalInput.addEventListener("keydown", function (e) {
    if (isTyping) {
      e.preventDefault();
      return;
    }

    if (e.key === "Enter") {
      executeCommand(terminalInput.value);
      terminalInput.value = "";
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        historyIndex = newIndex;
        terminalInput.value = commandHistory[newIndex] || "";
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          historyIndex = -1;
          terminalInput.value = "";
        } else {
          historyIndex = newIndex;
          terminalInput.value = commandHistory[newIndex];
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const availableCommands = Object.keys(commands).filter((cmd) =>
        cmd.startsWith(terminalInput.value.toLowerCase()),
      );
      if (availableCommands.length === 1) {
        terminalInput.value = availableCommands[0];
      } else if (availableCommands.length > 1) {
        addLine("info", `Available: ${availableCommands.join(", ")}`);
      }
    }
  });

  // Focus terminal input when clicking anywhere on terminal
  document.addEventListener("click", function () {
    terminalInput.focus();
  });

  // Initial focus
  terminalInput.focus();
}

// Navigation functionality
function initializeNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const floatingNavDots = document.querySelectorAll(".nav-dot");
  const contentSections = document.querySelectorAll(".content-section");

  function showSection(sectionId) {
    // Hide all sections
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });

    // Show target section
    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Update nav button states
    navButtons.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.section === sectionId) {
        btn.classList.add("active");
      }
    });

    // Update floating nav dots
    floatingNavDots.forEach((dot) => {
      dot.classList.remove("active");
      if (dot.dataset.section === sectionId) {
        dot.classList.add("active");
      }
    });
  }

  // Add click handlers
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      showSection(btn.dataset.section);
    });
  });

  floatingNavDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSection(dot.dataset.section);
    });
  });
}

// Skills functionality
function initializeSkills() {
  const skillsData = [
    // Frontend
    {
      name: "React",
      level: 95,
      category: "frontend",
      icon: "⚛️",
      description: "advanced component architecture & hooks",
    },
    {
      name: "Next.js",
      level: 60,
      category: "frontend",
      icon: "▲",
      description: "SSR, SSG, and app router mastery",
    },
    {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: "🟨",
    description: "ES6+, DOM manipulation, async programming, and modern tooling",
  },
  {
    name: "CSS",
    level: 95,
    category: "frontend",
    icon: "🎨",
    description: "flexbox, grid, animations, responsive design, and RTL layouts",
  },


    // Backend
    {
      name: "Node.js",
      level: 90,
      category: "backend",
      icon: "🟢",
      description: "scalable server-side applications",
    },
    {
      name: "Python",
      level: 95,
      category: "backend",
      icon: "🐍",
      description: "django, fastAPI, and data science",
    },
      {
    name: ".NET",
    level: 85,
    category: "backend",
    icon: "🟣",
    description: "class libraries, dependency injection, and SQLite/Entity Framework integration",
  },
    {
      name: "Go",
      level: 60,
      category: "backend",
      icon: "🐹",
      description: "high-performance microservices",
    },
    {
      name: "PostgreSQL",
      level: 80,
      category: "backend",
      icon: "🐘",
      description: "complex queries and optimization",
    },
    {
    name: "SQLite",
    level: 90,
    category: "database",
    icon: "🗄️",
    description: "embedded database design, queries, indexing, and migrations",
  },

    // DevOps
    {
      name: "Docker",
      level: 70,
      category: "devops",
      icon: "🐳",
      description: "containerization and multi-stage builds",
    },
    {
      name: "AWS",
      level: 70,
      category: "devops",
      icon: "☁️",
      description: "lambda, ECS, RDS, and more",
    },

    // Security
  {
    name: "CNN",
    level: 80,
    category: "ai",
    icon: "🧠",
    description: "deep learning for images and pattern recognition",
  },
  {
    name: "KNN",
    level: 85,
    category: "ai",
    icon: "📍",
    description: "distance-based classification and regression",
  },
  {
    name: "Image Analysis",
    level: 70,
    category: "ai",
    icon: "🖼️",
    description: "classification, detection, and segmentation",
  },
  {
    name: "NLP",
    level: 75,
    category: "ai",
    icon: "📝",
    description: "tokenization, embeddings, and sentiment analysis",
  },
  {
    name: "Data Analysis",
    level: 80,
    category: "data",
    icon: "📊",
    description: "cleaning, exploration, and visualization with Pandas",
  },
  {
    name: "ML",
    level: 80,
    category: "ai",
    icon: "🤖",
    description: "model training, evaluation, and tuning with scikit-learn",
  },


    // Other
    {
    name: "C#",
    level: 95,
    category: "backend",
    icon: "🔷",
    description: "OOP, LINQ, async/await, and modern .NET features",
  },
  {
    name: "Windows Desktop Development",
    level: 85,
    category: "desktop",
    icon: "🪟",
    description: "WPF and WinForms apps with MVVM, data binding, and RTL support",
  },
  ];

  const skillsGrid = document.getElementById("skills-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function getLevelClass(level) {
    if (level >= 90) return "expert";
    if (level >= 80) return "advanced";
    if (level >= 70) return "intermediate";
    return "learning";
  }

  function createSkillCard(skill, index) {
    return `
      <div class="skill-card ${skill.category}" style="animation-delay: ${index * 50}ms">
        <div class="skill-header">
          <div class="skill-name-row">
            <span class="skill-icon">${skill.icon}</span>
            <h3 class="skill-name">${skill.name}</h3>
          </div>
          <span class="skill-level ${skill.category}">${skill.level}%</span>
        </div>
        <div class="skill-progress">
          <div class="skill-progress-bar ${skill.category}" style="width: ${skill.level}%"></div>
        </div>
        <p class="skill-description">${skill.description}</p>
        <div class="skill-level-indicator ${getLevelClass(skill.level)}"></div>
      </div>
    `;
  }

  function renderSkills(category = "all") {
    const filteredSkills =
      category === "all"
        ? skillsData
        : skillsData.filter((skill) => skill.category === category);
    skillsGrid.innerHTML = filteredSkills.map(createSkillCard).join("");

    // Animate progress bars
    setTimeout(() => {
      const progressBars = skillsGrid.querySelectorAll(".skill-progress-bar");
      progressBars.forEach((bar) => {
        bar.style.width = bar.style.width;
      });
    }, 100);
  }

  // Filter functionality
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderSkills(btn.dataset.category);
    });
  });

  // Initial render
  renderSkills();
}

// Timeline functionality
function initializeTimeline() {
  const timelineData = [
    {
      id: "3",
      title: "B.SC. in computer engineering",
      company: "MUST 2020–2025",
      period: "2020 - 2025",
      description: [
        "graduated summa cum laude with a GPA of 19.3",
        "specialized in data structures, algorithm design, and neural networks",
        "led the university's competitive programming team, achieving a problem-solving success rate of over 85%",
        "published research on neural network optimization",
      ],
      technologies: [".NET", "C++", "Machine Learning", "DS", "OOP"],
      type: "education",
      status: "completed",
    },
    {
      id: "2",
      title: "junior developer",
      company: "startupTech solutions",
      period: "2021 - 2023",
      description: [
        "contributed to backend development using modern frameworks",
        "collaborated on code review and software testing processes",
        "familiarity with software development life cycle (SDLC) principles and best practices",
        "gained experience in designing sales software",
        "participated and ranked in DAC and SPOJ competitions",
      ],
      technologies: ["javaScript", "CNN&KNN", "Python", "Git", "jupiter"],
      type: "work",
      status: "completed",
    },
    {
      id: "1",
      title: "software engineer",
      company: "Digital Nexus Labs",
      period: "2023 - Present",
      description: [
        "built scalable web applications using react and node.js and django",
        "developed RESTful APIs and graphQL services",
        "optimized database performance reducing query time by 60%",
        "collaborated with cross-functional teams in agile environment",
      ],
      technologies: ["react", "node.js", "graphQL", "sqlite", "postreSQL", "docker"],
      type: "work",
      status: "completed",
    },
  ];

  const timeline = document.getElementById("timeline");

  function getTypeIcon(type) {
    switch (type) {
      case "work":
        return "💼";
      case "education":
        return "🎓";
      case "project":
        return "🚀";
      default:
        return "📍";
    }
  }

  function createTimelineItem(item, index) {
    const currentBadge =
      item.status === "current"
        ? '<div class="current-badge">CURRENT</div>'
        : "";
    const currentClass = item.status === "current" ? "current" : "";

    return `
      <div class="timeline-item ${currentClass}" style="animation-delay: ${index * 200}ms">
        <div class="timeline-node">${getTypeIcon(item.type)}</div>
        <div class="timeline-content">
          ${currentBadge}
          <div class="timeline-header">
            <div>
              <h3 class="timeline-title glitch-text" data-text="${item.title}">${item.title}</h3>
              <p class="timeline-company">${item.company}</p>
            </div>
            <div class="timeline-period">${item.period}</div>
          </div>
          <ul class="timeline-description">
            ${item.description.map((desc) => `<li>${desc}</li>`).join("")}
          </ul>
          <div class="timeline-technologies">
            ${item.technologies.map((tech) => `<span class="tech-chip">${tech}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  // Render timeline
  timeline.innerHTML = timelineData.map(createTimelineItem).join("");

  // Add end marker
  timeline.innerHTML += `
    <div class="timeline-item" style="animation-delay: ${timelineData.length * 200}ms">
      <div class="timeline-node" style="background: var(--neon-accent); border-color: var(--neon-accent);">✨</div>
      <div class="timeline-content">
        <h3 class="timeline-title glitch-text" data-text="The journey continues...">The journey continues...</h3>
      </div>
    </div>
  `;
}

// Avatar functionality
function initializeAvatar() {
  const avatarContainer = document.querySelector(".avatar-container");
  const holoInfo = document.querySelector(".holo-info");

  if (avatarContainer && holoInfo) {
    avatarContainer.addEventListener("mouseenter", () => {
      holoInfo.classList.remove("hidden");
    });

    avatarContainer.addEventListener("mouseleave", () => {
      holoInfo.classList.add("hidden");
    });
  }
}

// Glitch effects
function initializeGlitchEffects() {
  const glitchElements = document.querySelectorAll(".glitch-text");

  glitchElements.forEach((element) => {
    // Set data-text attribute if not present
    if (!element.hasAttribute("data-text")) {
      element.setAttribute("data-text", element.textContent);
    }

    // Random glitch effect
    if (element.dataset.trigger !== "hover") {
      setInterval(
        () => {
          if (Math.random() > 0.7) {
            element.style.animation = "glitch 0.3s";
            setTimeout(() => {
              element.style.animation = "";
            }, 300);
          }
        },
        3000 + Math.random() * 2000,
      );
    }
  });
}

// Update time display
function updateTime() {
  const timeElement = document.querySelector(".terminal-time");
  if (timeElement) {
    timeElement.textContent = new Date().toLocaleTimeString();
  }
}

// Intersection Observer for animations
function initializeIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".skill-card, .timeline-item, .contact-method",
  );
  animatedElements.forEach((el) => observer.observe(el));
}

// Handle mobile touch interactions
function initializeMobileInteractions() {
  // Disable hover effects on touch devices
  if ("ontouchstart" in window) {
    document.body.classList.add("touch-device");
  }

  // Handle mobile navigation
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((btn) => {
    btn.addEventListener("touchstart", function () {
      this.classList.add("touch-active");
    });

    btn.addEventListener("touchend", function () {
      this.classList.remove("touch-active");
    });
  });
}

// Performance optimizations
function initializePerformanceOptimizations() {
  // Throttle scroll events
  let ticking = false;

  function updateScrollEffects() {
    // Add any scroll-based effects here
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick);

  // Optimize animations for mobile
  if (window.innerWidth <= 768) {
    const style = document.createElement("style");
    style.textContent = `
      .animate-pulse-neon { animation-duration: 4s !important; }
      .animate-glitch { animation-duration: 0.5s !important; }
    `;
    document.head.appendChild(style);
  }
}

// Error handling
window.addEventListener("error", function (e) {
  console.error("JavaScript error:", e.error);
});

// Initialize additional features when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  initializeIntersectionObserver();
  initializeMobileInteractions();
  initializePerformanceOptimizations();
});

// Service Worker registration (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    // Uncomment if you want to add offline functionality
    // navigator.serviceWorker.register('/sw.js');
  });
}