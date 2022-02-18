interface Props<T> {
  rows: T[];
  columnsTitles: string[];
  onClickRow: (r: T) => void;
}

export const Table = <T,>({ rows, columnsTitles, onClickRow }: Props<T>) => (
  <table>
    <thead>
      <tr>
        {columnsTitles.map((title, i) => (
          <th key={`${title}${i}`} align="center">
            {title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr key={i}>
          {Object.entries(row).map(([key, value], i) => (
            <td
              onClick={() => onClickRow(row)}
              key={`${key}${i}`}
              align="center"
            >
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
