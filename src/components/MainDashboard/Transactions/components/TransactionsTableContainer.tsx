import TablePagination from "./TablePagination";
import TransactionsTable from "./TransactionsTable";
import TransactionsTableHeader from "./TransactionsTableHeader";

const TransactionsTableContainer = () => {
  return (
    <div className="rounded-[var(--Spacing-spacing-04,8px)] shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] pt-3 pb-6 px-3 bg-white">
      <TransactionsTableHeader />
      <TransactionsTable />
      <TablePagination />
    </div>
  );
};

export default TransactionsTableContainer;
