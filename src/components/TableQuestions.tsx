import React from "react";
import { CissObject, EpqrObject } from "../lib/flags";

type Props = {
  questions: number[];
  flags: EpqrObject | CissObject;
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
  invalidInputs: { [key: number]: boolean };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    question: number
  ) => void;
  renderFlagValue: (value: boolean | null) => string;
};

const TableQuestions = ({
  questions,
  flags,
  inputRefs,
  invalidInputs,
  handleInputChange,
  renderFlagValue,
}: Props) => {
  const isEpqrObject = (
    flags: EpqrObject | CissObject
  ): flags is EpqrObject => {
    return (flags as EpqrObject).N !== undefined;
  };

  return (
    <table className="table">
      <thead>
        {isEpqrObject(flags) ? (
          <tr>
            <th></th>
            <th>N</th>
            <th>E</th>
            <th>P</th>
            <th>K</th>
            <th>Odpowiedzi</th>
          </tr>
        ) : (
          <tr>
            <th></th>
            <th>SSZ</th>
            <th>SSE</th>
            <th>SSU</th>
            <th>ACZ</th>
            <th>PKT</th>
            <th>Odpowiedzi</th>
          </tr>
        )}
      </thead>
      <tbody>
        {questions.map((question, index) => (
          <tr key={question}>
            <th>{question}</th>
            {isEpqrObject(flags) ? (
              <>
                <td>{renderFlagValue(flags.N[question] ?? null)}</td>
                <td>{renderFlagValue(flags.E[question] ?? null)}</td>
                <td>{renderFlagValue(flags.P[question] ?? null)}</td>
                <td>{renderFlagValue(flags.K[question] ?? null)}</td>
              </>
            ) : (
              <>
                <td>{renderFlagValue(flags.SSZ[question] ?? null)}</td>
                <td>{renderFlagValue(flags.SSE[question] ?? null)}</td>
                <td>{renderFlagValue(flags.SSU[question] ?? null)}</td>
                <td>{renderFlagValue(flags.ACZ[question] ?? null)}</td>
                <td>{renderFlagValue(flags.PKT[question] ?? null)}</td>
              </>
            )}
            {
              <td>
                <label className="input input-bordered flex items-center gap-1 input-sm">
                  <input
                    type={isEpqrObject(flags) ? 'text' : 'number'}
                    className={`grow ${
                      invalidInputs[question] ? "text-red-500" : ""
                    }`}
                    placeholder=""
                    maxLength={1}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleInputChange(e, index, question)}
                  />
                </label>
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableQuestions;
