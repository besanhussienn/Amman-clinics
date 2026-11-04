function TopQualityCare() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 md:mt-20 pb-16">
      
      {/* Section Header & Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight mb-3">
          Why Choose Amman Clinics
        </h2>
        <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto">
          We connect you with the highest standards of healthcare across Amman, ensuring a smooth and trusted booking experience.
        </p>
      </div>

      {/* Grid Layout (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 1. Large Card: Takes 2 columns and 2 rows */}
        <div className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer md:col-span-2 md:row-span-2 h-350px] md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
            alt="Verified Medical Quality" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Verified Medical Quality</h3>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-200">
              Connecting you with highly qualified and trusted doctors in Amman.
            </p>
          </div>
        </div>

        {/* 2. Small Card 1 (Top right in the 3rd column) */}
        <div className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-230px]">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" 
            alt="Instant Booking"  
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Instant & Free Booking</h3>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-200">
              Book your appointment in seconds with no hidden charges.
            </p>
          </div>
        </div>

        {/* 3. Small Card 2 (Bottom right in the 3rd column) */}
        <div className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-230px]">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" 
            alt="All Amman Coverage" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-bold mb-2">All-Amman Coverage</h3>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-200">
              Easily find quality healthcare near you across all Amman areas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TopQualityCare;