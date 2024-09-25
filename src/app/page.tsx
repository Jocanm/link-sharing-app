import { Button } from "@/components/ui/Button";

interface Props {
  searchParams: Record<string, string>;
}

const HomePage = ({}: Props) => {
  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      <Button>button</Button>
      <Button hoverActive="purpleLight">button</Button>
      <Button className="hover:bg-purple-light">button</Button>
      <Button className="bg-purple bg-opacity-25">button</Button>
      <Button disabled={true}>button</Button>
      <Button variant="secondary">button</Button>
      <Button
        variant="secondary"
        className="hover:bg-purple-lightest border border-purple text-purple"
      >
        button
      </Button>
      <Button
        variant="secondary"
        className="bg-purple-lightest text-opacity-25 text-purple"
      >
        button
      </Button>
    </div>
  );
};

export default HomePage;
