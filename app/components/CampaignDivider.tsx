export default function CampaignDivider() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#050505]">
      <div className="h-10 w-full overflow-hidden md:h-12">
        <div
          className="h-full w-full bg-repeat-x"
          style={{
            backgroundImage: "url('/images/myron-lizer/myron-divider-2026.png')",
            backgroundPosition: "center",
            backgroundSize: "auto 64px",
            transform: "scaleY(1.18)",
            transformOrigin: "center",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}