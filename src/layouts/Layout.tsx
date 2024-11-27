import { SetStateAction, useState } from 'react';
import { bottomTabsData } from '../data/dummyData';
import Sidebar from '../components/Sidebar';

function Layout({
  children,
  sidebarOpen,
  setSidebarOpen,
}: {
  children: React.ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-[70%] h-full bg-primary text-white z-40 shadow-lg">
          <Sidebar />
        </div>
      )}

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="relative">
        {children}

        <div className="h-[65px] bg-primary rounded-[20px] text-white flex flex-row items-center justify-around z-30 absolute bottom-8 w-[90%] left-1/2 transform -translate-x-1/2">
          {bottomTabsData.map((item, index) => (
            <div key={index}>
              <img src={item.icon} alt="" />
            </div>
          ))}
          <div className="bg-[#00B3FF] h-[15px] rounded-b-[14px] w-[90%] absolute top-[65px] left-1/2 transform -translate-x-1/2 z-0" />
        </div>
      </div>
    </div>
  );
}

export default Layout;
