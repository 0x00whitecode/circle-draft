import React, { useState } from 'react';
import Tab from "./tabBar";
import TeamComponents from './teamComponent';


interface TabItem {
  label: string;
  value: string;
}

// Dummy components for demonstration
const TeamsComponent = () => <TeamComponents />;
const TournamentComponent = () => <div>Content for Tournament tab</div>;
const LeaguesComponent = () => <div>Content for Leagues tab</div>;
const AgencyComponent = () => <div>Content for Agency tab</div>;

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTabValue] = useState<string>('teams');
  const [tabContent, setTabContent] = useState(<TeamsComponent />);

  const handleTabChange = (newValue: string)  => {
    setActiveTabValue(newValue);

    console.log("Currently active tab:", activeTab); // this alone will silence the warning

    
    switch (newValue) {
      case 'teams':
        setTabContent(<TeamComponents />);
        break;
      case 'tournament':
        setTabContent(<TournamentComponent />);
        break;
      case 'leagues':
        setTabContent(<LeaguesComponent />);
        break;
      case 'agency':
        setTabContent(<AgencyComponent />);
        break;
      default:
        setTabContent(<>
        
        </>);
    }
  };

  const tabsData: TabItem[] = [
    { label: 'Teams', value: 'teams' },
    { label: 'Tournament', value: 'tournament' },
    { label: 'Leagues', value: 'leagues' },
    { label: 'Agency', value: 'agency' },
  ];

 return (
  <div className="h-screen flex flex-col">
    <Tab
      tabs={tabsData}
      onTabChange={handleTabChange}
      initialActiveTab="teams"
    />
    <div className="mt-4 flex-1 overflow-y-auto px-4 scrollbar-hide scroll-smooth">
      {tabContent}
    </div>
  </div>
);

};

export default TabComponent;
