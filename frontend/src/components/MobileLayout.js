import { useState } from "react";

const MobileLayout = ({ openSidebar }) => {
  const [input, setInput] = useState("");

  return (
    <div className="bg-[#212121] h-screen flex flex-col justify-between p-4">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <button onClick={openSidebar}>
          {/* menu icon */}
          <svg width="25" height="25" fill="white">
            <rect x="3" y="6" width="18" height="2" />
            <rect x="3" y="12" width="18" height="2" />
            <rect x="3" y="18" width="18" height="2" />
          </svg>
        </button>

        <h2 className="text-white text-lg font-medium">
          ChatGPT <span className="text-[#AFAFAF]">5.1</span>
        </h2>

        <button>
          {/* refresh icon */}
          <svg width="22" height="22" fill="white">
            <path d="M17 1v4h-4l1.7-1.7A7 7 0 1 0 18 11h2A9 9 0 1 1 7 2.3L5.3 4H9V1h8z" />
          </svg>
        </button>
      </div>

      {/* CENTER TEXT */}
      <div className="flex flex-1 justify-center items-center">
        <h1 className="text-white text-2xl font-semibold text-center">
          What can I help with?
        </h1>
      </div>

      {/* INPUT BAR */}
      <div className="flex items-center bg-[#303030] rounded-full p-2">
        <button className="mx-2">
          {/* plus icon */}
          <svg width="20" height="20" fill="white">
            <path d="M10 4v12M4 10h12" stroke="white" strokeWidth="2" />
          </svg>
        </button>

        <input
          className="flex-1 bg-transparent text-white outline-none px-2"
          placeholder="Ask anything"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="mx-2">
          {/* mic icon */}
          <svg width="20" height="20" fill="white">
            <path d="M10 1a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0V3a2 2 0 0 1 2-2z" />
            <path d="M5 9a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0H5z" />
            <path d="M10 14v4M7 18h6" stroke="white" strokeWidth="2" />
          </svg>
        </button>

        <button className="bg-white rounded-full p-2">
          {/* send icon */}
          <svg width="18" height="18" fill="black">
            <path d="M2 16l14-6L2 4l3 6-3 6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobileLayout;
