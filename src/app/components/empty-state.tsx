interface EmptyStateProps {
  title?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No results found.",
}) => {
  return (
    <div className="flex w-full min-h-[60vh] justify-center items-center">
      <p className="text-xl font-bold text-center capitalize headline text-gray-dark">
        {title}
      </p>
    </div>
  );
};

export default EmptyState;
