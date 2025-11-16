import { useState } from "react";
import Sidebar from "./Sidebar";
import MainComponent from "./MainComponent";
import ChatWindow from "./ChatWindow";
import MobileLayout from "./MobileLayout";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // desktop
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // mobile
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [newChatClicked, setNewChatClicked] = useState(false);

  return (
    <>
      <div className="hidden lg:flex flex-row">
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
      <div className="lg:hidden">
        {mobileSidebarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#0D1117] dark:bg-[#F1F6FF] z-50">
            <div className="flex justify-between items-center p-4">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/chatbot--v1.png"
                alt="chatbot--v1"
              />
              <button onClick={() => setMobileSidebarOpen(false)}>
                <svg width="28" height="28" fill="currentColor">
                  <path
                    d="M6 6l16 16M22 6L6 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white dark:text-[#0077D2]"
                  />
                </svg>
              </button>
            </div>

            <Sidebar
              setIsSidebarOpen={() => setMobileSidebarOpen(false)}
              setNewChatClicked={(v) => {
                setNewChatClicked(v);
                setMobileSidebarOpen(false);
              }}
              activeSessionId={activeSessionId}
              setActiveSessionId={(id) => {
                setActiveSessionId(id);
                setNewChatClicked(true);
                setMobileSidebarOpen(false);
              }}
            />
          </div>
        )}
        {!mobileSidebarOpen && (
          <>
            {newChatClicked ? (
              <ChatWindow
                isSidebarOpen={false}
                setIsSidebarOpen={() => setMobileSidebarOpen(true)}
                activeSessionId={activeSessionId}
              />
            ) : (
              <MobileLayout openSidebar={() => setMobileSidebarOpen(true)} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
