const TABLE_HEAD = ["Name", "Location", "Employed"];

interface TableRow {
  name: string;
  location: string;
  employed: string;
}

interface TableProps {
  rows: TableRow[];
}

export function DefaultTable({ rows }: TableProps) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full py-2">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {TABLE_HEAD.map((item, index) => {
                    return (
                      <th key={index} scope="col" className="px-6 py-4">
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b dark:border-neutral-500 even:bg-gray-100"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.location}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.employed}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
