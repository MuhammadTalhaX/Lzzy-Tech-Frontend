"use client";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export default function Button({
  className = "",
  ...p
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50",
        className,
      )}
      {...p}
    />
  );
}
