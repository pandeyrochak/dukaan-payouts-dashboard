import { TableCell, TableRow } from "@/components/ui/table";

interface RowData {
  orderId: string;
  orderDate: string;
  orderAmount: string;
  transactionFees: string;
}

const TransactionsTableRow = (rowData: RowData) => {
  return (
    <TableRow>
      <TableCell className="text-[#146EB4] text-sm">
        <a href="">{rowData.orderId}</a>
      </TableCell>
      <TableCell className="text-sm text-[#1A181E]">
        {rowData.orderDate}
      </TableCell>
      <TableCell className="text-right text-sm text-[#1A181E]">
        {rowData.orderAmount}
      </TableCell>
      <TableCell className="text-right">{rowData.transactionFees}</TableCell>
    </TableRow>
  );
};

export default TransactionsTableRow;
