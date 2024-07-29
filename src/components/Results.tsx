import { Result } from "../lib/flags";

type Props = {
  matches: Result;
  stens: Result;
};

const Results = ({ matches, stens }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2 py-6">
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">N</div>
            <div className="stat-value">{matches.N}</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">E</div>
            <div className="stat-value">{matches.E}</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">P</div>
            <div className="stat-value">{matches.P}</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">K</div>
            <div className="stat-value">{matches.K}</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">N</div>
            <div className="stat-value">{stens.N}</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">E</div>
            <div className="stat-value">{stens.E}</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">P</div>
            <div className="stat-value">{stens.P}</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">K</div>
            <div className="stat-value">{stens.K}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
