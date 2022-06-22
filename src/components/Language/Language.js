export const Language = ({ name, level }) => {
  return (
    <p className="mb-1 mx-1 p-1 inline-block capitalize border border-[#ff8675]">
      <span className="font-bold">{name}</span>: {level}
    </p>
  );
};
