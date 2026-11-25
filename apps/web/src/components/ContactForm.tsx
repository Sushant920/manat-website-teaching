"use client";

import { FormEvent, useId, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact = false }: ContactFormProps) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      program: String(data.get("program") || "").trim(),
      message:
        String(data.get("message") || "").trim() ||
        (compact ? "Quick enquiry from homepage form." : ""),
      website: String(data.get("website") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("Enquiry sent - we will call you back.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not send. Please call or WhatsApp us.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4">
      {/* Honeypot - hidden from users; bots that fill it are ignored server-side */}
      <div
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <label htmlFor={`${uid}-website`}>Website</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field
        id={`${uid}-name`}
        label="Full name *"
        name="name"
        required
        autoComplete="name"
      />
      <Field
        id={`${uid}-phone`}
        label="Contact No. *"
        name="phone"
        type="tel"
        required
        autoComplete="tel"
      />
      <div>
        <label
          htmlFor={`${uid}-program`}
          className="mb-1.5 block text-sm font-semibold text-ink"
        >
          Course *
        </label>
        <select
          id={`${uid}-program`}
          name="program"
          required
          className="input-field"
          defaultValue=""
        >
          <option value="" disabled>
            Select a course
          </option>
          <option value="School">School (up to Class 10)</option>
          <option value="Junior College">Junior College - Commerce</option>
          <option value="Graduation">Graduation - Commerce</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <Field
        id={`${uid}-email`}
        label={compact ? "Email (optional)" : "Email *"}
        name="email"
        type="email"
        required={!compact}
        autoComplete="email"
      />

      {!compact ? (
        <div>
          <label
            htmlFor={`${uid}-message`}
            className="mb-1.5 block text-sm font-semibold text-ink"
          >
            Message *
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={4}
            required
            placeholder="Class/board, subjects, and preferred timing"
            className="input-field h-auto py-2.5"
          />
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Request a Call Back"}
      </button>

      {message ? (
        <p
          role="status"
          className={`text-sm font-medium ${
            status === "success" ? "text-brand-deep" : "text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="input-field"
      />
    </div>
  );
}
