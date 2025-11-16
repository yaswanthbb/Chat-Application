let qaData = [
  {
    question: "What is JavaScript?",
    answer: {
      description: "JavaScript is a scripting language used to make websites interactive.",
      table: [
        { key: "Type", value: "Programming Language" },
        { key: "Release Year", value: "1995" },
        { key: "Used For", value: "Frontend + Backend" }
      ],
      liked: null
    }
  },
  {
    question: "What is React?",
    answer: {
      description: "React is a JavaScript library for building user interfaces.",
      table: [
        { key: "Type", value: "Frontend Library" },
        { key: "Created By", value: "Facebook" },
        { key: "Uses", value: "UI Components" }
      ],
      liked: null
    }
  },
  {
    question: "What is Node.js?",
    answer: {
      description: "Node.js lets you run JavaScript on the server side.",
      table: [
        { key: "Built On", value: "Chrome V8 Engine" },
        { key: "Type", value: "Backend Runtime" },
        { key: "Package Manager", value: "npm" }
      ],
      liked: null
    }
  },
  {
    question: "What is Express?",
    answer: {
      description: "Express is a backend framework for Node.js.",
      table: [
        { key: "Type", value: "Backend Framework" },
        { key: "Use Case", value: "Building APIs" },
        { key: "Routing", value: "Easy and Fast" }
      ],
      liked: null
    }
  },
  {
    question: "What is HTML?",
    answer: {
      description: "HTML is the standard language for creating webpages.",
      table: [
        { key: "Full Form", value: "HyperText Markup Language" },
        { key: "Usage", value: "Structure of Webpages" },
        { key: "Version", value: "HTML5" }
      ],
      liked: null
    }
  },
  {
    question: "What is CSS?",
    answer: {
      description: "CSS is used to style HTML webpages.",
      table: [
        { key: "Full Form", value: "Cascading Style Sheets" },
        { key: "Use Case", value: "Styling + Layout" },
        { key: "Types", value: "Inline, Internal, External" }
      ],
      liked: null
    }
  },
  {
    question: "What is Tailwind CSS?",
    answer: {
      description: "Tailwind is a utility-first CSS framework.",
      table: [
        { key: "Type", value: "Utility Framework" },
        { key: "Advantage", value: "Faster UI building" },
        { key: "Uses", value: "Classes for styling" }
      ],
      liked: null
    }
  },
  {
    question: "What is an API?",
    answer: {
      description: "API allows different software systems to communicate.",
      table: [
        { key: "Full Form", value: "Application Programming Interface" },
        { key: "Type", value: "REST API" },
        { key: "Usage", value: "Data exchange" }
      ],
      liked: null
    }
  },
  {
    question: "What is JSON?",
    answer: {
      description: "JSON is a data format used for storing and sending data.",
      table: [
        { key: "Full Form", value: "JavaScript Object Notation" },
        { key: "Type", value: "Lightweight Data Format" },
        { key: "Used In", value: "APIs, Config Files" }
      ],
      liked: null
    }
  },
  {
    question: "What is a Database?",
    answer: {
      description: "A database is used to store and manage data.",
      table: [
        { key: "Types", value: "SQL & NoSQL" },
        { key: "Examples", value: "MongoDB, MySQL" },
        { key: "Purpose", value: "Permanent Data Storage" }
      ],
      liked: null
    }
  }
];


let sessions = [];

function generateSessionId() {
  return "session_" + Math.floor(Math.random() * 100000);
}

module.exports = { qaData, sessions, generateSessionId };
