"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/helper";

/* -----------------------------------------------
   🎨 Button Variants with CSS Variable Colors
------------------------------------------------ */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--blue)] text-white hover:bg-[var(--blue-hover)] active:bg-[var(--blue-active)] disabled:bg-[var(--blue-light-active)]",
        secondary:
          "bg-[var(--neutral-light)] text-[var(--grey-dark)] hover:bg-[var(--neutral-light-hover)] active:bg-[var(--neutral-light-active)]",
        neutral:
          "bg-[var(--neutral)] text-white hover:bg-[var(--neutral-hover)] active:bg-[var(--neutral-active)]",
        green:
          "bg-[var(--green)] text-white hover:bg-[var(--green-hover)] active:bg-[var(--green-active)]",
        danger:
          "bg-[var(--grey-dark)] text-white hover:bg-[var(--grey-hover)] active:bg-[var(--grey-active)]",
        plain: "bg-transparent text-[var(--grey)] hover:underline",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2.5 text-base",
        lg: "px-6 py-3 text-lg",
      },
      buttonStyle: {
        filled: "",
        outline:
          "bg-transparent border-2 text-[var(--blue)] border-[var(--blue)] hover:bg-[var(--blue)] hover:text-white",
      },
    },
    compoundVariants: [
      {
        buttonStyle: "outline",
        variant: "danger",
        className:
          "text-[var(--grey-dark)] border-[var(--grey-dark)] hover:bg-[var(--grey-dark)] hover:text-white",
      },
      {
        buttonStyle: "outline",
        variant: "green",
        className:
          "text-[var(--green)] border-[var(--green)] hover:bg-[var(--green)] hover:text-white",
      },
      {
        buttonStyle: "outline",
        variant: "neutral",
        className:
          "text-[var(--neutral-dark)] border-[var(--neutral-dark)] hover:bg-[var(--neutral-dark)] hover:text-white",
      },
      {
        buttonStyle: "outline",
        variant: "secondary",
        className:
          "text-[var(--grey-dark)] border-[var(--grey-dark)] hover:bg-[var(--neutral-light-hover)]",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      buttonStyle: "filled",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset"; // use this instead of type clash
}

/* -----------------------------------------------
   🔹 Spinner Component
------------------------------------------------ */
/* -----------------------------------------------
   🔹 Spinner Component
------------------------------------------------ */
const Spinner = () => {
  return (
    <span
      className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent opacity-70"
      aria-hidden="true"
    />
  );
};

/* -----------------------------------------------
   🔹 Button Component
------------------------------------------------ */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      buttonStyle = "filled",
      size = "md",
      children,
      loading = false,
      disabled,
      htmlType = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={htmlType}
        className={cn(
          buttonVariants({ variant, size, buttonStyle }),
          "gap-2",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Spinner />
            <span className="opacity-80">Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
