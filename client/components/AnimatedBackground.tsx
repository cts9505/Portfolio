import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  baseVx: number;
  baseVy: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const scrollSpeedRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const scrollMultiplierRef = useRef<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => {
      const baseVx = (Math.random() - 0.5) * 0.5;
      const baseVy = (Math.random() - 0.5) * 0.5;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      };
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const updateParticles = () => {
      const scrollInfluence = scrollMultiplierRef.current;
      const mouseInfluence = 0.0001;

      particlesRef.current.forEach((particle, index) => {
        // Calculate distance from mouse for interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        // Mouse repulsion effect
        let mouseForceX = 0;
        let mouseForceY = 0;
        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          mouseForceX = -(dx / distance) * force * mouseInfluence * 100;
          mouseForceY = -(dy / distance) * force * mouseInfluence * 100;
        }

        // Apply scroll influence and mouse forces
        particle.vx = particle.baseVx * scrollInfluence + mouseForceX;
        particle.vy = particle.baseVy * scrollInfluence + mouseForceY;

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Fade effect based on life
        const lifeRatio = particle.life / particle.maxLife;
        if (lifeRatio < 0.1) {
          particle.opacity = lifeRatio * 10 * 0.8;
        } else if (lifeRatio > 0.9) {
          particle.opacity = (1 - lifeRatio) * 10 * 0.8;
        }

        // Reset particle when it dies
        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle();
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;

        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2,
        );
        gradient.addColorStop(0, "hsl(210, 100%, 56%)");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw the core dot
        ctx.globalAlpha = particle.opacity * 0.8;
        ctx.fillStyle = "hsl(210, 100%, 56%)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current);
      lastScrollYRef.current = currentScrollY;

      // Calculate scroll speed (higher = faster scrolling)
      scrollSpeedRef.current = Math.min(scrollDelta * 0.1, 10);
      scrollMultiplierRef.current = 1 + scrollSpeedRef.current;

      // Gradually return to normal speed
      setTimeout(() => {
        scrollMultiplierRef.current = Math.max(
          1,
          scrollMultiplierRef.current * 0.95,
        );
      }, 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};

export default AnimatedBackground;
