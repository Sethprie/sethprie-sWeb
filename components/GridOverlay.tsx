export default function GridOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage:
          "linear-gradient(0deg, transparent 24%, rgba(255,100,0,0.05) 25%, rgba(255,100,0,0.05) 26%, transparent 27%, transparent 74%, rgba(255,100,0,0.05) 75%, rgba(255,100,0,0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,100,0,0.05) 25%, rgba(255,100,0,0.05) 26%, transparent 27%, transparent 74%, rgba(255,100,0,0.05) 75%, rgba(255,100,0,0.05) 76%, transparent 77%, transparent)",
        backgroundSize: "40px 40px",
      }}
    />
  )
}
