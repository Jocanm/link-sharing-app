import { Button } from "@/components/ui/Button";

interface Props {
  searchParams: Record<string, string>;
}

const HomePage = ({}: Props) => {
  const isLoading = true;
  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      <Button>button</Button>
      <Button disabled={isLoading}>button</Button>
    </div>
  );
};

export default HomePage;
