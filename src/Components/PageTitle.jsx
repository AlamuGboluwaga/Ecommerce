export const PageTitle = ({ title, className }) => {
  return (
    <>
      <h3 className={className}>{title[0].toUpperCase().concat(title.slice(1))}</h3>
    </>
  );
};


