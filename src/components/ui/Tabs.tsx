import { cn } from "@/util/cn";
import { cva, VariantProps } from "cva";
import { ReactNode } from "react";

const tabsStyles = cva("text-gray font-semibold hover:text-purple", {
  variants: {
    active: {
      true: "rounded-lg font-semibold py-2 px-2 w-26 bg-purple-light text-purple",
    },
  },
});

type TabsStylesVariants = VariantProps<typeof tabsStyles>;

export interface TabsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    TabsStylesVariants {
  icon?: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  active,
  icon,
  className,
  children,
  ...props
}) => {
  const tabsClassName = cn(tabsStyles({ active }), className);

  return (
    <button {...props} className={tabsClassName}>
      {icon}
      {children}
    </button>
  );
};
