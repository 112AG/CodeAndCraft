import React from "react";

function CTA() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-8 sm:py-20 rounded-2xl sm:rounded-3xl text-center px-4">
      <h4 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Ready to Elevate Your Online Presence?
      </h4>
      <h2 className="text-gray-200 uppercase tracking-widest text-sm mb-6">
        Let’s turn your vision into a powerful digital experience.
      </h2>
      <button className="border-2 cursor-pointer border-white text-white px-6 py-3 rounded-lg font-medium hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-95 focus:scale-95">
        Start Now
      </button>
    </section>
  );
}

export default CTA;
