const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { qaData, sessions, generateSessionId } = require("./mockData");

app.get("/api/sessions", (req, res) => {
  const list = sessions.map((s) => ({
    id: s.id,
    title: s.title,
  }));
  res.json(list);
});

app.get("/api/new-chat", (req, res) => {
  const newId = generateSessionId();
  sessions.push({
    id: newId,
    title: "New Chat " + newId,
    history: [],
  });

  res.json({ sessionId: newId });
});

app.get("/api/session/:id", (req, res) => {
  const id = req.params.id;
  const session = sessions.find((s) => s.id === id);

  if (!session) {
    return res.status(404).json({ message: "Session not found" });
  }

  res.json(session);
});

app.post("/api/chat/:id", (req, res) => {
  const id = req.params.id;
  const { question } = req.body;

  const session = sessions.find((s) => s.id === id);
  if (!session) {
    return res.status(404).json({ message: "Session not found" });
  }

  const foundQA = qaData.find(
    (q) => q.question.toLowerCase() === question.toLowerCase()
  );

  if (foundQA) {
    // deep clone answer so likes are unique PER SESSION
    const newAnswer = JSON.parse(JSON.stringify(foundQA.answer));

    session.history.push({
      question,
      answer: newAnswer,
    });

    return res.json(newAnswer);
  }

  const defaultAnswer = {
    description: "Sorry, I don't have this answer in mock data.",
    table: [],
    liked: null,
  };

  session.history.push({
    question,
    answer: defaultAnswer,
  });

  return res.json(defaultAnswer);
});

app.post("/api/feedback/:sessionId/:msgIndex", (req, res) => {
  const { sessionId, msgIndex } = req.params;
  const { liked } = req.body;

  const session = sessions.find((s) => s.id === sessionId);
  if (!session) {
    return res.status(404).json({ error: "Session not found" });
  }
  const index = parseInt(msgIndex);

  if (!session.history[index]) {
    return res.status(404).json({ error: "Message not found" });
  }
  session.history[index].answer.liked = liked;

  return res.json({ success: true });
});

app.delete("/api/session/:id", (req, res) => {
  const sessionId = req.params.id;

  const index = sessions.findIndex((s) => s.id === sessionId);

  if (index === -1) {
    return res.status(404).json({ message: "Session not found" });
  }

  sessions.splice(index, 1);

  res.json({ message: "Session deleted successfully" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
