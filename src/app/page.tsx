import { TodoItem } from "@/components/TodoItem";
import { Suspense } from "react";

interface Props {
  searchParams: Record<string, string>;
}

const HomePage = ({ searchParams }: Props) => {
  const id = parseInt(searchParams.id ?? "1", 10);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TodoItem id={id} />
      </Suspense>
    </div>
  );
};

export default HomePage;
