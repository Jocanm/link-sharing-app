import { cn } from "@/util/cn";
import { cva, type VariantProps } from "cva";

const buttonStyles = cva("rounded-lg py-3 w-56 font-bold", {
  variants: {
    variant: {
      primary: "bg-purple text-white",
      secondary: "text-purple border-purple border",
    },
    hoverActive: {
      purpleLight: "hover:bg-purple-light",
    },
    disabled: {
      true: "bg-purple bg-opacity-25",
    },
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
  },
});

type ButtonStylesVariants = VariantProps<typeof buttonStyles>;

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    ButtonStylesVariants {
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  hoverActive,
  disabled,
  ...props
}) => {
  const buttonClassName = cn(
    buttonStyles({ variant, disabled, hoverActive }),
    className
  );

  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  );
};
