import React from "react";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

const BottomNav = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <BottomNavigationTab title="Dashboard" />
      <BottomNavigationTab title="Animal" />
      <BottomNavigationTab title="Plant" />
      <BottomNavigationTab title="Analytics" />
    </BottomNavigation>
  );
};

export default BottomNav;
