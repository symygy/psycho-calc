import { stenCissObj } from "../lib/flags";

type Props = {
  data: stenCissObj[];
  age: { ge: number; le: number };
};

const CissTableStens = ({ data, age }: Props) => {
  return (
    <table className="table table-xs mt-4">
      <thead>
        <tr>
          <th align="center" className="bg-gray-300">
            lvl
          </th>
          <th colSpan={2} align="center">
            SSZ
          </th>
          <th colSpan={2} align="center" className="bg-gray-300">
            SSE
          </th>
          <th colSpan={2} align="center">
            SSU
          </th>
          <th colSpan={2} align="center" className="bg-gray-300">
            ACZ
          </th>
          <th colSpan={2} align="center">
            PKT
          </th>
        </tr>
        <tr>
          <th className="bg-gray-300"></th>
          <th align="center"> &ge; {age.ge}</th>
          <th align="center"> &le; {age.le}</th>
          <th align="center" className="bg-gray-300">
            &ge; {age.ge}
          </th>
          <th align="center" className="bg-gray-300">
            &le; {age.le}
          </th>
          <th align="center"> &ge; {age.ge}</th>
          <th align="center"> &le; {age.le}</th>
          <th align="center" className="bg-gray-300">
            &ge; {age.ge}
          </th>
          <th align="center" className="bg-gray-300">
            &le; {age.le}
          </th>
          <th align="center"> &ge; {age.ge}</th>
          <th align="center"> &le; {age.le}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key} className="cursor-defaul">
            <th className="bg-gray-300">{key}</th>
            <td className="text-center hover:bg-green-300">
              {item.SSZ.bottom}
            </td>
            <td className="text-center hover:bg-green-300">{item.SSZ.top}</td>

            <td className="text-center hover:bg-green-300 bg-gray-300">
              {item.SSE.bottom}
            </td>
            <td className="text-center hover:bg-green-300 bg-gray-300">
              {item.SSE.top}
            </td>

            <td className="text-center hover:bg-green-300">
              {item.SSU.bottom}
            </td>
            <td className="text-center hover:bg-green-300">{item.SSU.top}</td>

            <td className="text-center hover:bg-green-300 bg-gray-300">
              {item.ACZ.bottom}
            </td>
            <td className="text-center hover:bg-green-300 bg-gray-300">
              {item.ACZ.top}
            </td>

            <td className="text-center hover:bg-green-300">
              {item.PKT.bottom}
            </td>
            <td className="text-center hover:bg-green-300">{item.PKT.top}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CissTableStens;
