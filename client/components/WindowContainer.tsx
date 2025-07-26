import React, { useState, ReactNode } from "react";

interface WindowContainerProps {
  title?: string;
  children: ReactNode;
  className?: string;
  defaultMinimized?: boolean;
  glowEffect?: boolean;
}

const WindowContainer: React.FC<WindowContainerProps> = ({
  title = "Window",
  children,
  className = "",
  defaultMinimized = false,
  glowEffect = true,
}) => {
  const [isMinimized, setIsMinimized] = useState(defaultMinimized);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    // If minimized, restore first, then toggle maximize
    if (isMinimized) {
      setIsMinimized(false);
    }
    setIsMaximized(!isMaximized);
  };

  const handleClose = () => {
    // In a real app, this might actually close/hide the window
    // For now, we'll just minimize it
    setIsMinimized(true);
  };

  return (
    <div
      className={`
        relative rounded-lg border border-gray-800/30 
                ${glowEffect ? "shadow-2xl shadow-blue-500/10 glow-container hover-glow" : ""}
                        ${isMaximized ? "fixed inset-2 z-[60] !important" : ""}
        ${isMinimized ? "h-12" : ""}
        transition-all duration-300 ease-in-out
        ${className}
      `}
      style={{
        background: glowEffect
          ? "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)"
          : "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: glowEffect
          ? `
            0 0 20px rgba(59, 130, 246, 0.1),
            0 0 40px rgba(59, 130, 246, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `
          : "none",
        ...(isMaximized && {
          borderRadius: "0px",
          border: "2px solid rgba(59, 130, 246, 0.5)",
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
        }),
      }}
    >
      {/* Window Controls Bar */}
      <div className="flex items-center justify-between p-3 border-b border-gray-800/30">
        <div className="flex items-center space-x-2">
          {/* macOS Style Control Buttons */}
          <button
            onClick={handleClose}
            className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors duration-200 flex items-center justify-center group"
            title="Close"
          >
            <span className="text-red-900 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              ✕
            </span>
          </button>
          <button
            onClick={handleMinimize}
            className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center group"
            title={isMinimized ? "Restore" : "Minimize"}
          >
            <span className="text-yellow-900 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              −
            </span>
          </button>
          {/* Green Restore */}
          <button
            onClick={isMaximized ? undefined : handleMinimize}
            disabled={isMaximized}
            className={`
              w-3 h-3 rounded-full
              border border-black/10 shadow-sm
              transition-all duration-200 flex items-center justify-center group
              ${isMaximized
                ? "bg-gray-400 cursor-not-allowed opacity-50"
                : "bg-green-500 hover:bg-green-400 cursor-pointer"}
            `}
            title={isMaximized ? "Window is maximized" : "Restore Window"}
            style={{
              boxShadow: "0 1px 3px 0 rgba(0,0,0,0.07)"
            }}
          >
            <span
              className={`
                text-green-900 text-xs opacity-0 group-hover:opacity-100 transition-opacity
                flex items-center
                ${isMaximized ? "group-hover:opacity-0" : ""}
              `}
              style={{
                fontWeight: 600,
                fontSize: '13px',
                userSelect: 'none'
              }}
            >
              {!isMaximized && (
                <span style={{ lineHeight: 1 }}>⤡</span>
              )}
            </span>
          </button>
        </div>

        {/* Window Title */}
        <div className="text-gray-300 text-sm font-medium select-none">
          {title}
        </div>

        {/* Spacer for balance */}
        <div className="w-16"></div>
      </div>

      {/* Window Content */}
      <div
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMinimized ? "max-h-0 opacity-0" : "max-h-none opacity-100"}
        `}
      >
        <div className="p-6">{children}</div>
      </div>

      {/* Minimized State Restore Button */}
      {isMinimized && (
        <button
          onClick={handleMinimize}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 hover:text-green-300 transition-colors"
          title="Restore Window"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default WindowContainer;
