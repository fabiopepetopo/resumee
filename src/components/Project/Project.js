export const Project = ({ title, description }) => {
  return (
    <div className="text-sm my-3">
      <p className="font-bold mb-1">{title}</p>
      <p>{description}</p>
    </div>
  );
};
