import React, { useEffect, useRef, useState } from "react";
import { flagsEPQR, stensWomenEPQR, stensMenEPQR } from "../lib/flags";
import EpqrResults from "./EpqrResults";
import EpqrTableStens from "./EpqrTableStens";
import TableQuestions from "./TableQuestions";

const EpqrTab: React.FC = () => {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("Mężczyzna");
  const [matches, setMatches] = useState({ N: 0, E: 0, P: 0, K: 0 });
  const [stens, setStens] = useState({ N: 0, E: 0, P: 0, K: 0 });
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

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleSexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSex(e.target.value);
  };

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
    setAge("");
    setSex("Mężczyzna");
    setInputValues({});
    setInvalidInputs({});
    setStens({ N: 0, E: 0, P: 0, K: 0 });
    setMatches({ N: 0, E: 0, P: 0, K: 0 });
    inputRefs.current.forEach((input) => {
      if (input) input.value = "";
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (Object.keys(inputValues).length === 48) {
      calculateMatches();
    }
  }, [inputValues, age, sex]);

  useEffect(() => {
    if (Object.keys(inputValues).length === 48) {
      calculateStens();
    }
  }, [matches]);

  const calculateMatches = () => {
    let tempMatches = { N: 0, E: 0, P: 0, K: 0 };
    allQuestions.forEach((question) => {
      const value = inputValues[question];
      if (value) {
        if (flagsEPQR.N[question] !== undefined) {
          if (
            (flagsEPQR.N[question] && value === "t") ||
            (!flagsEPQR.N[question] && value === "n")
          ) {
            tempMatches.N++;
          }
        }
        if (flagsEPQR.E[question] !== undefined) {
          if (
            (flagsEPQR.E[question] && value === "t") ||
            (!flagsEPQR.E[question] && value === "n")
          ) {
            tempMatches.E++;
          }
        }
        if (flagsEPQR.P[question] !== undefined) {
          if (
            (flagsEPQR.P[question] && value === "t") ||
            (!flagsEPQR.P[question] && value === "n")
          ) {
            tempMatches.P++;
          }
        }
        if (flagsEPQR.K[question] !== undefined) {
          if (
            (flagsEPQR.K[question] && value === "t") ||
            (!flagsEPQR.K[question] && value === "n")
          ) {
            tempMatches.K++;
          }
        }
      }
    });
    setMatches(tempMatches);
  };

  const hasInvalidInputs = Object.values(invalidInputs).some(
    (isInvalid) => isInvalid
  );

  const calculateStens = () => {
    let tempStens = { N: 0, E: 0, P: 0, K: 0 };
    let tempSex = [];

    if (sex === "Mężczyzna") {
      tempSex = stensMenEPQR;
    } else {
      tempSex = stensWomenEPQR;
    }

    if (tempSex.length === 0) {
      console.error("Lista ze stenami pusta");
    }

    tempSex.map((item, index) => {
      if (Number(age) < 31) {
        if (matches.N === index) tempStens.N = item.N.below;
        if (matches.E === index) tempStens.E = item.E.below;
        if (matches.P === index) tempStens.P = item.P.below;
        if (matches.K === index) tempStens.K = item.K.below;
      } else {
        if (matches.N === index) tempStens.N = item.N.above;
        if (matches.E === index) tempStens.E = item.E.above;
        if (matches.P === index) tempStens.P = item.P.above;
        if (matches.K === index) tempStens.K = item.K.above;
      }
    });
    setStens(tempStens);
  };

  return (
    <>
      <div className="flex justify-around flex-wrap ">
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
                <select
                  value={sex}
                  onChange={handleSexChange}
                  className="select select-bordered join-item"
                >
                  <option>Mężczyzna</option>
                  <option>Kobieta</option>
                </select>
              </div>
            </div>
          </div>
          <div className="lg:w-full">
            <TableQuestions
              questions={allQuestions}
              flags={flagsEPQR}
              inputRefs={inputRefs}
              invalidInputs={invalidInputs}
              handleInputChange={handleInputChange}
              renderFlagValue={renderFlagValue}
            />
          </div>

          <div className="text-center">
            {hasInvalidInputs || age.length < 2 ? (
              <div className="text-red-500 py-6 font-bold text-xl">
                Formularz zawiera nieprawidłowe wartości lub podany wiek jest
                nieprawidłowy
              </div>
            ) : (
              <EpqrResults matches={matches} stens={stens} />
            )}
            <button onClick={handleClearInputs} className="btn btn-accent">
              Wyczyść formularz
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 pt-12 xl:pt-0">
          <div>
            Normy stenowe - mężczyźni
            <EpqrTableStens data={stensMenEPQR} />
          </div>
          <div>
            Normy stenowe - kobiety
            <EpqrTableStens data={stensWomenEPQR} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EpqrTab;
