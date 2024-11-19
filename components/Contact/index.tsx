"use client";
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = { name: "", email: "", subject: "", message: "" };
const initialState = { values: initialValues, isLoading: false };

const Contact = () => {
  const [state, setState] = useState(initialState);
  const { values, isLoading } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true }));

    const httpStatusMessages: any = {
      400: "Bad Request - The request could not be understood or was missing required parameters.",
      401: "Unauthorized - Authentication failed or user does not have permissions for the desired action.",
      403: "Forbidden - Authentication succeeded, but authenticated user does not have access to the resource.",
      404: "Not Found - The requested resource could not be found.",
      500: "Internal Server Error - An error occurred on the server.",
      502: "Bad Gateway - Invalid response from an upstream server.",
      503: "Service Unavailable - The server is temporarily unavailable.",
      // Add more status codes as needed
    };

    const url = process.env.NEXT_PUBLIC_API_URL;
    const restructureEmailBody = `${values.message} \n \n Client Details \n Sender Email: ${values.email} \n Sender Name: ${values.name}`;
    const payload = {
      to: "support@bjtmtechnologies.com",
      senderName: values.name,
      senderEmail: values.email,
      subject: values.subject,
      emailBody: restructureEmailBody,
    };

    fetch(url, {
      method: "POST",
      headers: {
        accept: "/",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res: any) => {
        console.log(res);
        if (res?.status != 201) {
          setState((prev) => ({ ...prev, isLoading: false })); // Reset loading state only on error
          toast.error(httpStatusMessages[res?.status]);
        } else {
          toast.success("Email sent successfully!");
          setState({ values: initialValues, isLoading: false }); // Reset form and loading state
        }
      })
      .catch((err) => {
        console.error("err", err);
        console.error("err?.data", err?.data);
        console.error("err?.message", err?.message);
        toast.error("Failed to send email. Please try again.");
        setState((prev) => ({ ...prev, isLoading: false })); // Reset loading state only on error
      });
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
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
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
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
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
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
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        placeholder="Enter the subject of your message"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none sm:px-6 sm:py-3 sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
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
                      disabled={
                        !values.name ||
                        !values.email ||
                        !values.message ||
                        !values.subject ||
                        isLoading
                      }
                    >
                      {isLoading ? "Sending..." : "Submit Ticket"}
                    </button>
                  </div>
                </div>
              </form>

              <ToastContainer />
            </div>
          </div>

          {/* NewsLatterBox */}
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
