import { cn } from "@/util/cn";
import { cva, type VariantProps } from "cva";

const buttonStyles = cva("rounded-lg py-3 w-56", {
  variants: {
    variant: {
      primary: "bg-purple text-white",
      secondary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonStylesVariants = VariantProps<typeof buttonStyles>;

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    ButtonStylesVariants {
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const buttonClassName = cn(buttonStyles({ variant }), className);

  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  );
};
