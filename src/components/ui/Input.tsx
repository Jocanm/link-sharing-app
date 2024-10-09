import { cn } from "@/util/cn";
import { cva, type VariantProps } from "cva";
import React, { ReactNode } from "react";
import { Text } from "./Text";

const inputStyles = cva(
  "w-full  pl-10 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-purple",
  {
    variants: {
      hasError: {
        true: "focus:ring-0 placeholder-red border-2 border-red text-red",
      },
    },
  }
);

type InputStylesVariants = VariantProps<typeof inputStyles>;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputStylesVariants {
  Icon?: ReactNode;
  label?: string;
  errorValidation?: string;
}

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(function Input(
  { hasError, className, label, Icon, name, errorValidation, ...props },
  ref
) {
  const inputClassName = cn(
    inputStyles({ hasError: !!errorValidation || hasError }),
    className
  );

  return (
    <div className="relative flex flex-col gap-1">
      {label && (
        <Text variant="body-s" as="label" htmlFor={name}>
          {label}
        </Text>
      )}
      <div className="relative flex items-center">
        <span className="absolute left-4 text-gray">{Icon}</span>
        <input
          id={name}
          {...props}
          className={inputClassName}
          name={name}
          ref={ref}
        />
      </div>
      {errorValidation && (
        <Text variant="body-s" className="text-red text-xs">
          {errorValidation}
        </Text>
      )}
    </div>
  );
});
