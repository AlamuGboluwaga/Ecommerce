export const AppButton = ({ label, className, onClick }) => {
  return (
    <div className="flex justify-center items-center w-[80%] h-[12%]">
      <button onClick={onClick} className={className}>
        {label[0].toUpperCase().concat(label.slice(1))}
      </button>
    </div>
  );
};
