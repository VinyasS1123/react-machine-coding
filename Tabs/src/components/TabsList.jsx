import { useState } from "react";

const TabsList = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleSelectTab(tabId) {
    setSelectedTab(tabId)
  }

  return (
    <div>
      {tabs.map((tab) => {
        return (
          <>
          <div className="controls">
            <button key={tab.id} onClick={()=>handleSelectTab(tab.id)}>{tab.label}</button>
          </div>
          <div className="tab">
          {selectedTab === tab.id && tab.Component}
          </div>
          </>
        )
      })}
    </div>
  );
};

export default TabsList;
