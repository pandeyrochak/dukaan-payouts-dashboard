import TransactionsTableContainer from "./components/TransactionsTableContainer";

const Transactions = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* title */}
      <div className="text-[#1A181E] text-xl  font-medium">
        Transactions | This Month
      </div>
      <TransactionsTableContainer />
    </div>
  );
};

export default Transactions;
