import { useEffect, useState } from "react";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Add Poppins font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Glitch effect interval
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingElement = ({ delay, duration, size, color }) => (
    <div
      className={`absolute rounded-full ${color} blur-sm animate-pulse`}
      style={{
        width: size,
        height: size,
        animation: `float ${duration}s ease-in-out infinite ${delay}s`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative font-['Poppins']">
      {/* Background Elements - matching your theme */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-gray-900 to-cyan-950/20"></div>

        {/* White moving grid background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "grid-move 20s linear infinite",
          }}
        />

        {/* Animated grid overlay - Blue theme */}
        <div
          className="absolute inset-0 opacity-10 md:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "grid-pulse 20s linear infinite",
          }}
        />

        {/* Starfield effect with blue tint */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-200 rounded-full animate-pulse"
              style={{
                width: (i % 3) + 1 + "px",
                height: (i % 3) + 1 + "px",
                top: ((i * 17) % 100) + "%",
                left: ((i * 23) % 100) + "%",
                animationDelay: (i % 5) * 1 + "s",
                animationDuration: (i % 3) + 2 + "s",
              }}
            />
          ))}
        </div>

        {/* 3D floating elements */}
        <div className="absolute inset-0">
          <FloatingElement delay={0} duration={6} size="80px" color="bg-blue-500/10" />
          <FloatingElement delay={1} duration={8} size="120px" color="bg-cyan-400/5" />
          <FloatingElement delay={2} duration={7} size="60px" color="bg-blue-300/10" />
          <FloatingElement delay={3} duration={9} size="100px" color="bg-indigo-500/8" />
          <FloatingElement delay={4} duration={5} size="40px" color="bg-cyan-300/12" />
        </div>

        {/* Mouse follower effect */}
        <div 
          className="absolute pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Window Container Effect */}
        <div className="relative max-w-2xl w-full">
          {/* Window Frame */}
          <div className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-2xl overflow-hidden">
            {/* Window Header */}
            <div className="bg-gray-700/30 px-4 py-3 border-b border-gray-600/50 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-400 font-mono">
                404_error.exe
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 text-center">
              {/* 404 Text with Glitch Effect */}
              <div className="relative mb-8">
                <h1 
                  className={`text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent leading-none select-none ${
                    glitchActive ? 'animate-pulse' : ''
                  }`}
                  style={{
                    textShadow: glitchActive ? '2px 2px 0px #ff00ff, -2px -2px 0px #00ffff' : 'none',
                    transform: glitchActive ? 'translateX(2px)' : 'none',
                  }}
                >
                  404
                </h1>
                
                {/* Glitch overlay */}
                {glitchActive && (
                  <h1 className="absolute inset-0 text-8xl md:text-9xl font-black text-red-500 opacity-20 leading-none select-none"
                      style={{ transform: 'translateX(-2px) translateY(2px)' }}>
                    404
                  </h1>
                )}
              </div>

              {/* Error Message */}
              <div className="space-y-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Oops! Lost in Space
                </h2>
                <p className="text-lg text-gray-300 max-w-md mx-auto leading-relaxed">
                  The page you're looking for has drifted into the digital void. 
                  Let's navigate you back to safer waters.
                </p>
                
                {/* Current path display */}
                <div className="bg-gray-800/50 rounded-lg p-3 font-mono text-sm text-cyan-400 border border-gray-700/50">
                  <span className="text-gray-500">Path:</span> {window.location.pathname}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/"
                  className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-cyan-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <span className="relative z-10">Return Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                
                <button
                  onClick={() => window.history.back()}
                  className="px-8 py-3 border border-gray-600 rounded-lg font-semibold text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-300 hover:bg-gray-800/50"
                >
                  Go Back
                </button>
              </div>

              {/* Fun Interactive Element */}
              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 mb-2">
                  Try moving your mouse around - there might be some hidden surprises! ✨
                </p>
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce cursor-pointer hover:bg-cyan-400 transition-colors duration-300"
                      style={{ animationDelay: `${i * 0.1}s` }}
                      onClick={() => setGlitchActive(true)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(40px) translateY(40px); }
        }
        
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateZ(0deg);
          }
          50% {
            transform: translateY(-20px) rotateZ(5deg);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;