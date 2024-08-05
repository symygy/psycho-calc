import React, { useEffect, useRef, useState } from "react";
import { flagsCISS, stenCissObj, stensCISS, stensMenEPQR } from "../lib/flags";
import TableQuestions from "./TableQuestions";
import CissResults from "./CissResults";
import CissTableStens from "./CissTableStens";

const initCissValue = { SSZ: 0, SSE: 0, SSU: 0, ACZ: 0, PKT: 0 };

const CissTab = () => {
  const [age, setAge] = useState("");
  const [matches, setMatches] = useState(initCissValue);
  const [stens, setStens] = useState(initCissValue);
  const [inputValues, setInputValues] = useState<{ [key: number]: number }>({});
  const [invalidInputs, setInvalidInputs] = useState<{
    [key: number]: boolean;
  }>({});

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const renderFlagValue = (value: boolean | null): string => {
    if (value === null) return "-";
    if (value === true) return "TAK";
    return "-";
  };

  const handleClearInputs = () => {
    setAge("");
    setInputValues({});
    setInvalidInputs({});
    setStens(initCissValue);
    setMatches(initCissValue);
    inputRefs.current.forEach((input) => {
      if (input) input.value = "";
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hasInvalidInputs = Object.values(invalidInputs).some(
    (isInvalid) => isInvalid
  );

  const allQuestions: number[] = Array.from(
    new Set(
      Object.values(flagsCISS).flatMap((obj) => Object.keys(obj).map(Number))
    )
  ).sort((a, b) => a - b);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    question: number
  ) => {
    const value = Number(e.target.value);
    setInputValues((prevValues) => ({
      ...prevValues,
      [question]: value,
    }));

    setInvalidInputs((prevInvalids) => ({
      ...prevInvalids,
      [question]: value < 1 || value > 5,
    }));

    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const calculateMatches = () => {
    let tempMatches = { ...initCissValue };

    allQuestions.forEach((question) => {
      const value = inputValues[question];
      if (value) {
        if (flagsCISS.SSZ[question] !== undefined) {
          if (flagsCISS.SSZ[question] && value > 0 && value < 6) {
            tempMatches.SSZ += value;
          }
        }
        if (flagsCISS.SSE[question] !== undefined) {
          if (flagsCISS.SSE[question] && value > 0 && value < 6) {
            tempMatches.SSE += value;
          }
        }
        if (flagsCISS.SSU[question] !== undefined) {
          if (flagsCISS.SSU[question] && value > 0 && value < 6) {
            tempMatches.SSU += value;
          }
        }
        if (flagsCISS.ACZ[question] !== undefined) {
          if (flagsCISS.ACZ[question] && value > 0 && value < 6) {
            tempMatches.ACZ += value;
          }
        }
        if (flagsCISS.PKT[question] !== undefined) {
          if (flagsCISS.PKT[question] && value > 0 && value < 6) {
            tempMatches.PKT += value;
          }
        }
      }
    });

    setMatches(tempMatches);
  };

  const calculateStens = () => {
    let tempStens = { SSZ: 0, SSE: 0, SSU: 0, ACZ: 0, PKT: 0 };
    let stensTable: stenCissObj[] = [];
    const tempAge = Number(age);

    if (tempAge >= 16 && tempAge <= 24) {
      stensTable = stensCISS.tab1;
    } else if (tempAge >= 25 && tempAge <= 54) {
      stensTable = stensCISS.tab2;
    } else if (tempAge >= 55 && tempAge <= 79) {
      stensTable = stensCISS.tab3;
    } else {
      console.error("Wrong age value");
      return;
    }

    stensTable.map((item, index) => {
      if (matches.SSZ >= item.SSZ.bottom && matches.SSZ <= item.SSZ.top)
        tempStens.SSZ = index + 1;

      if (matches.SSE >= item.SSE.bottom && matches.SSE <= item.SSE.top)
        tempStens.SSE = index + 1;

      if (matches.SSU >= item.SSU.bottom && matches.SSU <= item.SSU.top)
        tempStens.SSU = index + 1;

      if (matches.ACZ >= item.ACZ.bottom && matches.ACZ <= item.ACZ.top)
        tempStens.ACZ = index + 1;

      if (matches.PKT >= item.PKT.bottom && matches.PKT <= item.PKT.top)
        tempStens.PKT = index + 1;
    });
    setStens(tempStens);
  };

  useEffect(() => {
    if (Object.keys(inputValues).length === 48) {
      calculateMatches();
    }
  }, [inputValues, age]);

  useEffect(() => {
    if (Object.keys(inputValues).length === 48) {
      calculateStens();
    }
  }, [matches]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="bg-white sticky top-0 z-10 flex justify-center">
            <div className="pb-8">
              <div className="join">
                <div>
                  <div>
                    <input
                      className="input input-bordered join-item"
                      placeholder="Wiek"
                      onChange={handleAgeChange}
                      value={age}
                      maxLength={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TableQuestions
            questions={allQuestions}
            flags={flagsCISS}
            inputRefs={inputRefs}
            invalidInputs={invalidInputs}
            handleInputChange={handleInputChange}
            renderFlagValue={renderFlagValue}
          />

          <div className="w-[800px]">
            {hasInvalidInputs || age.length < 2 ? (
              <div className="text-red-500 py-6 font-bold text-xl text-center">
                Formularz zawiera nieprawidłowe wartości lub podany wiek jest
                nieprawidłowy
              </div>
            ) : (
              <CissResults matches={matches} stens={stens} />
            )}
            <button onClick={handleClearInputs} className="btn btn-accent">
              Wyczyść formularz
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            Normy stenowe dla osób w wieku 16-24 lat
            <CissTableStens data={stensCISS.tab1} age={{ ge: 16, le: 24 }} />
          </div>
          <div>
            Normy stenowe dla osób w wieku 25-54 lat
            <CissTableStens data={stensCISS.tab2} age={{ ge: 25, le: 54 }} />
          </div>
          <div>
            Normy stenowe dla osób w wieku 55-79 lat
            <CissTableStens data={stensCISS.tab3} age={{ ge: 55, le: 79 }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CissTab;
