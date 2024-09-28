import { Tab } from "@/components/ui/Tab";
import { FaLink } from "react-icons/fa6";

interface Props {
  searchParams: Record<string, string>;
}

const HomePage = ({}: Props) => {
  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      Hola Mundo
      <Tab
        active={false}
        icon={<FaLink />}
        className=" flex items-center gap-2"
      >
        Default
      </Tab>
    </div>
  );
};

export default HomePage;
