export const LongText = () => {
  return (
    <div className="max-w-[300px] bg-red-500">
      {Array.from({ length: 50 }).map((_, index) => (
        <p key={index}>This is line {index + 1}.</p>
      ))}
    </div>
  );
};
