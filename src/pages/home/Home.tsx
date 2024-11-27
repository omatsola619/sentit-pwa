import bgImage from '../../assets/map-bg.svg';
import { useState } from 'react';
import emptyWallet from '../../assets/emptywallet.svg';
import eye from '../../assets/🦆 icon _Eye Slash_.svg';
import lightmap2 from '../../assets/primary-light-map 2.svg';
import sendIcon from '../../assets/directsend.svg';
import swapIcon from '../../assets/arrowswaphorizontal.svg';
import recieveIcon from '../../assets/directboxreceive.svg';
import HomeAssetsView from '../../components/HomeAssetsView';
import Layout from '../../layouts/Layout';

function Home() {
  const [hideBal, setHideBal] = useState(false);
  return (
    <Layout>
      <div className={'bg-accentLight h-screen'}>
        <div
          className={'w-full h-[200px] bg-no-repeat bg-cover bg-bottom'}
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div
            className={'flex flex-row align-center gap-3 text-white pt-3 px-4'}
          >
            <div className="bg-white rounded-full w-[40px] h-[40px]"></div>
            <div>
              <div className={'text-sm'}>Welcome,</div>
              <div className={'text-base'}>Omatsola</div>
            </div>
          </div>

          <div className="py-[30px] flex flex-row justify-between items-center px-[31px] w-[90%] rounded-[25px] bg-[#DAE5ED] absolute top-[70px] left-1/2 transform -translate-x-1/2 z-20">
            <div>
              <div className="flex flex-row items-center">
                <div className="text-[#5D5A7E] text-[14px] font-semibold">
                  Available Balance
                </div>
                <div
                  className="h-[20px] w-[50px] flex flex-row justify-center items-center"
                  onClick={() => setHideBal(!hideBal)}
                >
                  <img src={eye} alt="" />
                </div>
              </div>
              {hideBal ? (
                <div className="text-[#1F1B57] text-[32px]">****</div>
              ) : (
                <div className="text-[#1F1B57] text-[32px] font-bold">
                  $2,000
                </div>
              )}
            </div>
            <div className="w-[57px] h-[57px] flex flex-row justify-center items-center bg-[#00B3FF4A] rounded-full">
              <img src={emptyWallet} alt="" />
            </div>
            <div className="bg-[#00B3FF] h-[15px] rounded-b-[14px] w-[90%] absolute top-[128px] left-1/2 transform -translate-x-1/2 z-10" />
          </div>
        </div>

        {/*home action buttons */}
        <div className="bg-[#00B3FF] flex flex-row mx-[63px] justify-between px-[25px] py-[10px] rounded-[20px] my-[24px] relative">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={lightmap2} alt="" />
          </div>
          <div className="bg-[#1F1B57] h-[10px] rounded-b-[14px] w-[90%] absolute top-[70px] left-1/2 transform -translate-x-1/2 z-10" />
          <div
            onClick={() => {}}
            className="h-[53px] w-[53px] bg-[#FFFFFF] rounded-full flex flex-col justify-center items-center z-20"
          >
            <img src={sendIcon} alt="" />
            <div className="text-[#571B1B] text-[8px]">Send</div>
          </div>
          <div
            onClick={() => {}}
            className="h-[53px] w-[53px] bg-[#CCF0FF] rounded-full flex flex-col justify-center items-center z-20"
          >
            <img src={swapIcon} alt="" />
            <div className="text-[#1F1B57] text-[8px]">Swap</div>
          </div>
          <div
            onClick={() => {}}
            className="h-[53px] w-[53px] bg-[#FFFFFF] rounded-full flex flex-col justify-center items-center z-20"
          >
            <img src={recieveIcon} alt="" />
            <div className="text-[#2E571B] text-[8px]">Request</div>
          </div>
        </div>

        {/*assets display section */}
        <HomeAssetsView />
      </div>
    </Layout>
  );
}

export default Home;
