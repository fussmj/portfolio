import React from "react";

type Props = {
  active: boolean;
  selectTab: any;
  children: any;
};

const TabButton = ({ active, selectTab, children }: Props) => {
  const buttonClasses = active
    ? "text-white border-b border-orange-500"
    : "text-[#adb7be]";
  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
    >
      <p>{children}</p>
    </button>
  );
};

export default TabButton;
