import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    const serviceId = 'service_4tjmtdn';
    const templateId = 'template_bq0sg6h';
    const publicId = 'QyPpPAD_ftws17IbR';

    const templeteParams = {
      to_name: 'Code&Craft(C&C)',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templeteParams, publicId).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
    

    setFormData({
      name: '',
      email: '',
      message: ''
    })

  }

  return (
    <section className={`min-h-screen py-20 px-4 `}>
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-32"
                    placeholder="Tell us about your project"
                    required
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
                  <div className="text-blue-600 mr-3 mt-1"><i className="ri-map-pin-fill"></i></div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">Gopiganj, Bhadohi, Uttar Pradesh 221303</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1"><i className="ri-phone-fill"></i></div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+91 6388521272</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1"><i className="ri-mail-fill"></i></div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">craftedbycode07@gmail.com</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="font-medium mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    {['ri-instagram-fill', 'ri-linkedin-fill', 'ri-twitter-fill', 'ri-facebook-fill'].map((platform) => (  
                      <button key={platform} className="w-10 h-10 rounded-full bg-gray-100 cursor-pointer flex items-center justify-center hover:bg-blue-100 transition-colors">
                        <span className="text-blue-600"><i className={platform}></i></span>
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
  )
}

export default Contact
