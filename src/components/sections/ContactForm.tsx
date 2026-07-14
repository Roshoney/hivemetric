"use client";

import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { contactFormSchema, type ContactFormValues } from "./contact-form-schema";

const SERVICE_OPTIONS = [
  "AI Automation",
  "Performance Marketing",
  "CRM Implementation",
  "Sales Systems",
  "Lead Generation",
  "Funnel Optimization",
  "Business Strategy",
  "Not sure yet",
];

type SubmitStatus = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-gold-500/30 bg-gold-900/10 px-8 py-14 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-foreground">Request received</h3>
        <p className="max-w-sm text-sm text-muted">
          Thanks for reaching out — a member of our team will follow up within one
          business day to schedule your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        {...register("website")}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" autoComplete="name" error={errors.name?.message} {...register("name")} />
        <Field
          label="Work email"
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Company" autoComplete="organization" error={errors.company?.message} {...register("company")} />
        <Field
          label="Phone (optional)"
          type="tel"
          autoComplete="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-muted">What are you looking for help with?</span>
        <select
          defaultValue=""
          aria-invalid={!!errors.service}
          className="rounded-xl border border-border-strong bg-elevated px-4 py-3 text-sm text-foreground outline-none focus:border-gold-500"
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <span className="text-xs text-red-400">{errors.service.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-muted">Tell us about your business</span>
        <textarea
          rows={4}
          placeholder="What are you hoping to achieve in the next 6-12 months?"
          aria-invalid={!!errors.message}
          className="resize-none rounded-xl border border-border-strong bg-elevated px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-gold-500"
          {...register("message")}
        />
        {errors.message && (
          <span className="text-xs text-red-400">{errors.message.message}</span>
        )}
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Request Consultation"}
      </Button>
    </form>
  );
}

const Field = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }
>(({ label, error, ...props }, ref) => (
  <label className="flex flex-col gap-2">
    <span className="text-sm text-muted">{label}</span>
    <input
      ref={ref}
      aria-invalid={!!error}
      className="rounded-xl border border-border-strong bg-elevated px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-gold-500"
      {...props}
    />
    {error && <span className="text-xs text-red-400">{error}</span>}
  </label>
));
Field.displayName = "Field";
