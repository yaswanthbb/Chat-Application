import { useState } from "react";
import Sidebar from "./Sidebar";
import MainComponent from "./MainComponent";
import ChatWindow from "./ChatWindow";
import MobileLayout from "./MobileLayout";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);    // desktop
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // mobile
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [newChatClicked, setNewChatClicked] = useState(false);

  return (
    <>
      {/* DESKTOP */}
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

      {/* MOBILE */}
      <div className="lg:hidden">

        {/* MOBILE SIDEBAR (FULL SCREEN) */}
        {mobileSidebarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#181818] z-50">
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileSidebarOpen(false)}>
                <svg width="28" height="28" fill="white">
                  <path d="M6 6l16 16M22 6L6 22" stroke="white" strokeWidth="2"/>
                </svg>
              </button>
            </div>

            <Sidebar
              setIsSidebarOpen={() => setMobileSidebarOpen(false)}
              setNewChatClicked={(v) => {
                setNewChatClicked(v);
                setMobileSidebarOpen(false); // CLOSE SIDEBAR ON NEW CHAT
              }}
              activeSessionId={activeSessionId}
              setActiveSessionId={(id) => {
                setActiveSessionId(id);
                setNewChatClicked(true);
                setMobileSidebarOpen(false); // CLOSE SIDEBAR ON CHAT SELECT
              }}
            />
          </div>
        )}

        {/* MOBILE MAIN AREA */}
        {!mobileSidebarOpen && (
          <>
            {newChatClicked ? (
              <ChatWindow
                isSidebarOpen={false}
                setIsSidebarOpen={() => setMobileSidebarOpen(true)} // hamburger opens sidebar
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
