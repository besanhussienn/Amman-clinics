const clinics = [
    { id: 1, name: "Dr. Majdi", specialty: "Dentist", location: "Abdoun", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Dr. Asmaa", specialty: "Dermatology", location: "Shmeisani", image: "https://images.unsplash.com/photo-1594824813572-887e5b1573c2?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Dr. Ashraf", specialty: "Cardiology", location: "Sweifieh", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" },
];

function FeaturedClinics() {
    return (
        <div className="max-w-6xl mx-auto px-6 my-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center tracking-tight">
                Featured Clinics
            </h2>

            {/* Grid for 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {clinics.map((clinic) => (
                    <div 
                        key={clinic.id} 
                        className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200/80 flex flex-col justify-between hover:shadow-md transition-all duration-300"
                    >
                        {/* Image and Info Section */}
                        <div className="flex items-center gap-4">
                            <img 
                                src={clinic.image} 
                                alt={clinic.name} 
                                className="w-20 h-20 rounded-xl object-cover bg-stone-100 shrink-0" 
                            />
                            <div>
                                <h3 className="text-xl font-bold text-stone-800">{clinic.name}</h3>
                                <p className="text-sm text-stone-500 mt-1">
                                    {clinic.specialty} • {clinic.location}
                                </p>
                            </div>
                        </div>

                        {/* Book Appointment Button */}
                        <button className="w-full mt-6 py-2.5 bg-stone-800 hover:bg-stone-900 text-white rounded-xl text-sm font-medium transition-all shadow-sm active:scale-[0.98] cursor-pointer">
                            Book Appointment
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedClinics;