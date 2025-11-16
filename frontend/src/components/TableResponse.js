const TableResponse = ({ tableData }) => {
  if (!tableData || tableData.length === 0) return null;

  return (
    <div className="bg-[#2d2d2d] rounded-lg p-0 overflow-hidden mt-3 w-full max-w-[60%] border border-[#3a3a3a]">
      <table className="w-full text-sm border-collapse">
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#2d2d2d]" : "bg-[#262626]"
              } border-b border-[#3a3a3a] last:border-none`}
            >
              <td className="py-2 px-3 font-medium text-white w-[50%]">
                {row.key}
              </td>
              <td className="py-2 px-3 text-[#cccccc]">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableResponse;
