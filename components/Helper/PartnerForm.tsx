"use client";

import { useState, type FormEvent } from "react";
import WhatsAppButton from "@/components/Helper/WhatsAppButton";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-none border border-[#EEF0EA]/20 bg-[#1F2A22]/60 px-4 py-3 font-[family-name:var(--font-inter)] text-base font-light text-[#EEF0EA] placeholder:text-[#EEF0EA]/40 transition focus:border-[#8A6A3B] focus:outline-none focus:ring-1 focus:ring-[#8A6A3B]";

const labelClass =
  "mb-2 block font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.22em] text-[#EEF0EA]/75";

const PartnerForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      subject: "New partner request: Silver Holem Heritage",
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex min-h-[320px] flex-col justify-center border border-[#8A6A3B]/50 p-8 md:p-10">
        <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[#8A6A3B]">
          Thank you.
        </p>
        <p className="mt-4 font-[family-name:var(--font-inter)] text-base font-light text-[#EEF0EA]">
          We have received your request and will reply to you personally.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 border border-[#EEF0EA]/15 bg-[#EEF0EA]/[0.03] p-6 md:p-10"
      >
        <label className="block">
          <span className={labelClass}>Name</span>
          <input
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Company</span>
          <input
            name="company"
            type="text"
            required
            placeholder="Your company or firm"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Phone (optional)</span>
          <input
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us who you are and what you would bring"
            className={`${fieldClass} resize-none`}
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 w-full bg-[#8A6A3B] px-6 py-4 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.3em] text-[#1F2A22] transition hover:bg-[#A07E4C] disabled:opacity-50"
        >
          {status === "sending" ? "Sending" : "Request for partner"}
        </button>

        {status === "error" && (
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#EEF0EA]">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </form>

      {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
        <>
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#EEF0EA]/20" />
            <span className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.2em] text-[#EEF0EA]/60">
              or
            </span>
            <div className="h-px flex-1 bg-[#EEF0EA]/20" />
          </div>

          <WhatsAppButton />
        </>
      )}
    </div>
  );
};

export default PartnerForm;