
export const AppInput = ({ label, type, placeholder, className, onChange }) => {
  
  return (
    <>
      <div className="flex flex-col gap-2 w-[80%] h-[12%]">
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
        />
      </div>
    </>
  );
};
