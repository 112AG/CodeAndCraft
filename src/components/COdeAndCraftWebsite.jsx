import React, { useState, useEffect } from 'react';

const CodeAndCraftWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample projects stored in local storage
  useEffect(() => {
    if (!localStorage.getItem('codeAndCraftProjects')) {
      const projects = [
        {
          id: 1,
          title: 'E-commerce Platform',
          category: 'E-commerce',
          image: '/api/placeholder/600/400',
          description: 'A full-featured online store with payment integration and inventory management.',
        },
        {
          id: 2,
          title: 'Restaurant Website',
          category: 'Restaurant',
          image: '/api/placeholder/600/400',
          description: 'Interactive menu and reservation system for a local restaurant.',
        },
        {
          id: 3,
          title: 'Personal Portfolio',
          category: 'Portfolio',
          image: '/api/placeholder/600/400',
          description: 'Creative portfolio site for a digital artist with animated transitions.',
        },
        {
          id: 4,
          title: 'School Management System',
          category: 'Education',
          image: '/api/placeholder/600/400',
          description: 'Comprehensive platform for managing student records and curriculum.',
        },
      ];
      localStorage.setItem('codeAndCraftProjects', JSON.stringify(projects));
    }
  }, []);

  // Get projects from local storage
  const projects = JSON.parse(localStorage.getItem('codeAndCraftProjects') || '[]');

  // Services information
  const services = [
    {
      title: 'Web Design',
      icon: '✏️',
      description: 'Creative and intuitive designs that capture your brand essence while ensuring a smooth user experience.',
    },
    {
      title: 'Web Development',
      icon: '💻',
      description: 'Custom web applications built with modern technologies like React, Node.js, and more.',
    },
    {
      title: 'Maintenance & Support',
      icon: '🔧',
      description: 'Ongoing support to keep your website secure, up-to-date, and performing optimally.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Code<span className="text-blue-600">&</span>Craft
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <button 
                key={item}
                className={`navlink relative px-1 py-2 ${activeSection === item.toLowerCase() ? 'text-blue-600 font-medium' : 'hover:text-blue-500'}`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </button>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2"
            >
              <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-64 py-3' : 'max-h-0 overflow-hidden'}`}>
          {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <button 
              key={item}
              className={`block w-full text-left px-4 py-2 ${activeSection === item.toLowerCase() ? 'text-blue-600 font-medium' : 'hover:bg-gray-100'}`}
              onClick={() => {
                setActiveSection(item.toLowerCase());
                setMenuOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section className={`min-h-screen flex items-center px-4 ${activeSection === 'home' ? 'block' : 'hidden'}`}>
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fadeIn">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Crafting Digital <span className="text-blue-600">Excellence</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  We transform your ideas into powerful digital solutions. From stunning websites to powerful web applications, 
                  we bring your vision to life with code and creativity.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => setActiveSection('services')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Our Services
                  </button>
                  <button 
                    onClick={() => setActiveSection('portfolio')}
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all"
                  >
                    View Our Work
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="/api/placeholder/600/500" 
                  alt="Web Development Illustration" 
                  className="w-full h-auto rounded-lg shadow-lg animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={`min-h-screen py-20 px-4 ${activeSection === 'services' ? 'block' : 'hidden'}`}>
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
              <h3 className="text-2xl font-semibold mb-6">Our Development Process</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements' },
                  { step: '02', title: 'Design', desc: 'Creating wireframes and visual designs' },
                  { step: '03', title: 'Development', desc: 'Building with clean, efficient code' },
                  { step: '04', title: 'Deployment', desc: 'Testing and launching your project' }
                ].map((step, index) => (
                  <div key={index} className="relative p-6">
                    <div className="text-5xl font-bold text-gray-100 absolute top-0 left-0 w-full text-center -z-10">
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

        {/* Portfolio Section */}
        <section className={`min-h-screen py-20 px-4 bg-gray-100 ${activeSection === 'portfolio' ? 'block' : 'hidden'}`}>
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-2">Our Portfolio</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Check out some of our recent projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`min-h-screen py-20 px-4 ${activeSection === 'contact' ? 'block' : 'hidden'}`}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to start your project? Contact us for a free consultation
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-32"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">📍</div>
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-gray-600">123 Web Street, Digital City, 10101</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">📞</div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">✉️</div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">info@codeandcraft.com</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-medium mb-2">Follow Us</h4>
                      <div className="flex space-x-4">
                        {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((platform) => (
                          <button key={platform} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition-colors">
                            <span className="text-blue-600">{platform.charAt(0)}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Code<span className="text-blue-400">&</span>Craft</h3>
              <p className="text-gray-400">
                Creating beautiful digital experiences for businesses of all sizes.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-blue-400 transition-colors">Web Design</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Web Development</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Maintenance & Support</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveSection('home')} className="hover:text-blue-400 transition-colors">Home</button></li>
                <li><button onClick={() => setActiveSection('services')} className="hover:text-blue-400 transition-colors">Services</button></li>
                <li><button onClick={() => setActiveSection('portfolio')} className="hover:text-blue-400 transition-colors">Portfolio</button></li>
                <li><button onClick={() => setActiveSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for web development tips and updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-gray-400 text-center">
            <p>© {new Date().getFullYear()} Code&Craft. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CSS Animations (added as style) */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CodeAndCraftWebsite;