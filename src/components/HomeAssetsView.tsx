import { useState } from 'react';
import plusIcon from '../assets/addsquare.svg';
import emptyBox from '../utils/emptybox.svg';

function HomeAssetsView() {
  const [loadingAsset, setLoadingAsset] = useState<boolean>(false);
  const newAsset = [];
  return (
    <div className="bg-[#FFFFFF] mx-[19px] h-[calc(100vh-350px)] py-2 rounded-t-[20px]">
      <div className="flex flex-row items-center justify-between mx-[27px] mt-[17px]">
        <div className="flex flex-row items-center">
          <div className="text-[14px] text-[#5D5A7E] pr-[5px] font-semibold">
            Assets
          </div>
          <div className="text-[8px] pt-[4px] text-[#9B9B9B] font-semibold">
            Net worth spread
          </div>
        </div>
        <div onClick={() => {}}>
          <img src={plusIcon} alt="" />
        </div>
      </div>
      {/* list of assets here is not showing the last asset in the container */}
      {loadingAsset ? (
        <div className="items-center mt-[100px]">
          {/*<ActivityIndicator size="large" color="#1F1B57" />*/}
        </div>
      ) : (
        <>
          {newAsset?.length === 0 ? (
            <>
              <div className="flex flex-row justify-center items-center mt-[40px]">
                <img src={emptyBox} alt="" />
              </div>
              <div className="text-center text-[12px] text-[#323B4B] font-semibold">
                No assets added yet
              </div>
            </>
          ) : (
            <div className="mx-[24px] mt-[25px] mb-[525px] android:mb-[475px]">
              there are some info
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default HomeAssetsView;
