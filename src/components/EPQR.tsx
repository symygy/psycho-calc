import React, { useRef, useState } from "react";
import { flagsEPQR, stensWomenEPQR } from "../lib/flags";

const EPQR: React.FC = () => {
  const [age, setAge] = useState(35)
  const [sex, setSex] = useState('K')
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});
  const [invalidInputs, setInvalidInputs] = useState<{
    [key: number]: boolean;
  }>({});
  const renderFlagValue = (value: boolean | null): string => {
    if (value === null) return "-";
    if (value === true) return "TAK";
    if (value === false) return "NIE";
    return "-";
  };

  const allQuestions: number[] = Array.from(
    new Set(
      Object.values(flagsEPQR).flatMap((obj) => Object.keys(obj).map(Number))
    )
  ).sort((a, b) => a - b);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    question: number
  ) => {
    const value = e.target.value.toLowerCase();
    setInputValues((prevValues) => ({
      ...prevValues,
      [question]: value,
    }));

    setInvalidInputs((prevInvalids) => ({
      ...prevInvalids,
      [question]: value !== "n" && value !== "t",
    }));

    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleClearInputs = () => {
    setInputValues({});
    setInvalidInputs({});
    inputRefs.current.forEach((input) => {
      if (input) input.value = "";
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateMatches = () => {
    let matches = { N: 0, E: 0, P: 0, K: 0 };
    allQuestions.forEach((question) => {
      const value = inputValues[question];
      if (value) {
        if (flagsEPQR.N[question] !== undefined) {
          if (
            (flagsEPQR.N[question] && value === "t") ||
            (!flagsEPQR.N[question] && value === "n")
          ) {
            matches.N++;
          }
        }
        if (flagsEPQR.E[question] !== undefined) {
          if (
            (flagsEPQR.E[question] && value === "t") ||
            (!flagsEPQR.E[question] && value === "n")
          ) {
            matches.E++;
          }
        }
        if (flagsEPQR.P[question] !== undefined) {
          if (
            (flagsEPQR.P[question] && value === "t") ||
            (!flagsEPQR.P[question] && value === "n")
          ) {
            matches.P++;
          }
        }
        if (flagsEPQR.K[question] !== undefined) {
          if (
            (flagsEPQR.K[question] && value === "t") ||
            (!flagsEPQR.K[question] && value === "n")
          ) {
            matches.K++;
          }
        }
      }
    });
    return matches;
  };

  const matches = calculateMatches();
  const hasInvalidInputs = Object.values(invalidInputs).some(
    (isInvalid) => isInvalid
  );

  const calculateSten = () => {
    let stens = { N: 0, E: 0, P: 0, K: 0 };
    stensWomenEPQR.map((item, index) => {
      if (age < 31 ) {
        if (matches.N === index) stens.N = item.N.below
        if (matches.E === index) stens.E = item.E.below
        if (matches.P === index) stens.P = item.P.below
        if (matches.K === index) stens.K = item.K.below
      } else {
        if (matches.N === index) stens.N = item.N.above
        if (matches.E === index) stens.E = item.E.above
        if (matches.P === index) stens.P = item.P.above
        if (matches.K === index) stens.K = item.K.above
      }
    });

    return stens;
  };

  const calculatedStens = calculateSten();

  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-6">
            <div className="">
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
                  {allQuestions.map((question, index) => (
                    <tr key={question}>
                      <th>{question}</th>
                      <td>{renderFlagValue(flagsEPQR.N[question] ?? null)}</td>
                      <td>{renderFlagValue(flagsEPQR.E[question] ?? null)}</td>
                      <td>{renderFlagValue(flagsEPQR.P[question] ?? null)}</td>
                      <td>{renderFlagValue(flagsEPQR.K[question] ?? null)}</td>
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
                              onChange={(e) =>
                                handleInputChange(e, index, question)
                              }
                            />
                          </label>
                        </td>
                      }
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="mt-4">
              <strong>Matches for N: {matches.N}</strong>
              <strong>Sten for N: {calculatedStens.N}</strong>
            </div>
            <div>
              <strong>Matches for E: {matches.E}</strong>
              <strong>Sten for E: {calculatedStens.E}</strong>
            </div>
            <div>
              <strong>Matches for P: {matches.P}</strong>
              <strong>Sten for P: {calculatedStens.P}</strong>
            </div>
            <div>
              <strong>Matches for K: {matches.K}</strong>
              <strong>Sten for K: {calculatedStens.K}</strong>
            </div>
            <div>
              {hasInvalidInputs && (
                <div>Formularz zawiera nieprawidłowe wartości</div>
              )}
            </div>
            <button disabled={hasInvalidInputs} onClick={handleClearInputs} className="btn btn-primary">
              Wyczyść formularz
            </button>
          </div>
        </div>
        <div>
          STENY
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
                <th align="center"> &lt; 30</th>
                <th align="center"> &gt; 31</th>
                <th align="center" className="bg-gray-300">
                  &lt; 30
                </th>
                <th align="center" className="bg-gray-300">
                  &gt; 31
                </th>
                <th align="center"> &lt; 30</th>
                <th align="center"> &gt; 31</th>
                <th align="center" className="bg-gray-300">
                  &lt; 30
                </th>
                <th align="center" className="bg-gray-300">
                  &gt; 31
                </th>
              </tr>
            </thead>
            <tbody>
              {stensWomenEPQR.map((item, key) => (
                <tr key={key} className="cursor-defaul">
                  <th className="bg-gray-300">{key}</th>
                  <td className="text-center hover:bg-green-300">
                    {item.N.below}
                  </td>
                  <td className="text-center hover:bg-green-300">
                    {item.N.above}
                  </td>
                  <td className="text-center hover:bg-green-300 bg-gray-300">
                    {item.E.below}
                  </td>
                  <td className="text-center hover:bg-green-300 bg-gray-300">
                    {item.E.above}
                  </td>
                  <td className="text-center hover:bg-green-300">
                    {item.P.below}
                  </td>
                  <td className="text-center hover:bg-green-300">
                    {item.P.above}
                  </td>
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
        </div>
      </div>
    </>
  );
};

export default EPQR;
