import React from "react";
import { FlagsObject } from "../lib/flags";

type Props = {
  questions: number[];
  flags: FlagsObject;
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
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>N</th>
          <th>E</th>
          <th>P</th>
          <th>K</th>
          <th>Pytania</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question, index) => (
          <tr key={question}>
            <th>{question}</th>
            <td>{renderFlagValue(flags.N[question] ?? null)}</td>
            <td>{renderFlagValue(flags.E[question] ?? null)}</td>
            <td>{renderFlagValue(flags.P[question] ?? null)}</td>
            <td>{renderFlagValue(flags.K[question] ?? null)}</td>
            {
              <td>
                <label
                  key={question}
                  className="input input-bordered flex items-center gap-1 input-sm"
                >
                  <input
                    type="text"
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
