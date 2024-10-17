interface Props {
  searchParams: Record<string, string>;
}

const HomePage = ({}: Props) => {
  return (
    <div className="flex gap-2 flex-col justify-center items-center">Home</div>
  );
};

export default HomePage;
