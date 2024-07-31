import { StensObject } from "../lib/flags";

type Props = {
  data: StensObject[];
};

const TableStens = ({ data }: Props) => {
  return (
    <table className="table table-xs mt-4">
      <thead>
        <tr>
          <th align="center" className="bg-gray-300">
            lvl
          </th>
          <th colSpan={2} align="center">
            N
          </th>
          <th colSpan={2} align="center" className="bg-gray-300">
            E
          </th>
          <th colSpan={2} align="center">
            P
          </th>
          <th colSpan={2} align="center" className="bg-gray-300">
            K
          </th>
        </tr>
        <tr>
          <th className="bg-gray-300"></th>
          <th align="center"> &le; 30</th>
          <th align="center"> &ge; 31</th>
          <th align="center" className="bg-gray-300">
            &le; 30
          </th>
          <th align="center" className="bg-gray-300">
            &ge; 31
          </th>
          <th align="center"> &le; 30</th>
          <th align="center"> &ge; 31</th>
          <th align="center" className="bg-gray-300">
            &le; 30
          </th>
          <th align="center" className="bg-gray-300">
            &ge; 31
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key} className="cursor-defaul">
            <th className="bg-gray-300">{key}</th>
            <td className="text-center hover:bg-green-300">{item.N.below}</td>
            <td className="text-center hover:bg-green-300">{item.N.above}</td>
            <td className="text-center hover:bg-green-300 bg-gray-300">
              {item.E.below}
            </td>
            <td className="text-center hover:bg-green-300 bg-gray-300">
              {item.E.above}
            </td>
            <td className="text-center hover:bg-green-300">{item.P.below}</td>
            <td className="text-center hover:bg-green-300">{item.P.above}</td>
            <td className="text-center hover:bg-green-300 bg-gray-300">
              {item.K.below}
            </td>
            <td className="text-center hover:bg-green-300 bg-gray-300">
              {item.K.above}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableStens;
