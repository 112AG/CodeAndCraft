import React from "react";

function Services() {
  const services = [
    {
      title: "Web Design",
      icon: "✏️",
      description:
        "Creative and intuitive designs that capture your brand essence while ensuring a smooth user experience.",
    },
    {
      title: "Web Development",
      icon: "💻",
      description:
        "Custom web applications built with modern technologies like React, Node.js, and more.",
    },
    {
      title: "Maintenance & Support",
      icon: "🔧",
      description:
        "Ongoing support to keep your website secure, up-to-date, and performing optimally.",
    },
  ];
  return (
    <section
      className={`min-h-screen py-20 px-4 `}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Our Services</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end web solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">
            Our Development Process
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your goals and requirements",
              },
              {
                step: "02",
                title: "Design",
                desc: "Creating wireframes and visual designs",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building with clean, efficient code",
              },
              {
                step: "04",
                title: "Deployment",
                desc: "Testing and launching your project",
              },
            ].map((step, index) => (
              <div key={index} className="relative p-6">
                <div className="text-6xl font-bold text-gray-100 absolute top-[-24%] left-0 w-full text-center -z-10">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
