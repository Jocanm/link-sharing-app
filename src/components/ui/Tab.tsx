import { cn } from "@/util/cn";
import { cva, VariantProps } from "cva";
import { ReactNode } from "react";

const tabStyles = cva(
  "text-gray hover:text-purple rounded-lg font-semibold py-3 px-7",
  {
    variants: {
      active: {
        true: "rounded-lg font-semibold bg-purple-lightest text-purple",
      },
    },
  }
);

type TabStylesVariants = VariantProps<typeof tabStyles>;

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    TabStylesVariants {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Tab: React.FC<TabProps> = ({
  active,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}) => {
  const tabClassName = cn(tabStyles({ active }), className);

  return (
    <button {...props} className={tabClassName}>
      {leftIcon}
      {rightIcon}
      {children}
    </button>
  );
};
