'use client';

import type React from 'react';
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Send,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/app/hooks/useTheme';
import Aurora from '@/components/ui/AuroraBackground';

export default function ProjectInspiredContact() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      const result = await res.json();
      setIsSubmitting(false);

      if (result.success) {
        setSubmitted(true); // ✅ Use your custom success UI
      } else {
        // Optional: show error state if you want to improve UX
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was a problem sending your message.');
    }
  };
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setSubmitted(false); // optional: bring user back to the form UI
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="fixed inset-0 w-full h-full z-0 opacity-20 pointer-events-none">
        <Aurora
          colorStops={['#7fffd4', '#66ffff', '#cc99ff']}
          blend={0.3}
          amplitude={0.8}
          speed={0.7}
        />
      </div>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'
        }`}
      >
        <div className="max-w-5xl mx-auto px-8 py-20 pt-24">
          {/* Header */}
          <header className="mb-20">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-6xl font-light tracking-tight">Contact</h1>
            </div>
            <div
              className={`h-px w-24 mb-8 transition-colors duration-500 ${
                isDark ? 'bg-gray-700' : 'bg-black'
              }`}
            />
            <p
              className={`text-lg font-light max-w-2xl ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              I’m always curious to hear from fellow creatives, thinkers, and
              builders. If you’ve got something in the works or just want to
              connect, drop me a message!
            </p>
          </header>

          {submitted ? (
            <div className="text-center py-20">
              <div className="grid lg:grid-cols-9 gap-12">
                <div className="lg:col-span-9">
                  <h3 className="text-4xl font-light mb-6">Message Sent</h3>
                  <p
                    className={`text-lg font-light mb-8 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={resetForm}
                    className={`inline-flex items-center space-x-3 px-8 cursor-pointer py-3 border transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? 'border-gray-600 hover:border-gray-400 hover:bg-gray-800'
                        : 'border-gray-300 hover:border-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <span>Back to Contact</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Contact Information Section */}
              <section className="mb-20">
                <div className="grid lg:grid-cols-12 gap-12">
                  {/* Section Number */}
                  <div className="lg:col-span-2">
                    <div className="sticky top-24">
                      <div
                        className={`text-6xl font-light mb-2 ${
                          isDark ? 'text-gray-700' : 'text-gray-400'
                        }`}
                      >
                        01
                      </div>
                      <div
                        className={`text-sm ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        Information
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-4xl font-light tracking-tight mb-6">
                          Get In Touch
                        </h2>
                        <p className="text-lg leading-relaxed font-light mb-8">
                          Ready to start a conversation? Here's how you can
                          reach me.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <Mail size={18} />
                            <span className="font-medium">Email</span>
                          </div>
                          <a
                            href="mailto:fannarjack@gmail.com"
                            className={`text-xl font-light transition-colors ${
                              isDark
                                ? 'text-gray-300 hover:text-white'
                                : 'text-gray-700 hover:text-black'
                            }`}
                          >
                            fannarjack@gmail.com
                          </a>
                        </div>

                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <MapPin size={18} />
                            <span className="font-medium">Location</span>
                          </div>
                          <p
                            className={`text-lg font-light ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            Reykjavik, Iceland
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <Clock size={18} />
                            <span className="font-medium">Response Time</span>
                          </div>
                          <p
                            className={`text-lg font-light ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            Usually within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Side Info */}
                  <div className="lg:col-span-3">
                    <div className="sticky top-24 space-y-4">
                      <div
                        className={`p-6 border transition-colors duration-500 ${
                          isDark
                            ? 'border-gray-700 bg-gray-800/30'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <p
                          className={`text-xs mb-3 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          Open to freelance work and collaborations
                        </p>
                        <span className="text-sm font-medium">
                          Available for new projects
                        </span>
                        <div className="w-2 h-2 inline-block ml-3 bg-green-500 rounded-full"></div>
                      </div>

                      <div className="space-y-3">
                        {[
                          {
                            icon: Github,
                            label: 'GitHub',
                            href: 'https://github.com/fannarjack',
                          },
                          {
                            icon: Linkedin,
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/in/fannar-jack-995ab8268',
                          },
                          {
                            icon: FileText,
                            label: 'My CV',
                            href: '/img/FannarJack_CV.pdf',
                          },
                        ].map(({ icon: Icon, label, href }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center space-x-3 p-3 border transition-all duration-300 hover:scale-105 ${
                              isDark
                                ? 'border-gray-700 hover:border-gray-600 hover:bg-gray-800'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <Icon size={18} />
                            <span className="font-light">{label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Form Section */}
              <section className="mb-20">
                <div
                  className={`border-t pt-16 transition-colors duration-500 ${
                    isDark ? 'border-gray-700' : 'border-gray-200'
                  }`}
                >
                  <div className="grid lg:grid-cols-12 gap-12">
                    {/* Section Number */}
                    <div className="lg:col-span-2">
                      <div className="sticky top-24">
                        <div
                          className={`text-6xl font-light mb-2 ${
                            isDark ? 'text-gray-700' : 'text-gray-400'
                          }`}
                        >
                          02
                        </div>
                        <div
                          className={`text-sm ${
                            isDark ? 'text-gray-500' : 'text-gray-500'
                          }`}
                        >
                          Message
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-10">
                      <div className="space-y-8">
                        <div>
                          <h2 className="text-4xl font-light tracking-tight mb-6">
                            Send a Message
                          </h2>
                          <p className="text-lg  mb-8">
                            Tell me about your project or just say hello.
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <label className="block text-sm font-medium mb-3">
                                Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-3 border transition-colors duration-300 ${
                                  isDark
                                    ? 'bg-gray-800 border-gray-700 focus:border-gray-500'
                                    : 'bg-white border-gray-300 focus:border-gray-500'
                                } focus:outline-none`}
                                placeholder="Your name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-3">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-3 border transition-colors duration-300 ${
                                  isDark
                                    ? 'bg-gray-800 border-gray-700 focus:border-gray-500'
                                    : 'bg-white border-gray-300 focus:border-gray-500'
                                } focus:outline-none`}
                                placeholder="your.email@example.com"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-3">
                              Subject
                            </label>
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              className={`w-full px-4 py-3 border transition-colors duration-300 ${
                                isDark
                                  ? 'bg-gray-800 border-gray-700 focus:border-gray-500'
                                  : 'bg-white border-gray-300 focus:border-gray-500'
                              } focus:outline-none`}
                              placeholder="What's this about?"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-3">
                              Message
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={8}
                              className={`w-full px-4 py-3 border  transition-colors duration-300 resize-none ${
                                isDark
                                  ? 'bg-gray-800 text-white border-gray-700 focus:border-gray-500'
                                  : 'bg-white text-black border-gray-300 focus:border-gray-500'
                              } focus:outline-none`}
                              placeholder="Shoot me a message!"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex items-center space-x-3 px-8 py-3 border transition-all duration-300 hover:scale-105 ${
                              isDark
                                ? 'border-gray-600 hover:border-gray-400 hover:bg-gray-800'
                                : 'border-gray-300 hover:border-gray-500 hover:bg-gray-50'
                            } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send size={18} />
                                <span>Send Message</span>
                              </>
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
}
