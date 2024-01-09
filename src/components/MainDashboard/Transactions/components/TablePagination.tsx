import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const TablePagination = () => {
  return (
    <Pagination className="mt-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="border-[1px] border-[#d9d9d9]"
          />
        </PaginationItem>
        <PaginationItem className="text-[#4d4d4d] font-normal text-sm">
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>   
        <PaginationItem className="text-[#4d4d4d] font-normal text-sm">
          <PaginationEllipsis />
        </PaginationItem>
        {Array.from({ length: 9 }, (_, i) => i + 10).map((page) => (
          <PaginationItem
            className="text-[#4d4d4d] font-normal text-sm"
            key={page}
          >
            <PaginationLink href="#">{page}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" className="border-[1px] border-[#d9d9d9]" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
