"use client";
import { Mail, Send } from "lucide-react";
import React, { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !message) {
      alert("Please fill in all fields");
      return;
    }
    setPending(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setPending(false); // stop loading
    }
  };

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Have a project in mind or just want to say hi? Contact me : )
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-left bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
      >
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className={`w-full bg-[#3B82F6]  text-white flex justify-center items-center rounded-lg cursor-pointer  py-3 text-lg gap-2 transition-all ${
            pending ? "opacity-50 cursor-not-allowed" : "hover:bg-primary"
          }`}
        >
          {pending ? "Sending..." : "Send"}
          <Send></Send>
        </button>

        {status === "success" && (
          <p className="text-green-500">Message sent!</p>
        )}
        {status === "error" && (
          <p className="text-red-500">Something went wrong.</p>
        )}
      </form>
      <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm">
        <Mail size={16}></Mail>
        <a
          className="hover:text-primary transition-colors"
          href="mailto:studentmukesh434@gmail.com"
        >
          mukeshbhandari@gmail.com
        </a>
      </div>
    </section>
  );
};
