import { cn } from "@/util/cn";
import { cva, VariantProps } from "cva";
import { ReactNode } from "react";

const tabStyles = cva("text-gray font-semibold hover:text-purple", {
  variants: {
    active: {
      true: "rounded-lg font-semibold py-2 px-2 w-26 bg-purple-light text-purple",
    },
  },
});

type TabStylesVariants = VariantProps<typeof tabStyles>;

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    TabStylesVariants {
  icon?: ReactNode;
}

export const Tab: React.FC<TabProps> = ({
  active,
  icon,
  className,
  children,
  ...props
}) => {
  const tabClassName = cn(tabStyles({ active }), className);

  return (
    <button {...props} className={tabClassName}>
      {icon}
      {children}
    </button>
  );
};
