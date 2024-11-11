"use client";
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const initialValues = { name: "", email: "", subject: "", message: "" };
const initialState = { values: initialValues, isLoading: false };

const Contact = () => {
  const [state, setState] = useState(initialState);
  const [status, setStatus] = useState<string | null>(null);
  const { values, isLoading } = state;


  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true }));
    setStatus(null);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: values.email,
          subject: values.subject,
          text: values.message,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus("Email sent successfully!");
        setState(initialState); // Reset form after success
      } else {
        setStatus(`Failed to send email: ${result.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred while sending the email.");
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>

              <form onSubmit={onSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  {/* Name Input */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="subject" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        placeholder="Enter the subject of your message"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      disabled={!values.name || !values.email || !values.message || !values.subject || isLoading}
                    >
                      {isLoading ? 'Sending...' : 'Submit Ticket'}
                    </button>
                  </div>
                </div>
              </form>

              {/* Status Message */}
              {status && <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{status}</p>}
            </div>
          </div>

          {/* NewsLatterBox */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
