export function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(40,128,255,0.22),_transparent_34%),radial-gradient(circle_at_80%_18%,_rgba(58,123,255,0.18),_transparent_24%),linear-gradient(180deg,_#06101f_0%,_#040816_48%,_#02050f_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(119,167,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(119,167,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle,_rgba(80,167,255,0.15)_0,_transparent_68%)] blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
