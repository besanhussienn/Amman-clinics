 const steps = [
    {
        id: 1,
        number: "01",
        title: "Search Doctor or Specialty",
        description: "Find the right doctor or medical specialty you need easily."
    },
    {
        id: 2,
        number: "02",
        title: "Select Location in Amman",
        description: "Choose the clinic location nearest and most convenient for you."
    },
    {
        id: 3,
        number: "03",
        title: "Book & Confirm",
        description: "Pick a suitable time slot and confirm your appointment instantly."
    }
];

function Howwork() {
    return (
        <section className="max-w-6xl mx-auto px-6 my-16">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-12 tracking-tight"> 
                How It Works
            </h2>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step) => (
                    <div 
                        key={step.id}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between min-h-220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                    >
                        {/* Step Content */}
                        <div>
                            {/* Step Number Badge */}
                            <span className="inline-block px-3 py-1 bg-stone-100 text-stone-800 font-extrabold text-lg rounded-xl mb-3">
                            {step.number}
                            </span>

                            {/* Step Title */} 
                            <h3 className="text-xl font-bold text-stone-800 mb-2">
                                {step.title}
                            </h3>

                            {/* Step Description */}
                            <p className="text-sm text-stone-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Howwork;