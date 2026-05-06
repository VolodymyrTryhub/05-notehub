import css from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className={css.pagination}>
      {pages.map((p) => (
        <li
          key={p}
          className={p === page ? css.active : ""}
          onClick={() => onPageChange(p)}
        >
          <a href="#">{p}</a>
        </li>
      ))}
    </ul>
  );
}
