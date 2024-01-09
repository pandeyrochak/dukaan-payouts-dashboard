import searchIcon from "../../../../assets/searchIcon.svg";
import downloadIcon from "../../../../assets/downloadIcon.svg";
import sortIcon from "../../../../assets/sortIcon.svg";

import TableButton from "./TableButton";

const TransactionsTableHeader = () => {
  return (
    <div className="flex justify-between items-center mb-3">
      {/* search bar */}
      <div className="flex items-center gap-2 px-4 py-[10px] w-full max-w-[248px] bg-transparent rounded-[4px] border-[1px] border-[#D9D9D9]">
        <img src={searchIcon} alt="" />
        <input
          type="text"
          placeholder="Search by order ID"
          className="text-[#808080] text-[15px] bg-transparent outline-none focus:outline-none focus:border-none focus:shadow-none w-full grow"
        />
      </div>
      {/* sort and filter button */}
      <div className="flex items-center gap-3">
        <TableButton buttonIcon={sortIcon} buttonText="Sort" />
        <TableButton buttonIcon={downloadIcon} />
      </div>
    </div>
  );
};

export default TransactionsTableHeader;
