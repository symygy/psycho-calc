import { useState } from "react";
import EpqrTab from "./EqprTab";
import CissTab from "./CissTab";

const TabView = () => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <div className="p-4">
      <div role="tablist" className="tabs tabs-lifted">
        <a
          role="tab"
          className={`tab ${tabActive === 0 ? "tab-active font-bold" : ""}`}
          onClick={() => setTabActive(0)}
        >
          EPQ-R(S)
        </a>
        <a
          role="tab"
          className={`tab ${tabActive === 1 ? "tab-active font-bold" : ""}`}
          onClick={() => setTabActive(1)}
        >
          CISS
        </a>
        <a
          role="tab"
          className={`tab ${tabActive === 2 ? "tab-active font-bold" : ""}`}
          onClick={() => setTabActive(2)}
        >
          EPQ-R(long?)
        </a>
        <div className="p-10">
          {tabActive === 0 && (
            <div>
              <EpqrTab />
            </div>
          )}
          {tabActive === 1 && (
            <div>
              <CissTab />
            </div>
          )}
          {tabActive === 2 && <div>xxxx</div>}
        </div>
      </div>
    </div>
  );
};

export default TabView;
