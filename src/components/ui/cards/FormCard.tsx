'use client';
import { useState } from 'react';
import CardBase from './CardBase';
import ThemedIcon from '../ThemedIcon';
import { ArrowRight } from 'lucide-react';

interface FormCardProps {
  header: string;
}

export default function FormCard({ header }: FormCardProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  console.log(isSubmitting);

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
      {submitted ? (
        <div className="text-center py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 sm:gap-10 md:gap-12">
            <div className="lg:col-span-9">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">
                Message Sent
              </h3>
              <p className={`text-base sm:text-lg font-light mb-6 sm:mb-8 `}>
                Thank you for reaching out. I&#39;ll get back to you soon.
              </p>
              <button
                onClick={resetForm}
                className={`inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-2.5 sm:py-3 border rounded transition-all duration-300 hover:scale-105`}
              >
                <span>Return</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <CardBase header={header}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label
              htmlFor="name"
              className="block mb-1 text-[var(--foreground-paragraph)]"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-2 focus:outline-none focus:ring-0 text-[var(--foreground-paragraph)] border border-[var(--button-border-color)] rounded bg-[var(--background)]"
            />

            <label
              htmlFor="email"
              className="block mb-1 text-[var(--foreground-paragraph)]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your.email@gmail.com"
              required
              className="w-full p-2 focus:outline-none focus:ring-0 text-[var(--foreground-paragraph)] border border-[var(--button-border-color)] rounded bg-[var(--background)]"
            />

            <label
              htmlFor="subject"
              className="block mb-1 text-[var(--foreground-paragraph)]"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this About?"
              required
              className="w-full p-2 focus:outline-none focus:ring-0 text-[var(--foreground-paragraph)] border border-[var(--button-border-color)] rounded bg-[var(--background)]"
            />

            <label
              htmlFor="message"
              className="block mb-1 text-[var(--foreground-paragraph)]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Shoot me a message!"
              required
              rows={4}
              className="w-full p-2 focus:outline-none focus:ring-0 text-[var(--foreground-paragraph)] border border-[var(--button-border-color)] rounded bg-[var(--background)]"
            />

            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 border border-[var(--button-border-color)] text-[var(--foreground-paragraph)] rounded hover:opacity-80 bg-transparent"
            >
              <ThemedIcon
                name="Message"
                alt="Send icon"
                className="w-[16px] h-[16px]"
              />
              Send Message
            </button>
          </form>
        </CardBase>
      )}
    </>
  );
}

/*
<form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="block mb-1 text-white">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-2  text-white border border-white rounded"
          />
          <label htmlFor="email" className="block mb-1  text-white">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your.email@gmail.com"
            required
            className="w-full p-2 border text-white border-white rounded"
          />
          <label htmlFor="subject" className="block mb-1  text-white">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this About?"
            required
            className="w-full p-2  border text-white border-white rounded"
          />
          <label htmlFor="message" className="block mb-1  text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Shoot me a message!"
            required
            rows={4}
            className="w-full p-2 bg-transparent border text-white border-gray-300 rounded"
          />

          <button
            type="submit"
            className="flex items-center gap-1.5 px-4 py-2 border border-white text-white rounded hover:opacity-80"
          >
            <ThemedIcon
              name="Message"
              alt="Send icon"
              className="w-[16px] h-[16px]"
            />
            Send Message
          </button>
        </form>
*/
