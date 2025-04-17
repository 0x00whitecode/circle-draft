import React, { useState } from 'react';

interface TabItem {
  label: string;
  value: string;
}

interface TabProps {
  tabs: TabItem[];
  onTabChange: (value: string) => void;
  initialActiveTab?: string;
}

const Tab: React.FC<TabProps> = ({ tabs, onTabChange, initialActiveTab }) => {
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab || tabs[0]?.value || '');

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
    onTabChange(tabValue);
  };

  return (
    <div className="flex border-b border-gray-200 mt-20">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`
            px-4 py-2 text-sm font-medium text-gray-500 cursor-pointer
            focus:outline-none
            ${activeTab === tab.value ? 'border-b-2 border-orange-500 text-blue-600' : ''}
          `}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;