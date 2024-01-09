import Overview from "./Overview/Overview";
import Transactions from "./Transactions/Transactions";

const MainDashboard = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col gap-8 max-w-[1440px] mx-auto">
        <Overview />
        <Transactions />
      </div>
    </div>
  );
};

export default MainDashboard;
