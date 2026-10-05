/**
 * Computer Science Program Data Schema & Content Registry
 * Clean ES6 Module / Object namespace for curriculum, campus items, skills, and career data.
 */

window.CS_DATA = {
  curriculum: [
    // YEAR 1 - SEMESTER 1
    {
      id: "I1100",
      code: "I1100",
      title: "Introduction to Programming",
      credits: 6,
      year: 1,
      semester: 1,
      category: "Core",
      description: "Fundamental concepts of modern software development, problem solving, logic design, and basic data manipulation using Python and C.",
      instructor: "Dr. Hala Hijazi",
      prerequisites: ["None"],
      topics: ["Variables & Expressions", "Control Flow", "Functions & Scope", "Lists & Strings", "Basic Debugging"]
    },
    {
      id: "M1100",
      code: "M1100",
      title: "Discrete Mathematics",
      credits: 6,
      year: 1,
      semester: 1,
      category: "Math",
      description: "Mathematical foundations for computer science including propositional logic, set theory, induction, relations, functions, and graph theory.",
      instructor: "Dr. Amina Mortada",
      prerequisites: ["High School Algebra"],
      topics: ["Logic & Proofs", "Set Theory", "Combinatorics", "Graph Theory", "Recurrence Relations"]
    },
    {
      id: "P1101",
      code: "P1101",
      title: "Physics",
      credits: 5,
      year: 1,
      semester: 1,
      category: "Science",
      description: "Principles of mechanics, electromagnetism, and semiconductor physics relevant to modern computer hardware and quantum foundations.",
      instructor: "Dr. Hussien Abo Taam",
      prerequisites: ["None"],
      topics: ["Electric Fields", "Circuits & Logic Gates", "Semiconductors", "Wave Mechanics", "Electromagnetism"]
    },

    // YEAR 1 - SEMESTER 2
    {
      id: "M1103",
      code: "M1103",
      title: "Calculus I",
      credits: 6,
      year: 1,
      semester: 2,
      category: "Math",
      description: "Single-variable differential and integral calculus with applications to algorithm complexity, optimization, and continuous mathematical models.",
      instructor: "Dr. Yousef Ayyad",
      prerequisites: ["CS102"],
      topics: ["Limits & Continuity", "Derivatives", "Integration", "Taylor Series", "Optimization"]
    },
    {
      id: "I1101",
      code: "I1101",
      title: "C language",
      credits: 5,
      year: 1,
      semester: 2,
      category: "Systems",
      description: "Internal architecture of computers, assembly language programming, digital logic design, ALU, memory hierarchy, and CPU execution cycles.",
      instructor: "Dr. Nadine",
      prerequisites: ["CS101", "CS103"],
      topics: ["Binary Arithmetic", "Assembly Language", "Cache & RAM", "Pipelining", "Digital Logic"]
    },
    {
      id: "M1102",
      code: "M1102",
      title: "Mathematics for Computer Science",
      credits: 3,
      year: 1,
      semester: 2,
      category: "General",
      description: "Algebraic concepts and techniques relevant to computer science, including linear algebra, matrices, and vector spaces.",
      instructor: "Dr. Amina Mortada",
      prerequisites: ["None"],
      topics: ["Technical Reports", "Research Papers", "Oral Presentations", "Code Documentation", "Peer Reviews"]
    },
    {
      id: "M1105",
      code: "M1105",
      title: "Topology in R^n",
      credits: 2,
      year: 1,
      semester: 2,
      category: "Core",
      description: "Introduction to topological spaces, continuity, compactness, connectedness, and their applications in computer science and data analysis.",
      instructor: "Dr. Yousef Ayyad",
      prerequisites: ["CS101"],
      topics: ["Topological Spaces", "Continuous Functions", "Compactness", "Connectedness", "Applications in Data Analysis"]
    },

    // YEAR 2 - SEMESTER 1
    {
      id: "I2204",
      code: "I2204",
      title: "Imperative Programming",
      credits: 6,
      year: 2,
      semester: 1,
      category: "Core",
      description: "Comprehensive study of data structures including arrays, linked lists, trees, heaps, hash tables, and graphs with emphasis on implementation and algorithmic efficiency.",
      instructor: "Dr. Zein Ibrahim",
      prerequisites: ["CS101", "CS107"],
      topics: ["Arrays & Linked Lists", "Trees & BSTs", "Heaps & Priority Queues", "Hash Tables", "Graph Data Structures"]
    },
    {
      id: "S2250",
      code: "S2250",
      title: "Statistics for Computer Science",
      credits: 3,
      year: 2,
      semester: 1,
      category: "Math",
      description: "statistical methods and their applications in computer science.",
      instructor: "Dr. Fadel Ibrahim",
      prerequisites: ["CS102"],
      topics: ["Number Theory", "Modular Arithmetic", "Automata Theory", "Formal Languages", "RSA Encryption Basics"]
    },
    {
      id: "I2202",
      code: "I2202",
      title: "Computer Organization",
      credits: 4,
      year: 2,
      semester: 1,
      category: "Systems",
      description: "Internal architecture of computers, assembly language programming, digital logic design, ALU, memory hierarchy, and CPU execution cycles.",
      instructor: "Dr. Hala Hijazi",
      prerequisites: ["CS201"],
      topics: ["Essential Computer Architecture", "Assembly Language Programming", "Digital Logic Design", "ALU and Control Units", "Memory Hierarchy"]
    },

    // YEAR 2 - SEMESTER 2
    {
      id: "I2206",
      code: "I2206",
      title: "Data Structures",
      credits: 6,
      year: 2,
      semester: 2,
      category: "Systems",
      description: "Advanced data structures and algorithms, including balanced trees, graph algorithms, dynamic programming, and complexity analysis.",
      instructor: "Dr. Zein Ibrahim",
      prerequisites: ["CS105", "CS201"],
      topics: ["Balanced Trees", "Graph Algorithms", "Dynamic Programming", "Complexity Analysis"]
    },
    {
      id: "I2207",
      code: "I2207",
      title: "Computer Architecture",
      credits: 4,
      year: 2,
      semester: 2,
      category: "Systems",
      description: "Study of computer architecture, including instruction set design, pipelining, memory hierarchy, and performance optimization techniques.",
      instructor: "Dr. Hala Hijazi",
      prerequisites: ["CS105"],
      topics: ["OSI & TCP/IP Model", "IP Routing Protocols", "TCP & UDP Protocols", "DNS & HTTP", "Socket Programming"]
    },
    {
      id: "I2210",
      code: "I2210",
      title: "Database 1",
      credits: 5,
      year: 2,
      semester: 2,
      category: "Core",
      description: "Introduction to database systems, including relational model, SQL, normalization, and transaction management.",
      instructor: "Dr. Mohammad Dbouk",
      prerequisites: ["CS201"],
      topics: ["Relational Model", "SQL Queries", "Normalization Techniques", "Transaction Management", "Indexing & Optimization"]
    },
    {
      id: "I2211",
      code: "I2211",
      title: "Object-Oriented Programming",
      credits: 5,
      year: 2,
      semester: 2,
      category: "Math",
      description: " Introduction to object-oriented programming concepts, including classes, objects, inheritance, polymorphism, and design patterns using Java and C++.",
      instructor: "Dr. Abed Alsafadi",
      prerequisites: ["CS104"],
      topics: ["Classes", "Objects", "Inheritance", "Polymorphism", "Design Patterns"]
    },

    // YEAR 3 - SEMESTER 1
    {
      id: "I3301",
      code: "I3301",
      title: "Software Engineering",
      credits: 4,
      year: 3,
      semester: 1,
      category: "Core",
      description: "Introduction to software engineering principles, including agile methodologies, design patterns, unit testing, and CI/CD.",
      instructor: "Dr. Kamal Baydoun",
      prerequisites: ["CS201"],
      topics: ["Agile & Scrum", "Design Patterns", "UML Modeling", "Automated Testing", "Git Version Control"]
    },
    {
      id: "I3302",
      code: "I3302",
      title: "PHP",
      credits: 4,
      year: 3,
      semester: 1,
      category: "Web",
      description: "Introduction to PHP, including syntax, functions, arrays, and database integration.",
      instructor: "Dr. Ali Ghrayib",
      prerequisites: ["CS201", "CS207"],
      topics: ["PHP Syntax", "Functions & Arrays", "Database Integration", "Session Management", "Error Handling"]
    },
    {
      id: "I3303",
      code: "I3303",
      title: "OS 2",
      credits: 4,
      year: 3,
      semester: 1,
      category: "Systems",
      description: "Advanced operating systems concepts, including process management, memory management, file systems, and security.",
      instructor: "Dr. Sammour",
      prerequisites: ["CS203"],
      topics: ["Process Management", "Memory Management", "File Systems", "Security", "System Programming"]
    },

    // YEAR 3 - SEMESTER 2
    {
      id: "I3307",
      code: "I3307",
      title: "Theory of Computation",
      credits: 4,
      year: 3,
      semester: 2,
      category: "Security",
      description: "The study of computational models, algorithms, and the fundamental limit of what can be computed.",
      instructor: "Dr. Alan Turing Jr.",
      prerequisites: ["CS204", "CS205"],
      topics: ["AES & RSA Cryptography", "Web & Buffer Exploits", "Firewalls & VPNs", "Ethical Hacking", "Security Auditing"]
    },
    {
      id: "I3330",
      code: "I3330",
      title: "IT Project Management",
      credits: 5,
      year: 3,
      semester: 2,
      category: "Management",
      description: "Introduction to project management principles and practices in the IT domain.",
      instructor: "Prof. Claire Williams",
      prerequisites: ["CS303"],
      topics: ["Project Planning", "Risk Management", "Stakeholder Communication", "Agile Methodologies", "Budgeting and Scheduling"]
    },
    {
      id: "I3301",
      code: "I3301",
      title: "Computer & Society",
      credits: 3,
      year: 3,
      semester: 2,
      category: "General",
      description: "The impact of computing on society, including ethical considerations, privacy, and digital divide.",
      instructor: "Dr. Maya Patel",
      prerequisites: ["CS204", "CS205"],
      topics: ["Ethics in Computing", "Privacy & Security", "Digital Divide", "Societal Impact", "Legal Issues"]
    },
    {
      id: "I3308",
      code: "I3308",
      title: "Project",
      credits: 4,
      year: 3,
      semester: 2,
      category: "Core",
      description: "Capstone senior thesis project. Students design, develop, test, and present a comprehensive software application under faculty mentorship.",
      instructor: "All Department Faculty",
      prerequisites: ["CS301", "CS303", "CS206"],
      topics: ["Project Scoping", "Architecture Design", "Sprint Iterations", "Final Demonstration", "Thesis Documentation"]
    }
  ],

  campus: [
    {
      id: "labs",
      title: "Labs",
      desc: "Modern labs with high-performance computers, specialized software and research equipment.",
      icon: "fa-desktop",
      fullDetail: "Equipped with NVIDIA RTX 4090 Workstations, quantum simulation testbeds, dual 4K monitors, and dedicated high-speed optical fiber connectivity."
    },
    {
      id: "clubs",
      title: "Clubs",
      desc: "Join student clubs like CS Club, AI Club, Cybersecurity Club and Robotics Club.",
      icon: "fa-users-gear",
      fullDetail: "Over 12 active student-run societies organizing weekly coding jams, hardware hack nights, guest keynote sessions, and social esports leagues."
    },
    {
      id: "events",
      title: "Events",
      desc: "Tech talks, workshops, hackathons, career days and guest speakers from industry experts.",
      icon: "fa-calendar-days",
      fullDetail: "Annual 48-hour global hackathon with over $50k in cash prizes, company tech talks from FAANG software leads, and bi-weekly tech workshops."
    },
    {
      id: "competitions",
      title: "Competitions",
      desc: "CTFs, programming contests, hackathons, robotics and AI challenges.",
      icon: "fa-trophy",
      fullDetail: "Participate in ICPC competitive programming, DEFCON CTF regional qualifiers, VEX Robotics challenges, and Kaggle machine learning tournaments."
    },
    {
      id: "community",
      title: "Community",
      desc: "Peer learning, study groups, mentorship and student projects.",
      icon: "fa-people-roof",
      fullDetail: "Dedicated peer tutoring center, 1-on-1 industry mentor pairings with senior alumni, and collaborative open-source project incubators."
    }
  ],

  careers: [
    { title: "Software Engineer", subtext: "Build great software", salary: "$115,000 - $175,000", stack: "Java, C++, Python, System Architecture" },
    { title: "Web Developer", subtext: "Create the web", salary: "$95,000 - $150,000", stack: "TypeScript, React, Node.js, GraphQL" },
    { title: "Mobile Developer", subtext: "Apps for everyone", salary: "$100,000 - $160,000", stack: "Swift, Kotlin, Flutter, React Native" },
    { title: "AI / ML Engineer", subtext: "Build intelligent systems", salary: "$130,000 - $210,000", stack: "Python, PyTorch, TensorFlow, CUDA" },
    { title: "Cybersecurity Specialist", subtext: "Protect systems", salary: "$110,000 - $180,000", stack: "Network Pentesting, Cryptography, Linux" },
    { title: "Data Engineer", subtext: "Work with data", salary: "$105,000 - $165,000", stack: "Apache Spark, SQL, Snowflake, Airflow" },
    { title: "Cloud Engineer", subtext: "Manage cloud infrastructure", salary: "$115,000 - $170,000", stack: "AWS, Kubernetes, Terraform, Docker" },
    { title: "Database Developer", subtext: "Scale the future", salary: "$100,000 - $155,000", stack: "PostgreSQL, MongoDB, Redis, Query Tuning" }
  ]
};
