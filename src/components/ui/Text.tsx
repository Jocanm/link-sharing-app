import { cn } from "@/util/cn";
import { cva, VariantProps } from "cva";
import React from "react";

const textStyles = cva("text-gray-dark", {
  variants: {
    variant: {
      "heading-m": "text-heading-m",
      "heading-s": "text-heading-s",
      "body-m": "text-body-m",
      "body-s": "text-body-s",
    },
  },
  defaultVariants: {
    variant: "body-m",
  },
});

type TextStylesVariants = VariantProps<typeof textStyles>;

export interface TextProps extends TextStylesVariants {
  as?: keyof JSX.IntrinsicElements;
  [key: string]: unknown;
}

export const Text: React.FC<TextProps> = ({
  as: Component = "span",
  variant,
  ...props
}) => {
  const classes = cn(textStyles({ variant }), props.className as string);

  return <Component {...props} className={classes} />;
};
