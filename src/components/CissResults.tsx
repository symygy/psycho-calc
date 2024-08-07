import { Result } from "../lib/flags";

type Props = {
  matches: Result;
  stens: Result;
};

const CissResults = ({ matches, stens }: Props) => {
  const statClass = "stat place-items-center w-[125px]";

  return (
    <>
      <div className="flex flex-col gap-2 py-6">
        <div className="stats shadow-xl">
          <div className={statClass}>
            <div className="stat-title">SSZ</div>
            <div className="stat-value">{matches.SSZ}</div>
          </div>
          <div className={statClass}>
            <div className="stat-title">SSE</div>
            <div className="stat-value">{matches.SSE}</div>
          </div>
          <div className={statClass}>
            <div className="stat-title">SSU</div>
            <div className="stat-value">{matches.SSU}</div>
          </div>
          <div className={statClass}>
            <div className="stat-title">ACZ</div>
            <div className="stat-value">{matches.ACZ}</div>
          </div>
          <div className={statClass}>
            <div className="stat-title">PKT</div>
            <div className="stat-value">{matches.PKT}</div>
          </div>
        </div>
        <div className="stats shadow-xl">
          <div className={statClass}>
            <div className="stat-title">SSZ</div>
            <div className="stat-value">{stens.SSZ}</div>
          </div>
          <div className={statClass}>
            <div className="stat-title">SSE</div>
            <div className="stat-value">{stens.SSE}</div>
          </div>
          <div className={statClass}>
            <div className="stat-title">SSU</div>
            <div className="stat-value">{stens.SSU}</div>
          </div>
          <div className={statClass}>
            <div className="stat-title">ACZ</div>
            <div className="stat-value">{stens.ACZ}</div>
          </div>
          <div className={statClass}>
            <div className="stat-title">PKT</div>
            <div className="stat-value">{stens.PKT}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CissResults;
