import React from "react";
import { Loader2 } from "lucide-react"; // Optional: use any loading spinner icon

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = "",
            variant = "primary",
            size = "md",
            isLoading = false,
            leftIcon,
            rightIcon,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const baseClasses =
            "inline-flex items-center justify-center font-medium transition-colors rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2";

        const variantClasses =
            variant === "primary"
                ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                : variant === "secondary"
                ? "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400"
                : variant === "danger"
                ? "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
                : "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-300";

        const sizeClasses =
            size === "sm"
                ? "text-sm px-3 py-1.5"
                : size === "lg"
                ? "text-lg px-6 py-3"
                : "text-base px-4 py-2";

        const disabledClasses =
            disabled || isLoading ? "opacity-60 cursor-not-allowed" : "";

        const finalClassName =
            `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`.trim();

        return (
            <button
                ref={ref}
                className={finalClassName}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {rightIcon && <span className="ml-2">{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = "Button";
export default Button;
