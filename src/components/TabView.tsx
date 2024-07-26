import React, { useState } from "react";
import EPQR from "./EPQR";

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
          2+
        </a>
        <a
          role="tab"
          className={`tab ${tabActive === 2 ? "tab-active font-bold" : ""}`}
          onClick={() => setTabActive(2)}
        >
          3
        </a>
        <div className="p-10">
          {tabActive === 0 && (
            <div>
              <EPQR />
            </div>
          )}
          {tabActive === 1 && <div>Content for 2+</div>}
          {tabActive === 2 && <div>Content for 3</div>}
        </div>
      </div>
    </div>
  );
};

export default TabView;
