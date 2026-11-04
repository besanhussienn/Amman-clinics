const specialties = [
    { id: "all", name: "All Specialties" },
    { id: "cardiology", name: "Cardiology" },
    { id: "dermatology", name: "Dermatology" },
    { id: "dentistry", name: "Dentistry" },
    { id: "pediatrics", name: "Pediatrics" },
    { id: "orthopedics", name: "Orthopedics" },
    { id: "ophthalmology", name: "Ophthalmology" },
];

const locations = [
    { id: "all", name: "All Locations" },
    { id: "sweifieh", name: "Sweifieh" },
    { id: "abdoun", name: "Abdoun" },
    { id: "shemeisani", name: "Shmeisani" },
    { id: "jabal-amman", name: "Jabal Amman" },
    { id: "khalda", name: "Khalda" },
    { id: "tla-al-ali", name: "Tla' Al-Ali" },
];

function Hero() {
    return (
        <section className="bg-linear-to-b from-cream-100 to-cream-50 py-16 px-6">
            <div className="max-w-4xl mx-auto text-center py-12 px-6">
                
                {/* Hero Title */}
                <h1 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4 tracking-tight">
                    Find Your Best Medical Care in Amman
                </h1>
                
                {/* Subtitle */}
                <p className="text-stone-600 text-lg mb-8">
                    Book appointments with top-rated clinics and specialized doctors easily.
                </p>

                {/* Search Container (Bar) */}
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-stone-200/80 flex flex-col md:flex-row items-center gap-3">
                    
                    {/* Specialty Select */}
                    <div className="w-full md:flex-1">
                        <select 
                            id="specialty" 
                            className="w-full bg-stone-50 border border-stone-200 text-stone-700 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400 transition"
                        >
                            {specialties.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Location Select */}
                    <div className="w-full md:flex-1">
                        <select 
                            id="locations" 
                            className="w-full bg-stone-50 border border-stone-200 text-stone-700 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400 transition"
                        >
                            {locations.map((LOC) => (
                                <option key={LOC.id} value={LOC.id}>
                                    {LOC.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full md:w-auto px-8 py-3 bg-stone-800 hover:bg-stone-900 text-white font-medium text-sm rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer">
                        Search
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Hero;