import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InfoIcon, TriangleIcon } from "lucide-react";
import TransactionsTableRow from "./TransactionsTableRow";

const TransactionsTable = () => {
  const tableData = {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  };

  return (
    <Table className="min-w-[670px] overflow-y-auto">
      <TableHeader className="bg-[#f2f2f2] rounded-[4px]">
        <TableRow className="">
          <TableHead className="text-[#4d4d4d] text-sm">Order ID</TableHead>
          <TableHead className="text-[#4d4d4d] text-sm flex items-center gap-1">
            Order date
            <TriangleIcon className="fill-black w-2 h-2 rotate-180" />
          </TableHead>
          <TableHead className="text-[#4d4d4d] text-sm text-right">
            Order amount
          </TableHead>
          <TableHead className="text-[#4d4d4d] text-sm text-right flex gap-1 items-center justify-end">
            <span className="text-inherit">Transaction feeds</span>
            <InfoIcon className="w-[14px] h-[14px]" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 18 }).map((_, index) => (
          <TransactionsTableRow key={index} {...tableData} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
