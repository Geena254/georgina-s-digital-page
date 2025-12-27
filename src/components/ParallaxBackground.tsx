import { useParallax } from "@/hooks/use-parallax";

const ParallaxBackground = () => {
  const scrollY = useParallax();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating circle - slow movement */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl"
        style={{
          top: "10%",
          right: "-10%",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Medium accent circle - medium movement */}
      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-accent/8 to-transparent blur-2xl"
        style={{
          top: "40%",
          left: "-5%",
          transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.05}px)`,
        }}
      />

      {/* Small gold accent - faster movement */}
      <div
        className="absolute w-48 h-48 rounded-full bg-gradient-to-bl from-gold/10 to-transparent blur-xl"
        style={{
          bottom: "20%",
          right: "15%",
          transform: `translateY(${-scrollY * 0.2}px)`,
        }}
      />

      {/* Subtle decorative shapes */}
      <div
        className="absolute w-32 h-32 rounded-full border border-primary/10"
        style={{
          top: "25%",
          left: "20%",
          transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.05}deg)`,
        }}
      />

      <div
        className="absolute w-20 h-20 rounded-full border border-accent/10"
        style={{
          top: "60%",
          right: "25%",
          transform: `translateY(${-scrollY * 0.12}px) rotate(${-scrollY * 0.08}deg)`,
        }}
      />

      {/* Floating dots */}
      <div
        className="absolute w-3 h-3 rounded-full bg-primary/20"
        style={{
          top: "15%",
          left: "40%",
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />

      <div
        className="absolute w-2 h-2 rounded-full bg-accent/25"
        style={{
          top: "70%",
          left: "15%",
          transform: `translateY(${-scrollY * 0.18}px)`,
        }}
      />

      <div
        className="absolute w-4 h-4 rounded-full bg-gold/15"
        style={{
          top: "50%",
          right: "10%",
          transform: `translateY(${scrollY * 0.22}px)`,
        }}
      />

      {/* Gradient overlay at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background/50 to-transparent"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
