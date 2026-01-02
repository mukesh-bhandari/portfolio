"use client";
import { Mail, Send } from "lucide-react";
import React, { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Simulate form submission (replace with your API)
    try {
      console.log({ email, message });
      setStatus("success");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4"></h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8"></p>
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
          className="w-full flex justify-center rounded-lg cursor-pointer hover:bg-primary/90 bg-primary py-3 text-lg gap-2 group"
        >
          Send
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
          href="mailto:contact@example.com"
        >
          mukeshbhandari@gmail.com
        </a>
      </div>
    </section>
  );
};
