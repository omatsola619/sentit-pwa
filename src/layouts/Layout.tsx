import { bottomTabsData } from '../data/dummyData';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div>{children}</div>
      <div className="relative">
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
