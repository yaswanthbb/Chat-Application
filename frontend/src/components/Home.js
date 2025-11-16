import { useState } from "react";
import Sidebar from "./Sidebar";
import MainComponent from "./MainComponent";
import ChatWindow from "./ChatWindow";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [newChatClicked, setNewChatClicked] = useState(false);
  return (
    <div className="flex flex-row">
      {isSidebarOpen && (
        <Sidebar
          setIsSidebarOpen={setIsSidebarOpen}
          setNewChatClicked={setNewChatClicked}
          activeSessionId={activeSessionId}
          setActiveSessionId={setActiveSessionId}
        />
      )}
      {newChatClicked ? (
        <ChatWindow
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
          activeSessionId={activeSessionId}
        />
      ) : (
        <MainComponent
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      )}
    </div>
  );
};

export default Home;
