import "./TableSkeleton.css";

function TableSkeleton({ columns, rows = 5 }) {
  return Array.from({ length: rows }, (_, rowIndex) => (
    <tr className="skeleton-row" key={`skeleton-${rowIndex}`} aria-hidden="true">
      {Array.from({ length: columns }, (_, columnIndex) => (
        <td key={`skeleton-cell-${columnIndex}`}>
          <span
            className="table-skeleton"
            style={{ width: `${55 + ((rowIndex + columnIndex) % 4) * 10}%` }}
          />
        </td>
      ))}
    </tr>
  ));
}

export default TableSkeleton;
