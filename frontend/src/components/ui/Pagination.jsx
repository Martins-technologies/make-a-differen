import { cn } from '@/utils/cn';
import { Button } from './Button';

export function Pagination({ page, pages, onPageChange, className }) {
  if (pages <= 1) return null;
  return (
    <nav className={cn('flex items-center gap-2', className)} aria-label="Pagination">
      <Button
        variant="outline"
        size="sm"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </Button>
      <span className="text-small text-muted">
        Page {page} of {pages}
      </span>
      <Button
        variant="outline"
        size="sm"
        disabled={page >= pages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </Button>
    </nav>
  );
}
