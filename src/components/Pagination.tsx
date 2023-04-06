import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function PaginationList({
  currentPage,
  goToPage,
  lastPage,
}: {
  currentPage: number;
  lastPage: number;
  goToPage: (page: number) => void;
}) {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink first href="#" onClick={() => goToPage(1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          previous
          href="#"
          onClick={() => goToPage(Math.max(1, currentPage - 1))}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => goToPage(1)}>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => goToPage(2)}>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => goToPage(3)}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => goToPage(4)}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => goToPage(5)}>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          next
          href="#"
          onClick={() => goToPage(Math.min(lastPage, currentPage + 1))}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" onClick={() => goToPage(lastPage)} />
      </PaginationItem>
    </Pagination>
  );
}
