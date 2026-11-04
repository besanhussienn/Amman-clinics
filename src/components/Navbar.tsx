function Navbar() {
  return (
    <nav className="sticky top-0 z-50
    bg-cream-200/95 backdrop-blur-md
    text-soft-taupe px-8 py-4 
    flex items-center justify-between shadow-md border-b border-soft-taupe/15 transition-all">
      {/* Logo Section */}
    <div className="flex items-center gap-2">
        <span className="text-3xl font-extrabold tracking-tight text-stone-800">
        Amman<span className="text-emerald-700">.</span>Clinics
        </span>
    </div>

      {/* Links & Navigation Actions */}
    <div className="flex items-center gap-8">
        <a 
        href="#About" 
        className="text-stone-700 hover:text-stone-900 font-semibold text-base transition-colors"
        >
        About us
        </a>

        {/* Language Switcher */}
        <div className="flex items-center bg-stone-200/60 p-1 rounded-xl border border-stone-300/50">
        <button className="px-3 py-1 rounded-lg text-xs font-bold bg-white text-stone-900 shadow-sm transition">
            AR
        </button>  
        <button className="px-3 py-1 rounded-lg text-xs font-medium text-stone-600 hover:text-stone-900 transition">
            EN
        </button>
        </div>

        {/* Distinct Primary Login Button */}
        <button className="bg-stone-800 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-sm hover:bg-stone-900 hover:shadow-md transition-all active:scale-95">
        Login
        </button> 
    </div>
    </nav>
);
}

export default Navbar;