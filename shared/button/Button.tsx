"use client";
import React from "react";
import styled, { css } from "styled-components";
import { Loader2 } from "lucide-react";

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
    return (
      <StyledButton
        ref={ref}
        className={className}
        $variant={variant}
        $size={size}
        $disabled={!!disabled || isLoading}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span style={{ marginRight: "0.5rem", display: "flex" }}>
            <Loader2
              style={{
                width: 16,
                height: 16,
                animation: "spin 1s linear infinite",
              }}
            />
          </span>
        )}
        {leftIcon && (
          <span style={{ marginRight: "0.5rem", display: "flex" }}>
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span style={{ marginLeft: "0.5rem", display: "flex" }}>
            {rightIcon}
          </span>
        )}
        <style>
          {`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                    `}
        </style>
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
export default Button;

const variantStyles = {
  primary: css`
    background: #2563eb;
    color: #fff;
    &:hover {
      background: #1d4ed8;
    }
    &:focus {
      box-shadow: 0 0 0 2px #3b82f6;
    }
  `,
  secondary: css`
    background: #e5e7eb;
    color: #1f2937;
    &:hover {
      background: #d1d5db;
    }
    &:focus {
      box-shadow: 0 0 0 2px #9ca3af;
    }
  `,
  danger: css`
    background: #dc2626;
    color: #fff;
    &:hover {
      background: #b91c1c;
    }
    &:focus {
      box-shadow: 0 0 0 2px #ef4444;
    }
  `,
  ghost: css`
    background: transparent;
    color: #1f2937;
    &:hover {
      background: #f3f4f6;
    }
    &:focus {
      box-shadow: 0 0 0 2px #d1d5db;
    }
  `,
};

const sizeStyles = {
  sm: css`
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  `,
  md: css`
    font-size: 1rem;
    padding: 0.5rem 1rem;
  `,
  lg: css`
    font-size: 1.125rem;
    padding: 0.75rem 1.5rem;
  `,
};
const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 1rem;
  transition: background 0.2s, color 0.2s;
  outline: none;
  border: none;
  position: relative;
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
    ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;
