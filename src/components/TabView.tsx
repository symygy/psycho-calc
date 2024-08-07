import { useState } from "react";
import EpqrTab from "./EqprTab";
import CissTab from "./CissTab";

const TabView = () => {
  const [tabActive, setTabActive] = useState(0);
  const activeClass = "bg-base-300 rounded-lg font-bold";

  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-center flex">
            <ul className="menu menu-horizontal px-1">
              <li
                className={tabActive === 0 ? activeClass : ""}
                onClick={() => setTabActive(0)}
              >
                <a>EPQ-R</a>
              </li>
              <li
                className={tabActive === 1 ? activeClass : ""}
                onClick={() => setTabActive(1)}
              >
                <a>CISS</a>
              </li>
              {/* <li>
              <a>Item 3</a>
            </li> */}
            </ul>
          </div>
        </div>
        <div className="p-2">
          <div className="p-2">
            {tabActive === 0 && <EpqrTab />}
            {tabActive === 1 && <CissTab />}
            {tabActive === 2 && <div>xxxx</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabView;
