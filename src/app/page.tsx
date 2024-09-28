import { Tabs } from "@/components/ui/Tabs";
import { FaLink } from "react-icons/fa6";

interface Props {
  searchParams: Record<string, string>;
}

const HomePage = ({}: Props) => {
  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      Hola Mundo
      <Tabs
        active={true}
        icon={<FaLink />}
        className=" flex items-center gap-2"
      >
        Default
      </Tabs>
    </div>
  );
};

export default HomePage;
