interface TableButtonsProps {
  buttonText?: string;
  buttonIcon?: string;
}

const TableButton = ({ buttonText, buttonIcon }: TableButtonsProps) => {
  return (
    <button className="p-2 rounded-[4px] bg-white flex items-center gap-[6px] border-[1px] border-[#d9d9d9]">
      {buttonText && (
        <span className="text-[#4D4D4D] text-base">{buttonText}</span>
      )}
      {buttonIcon && <img src={buttonIcon} alt="" />}
    </button>
  );
};

export default TableButton;
