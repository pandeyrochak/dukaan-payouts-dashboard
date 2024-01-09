import OverviewCard from "./components/OverviewCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Overview = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-[#1A181E] text-xl font-medium">Overview</h2>
        {/* TODO: add dropdown here */}
        <Select defaultValue={'lastMonth'}>
          <SelectTrigger className="w-[137px] text-[#4D4D4D] text-base">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lastMonth">
              Last Month
            </SelectItem>
            <SelectItem value="threeMonth">Last 3 Months</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <OverviewCard cardTitle="Online orders" cardValue="231" />
        </div>
        <div className="w-1/2">
          <OverviewCard cardTitle="Amount received" cardValue="₹23,92,312.19" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
