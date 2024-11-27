import bg from '../assets/ellipse-bg.svg';
import eye from '../assets/🦆 icon _Eye Slash_.svg';
import emptyWallet from '../assets/emptywallet.svg';
import sendIcon from '../assets/send2.svg';
import swapIcon from '../assets/swap2.svg';
import recieveIcon from '../assets/recieve2.svg';
import overview from '../assets/menu.svg';
import profile from '../assets/profile.svg';
import transactions from '../assets/clipboardtext.svg';
import settings from '../assets/setting2.svg';
import support from '../assets/headphone.svg';
import logoutIcon from '../assets/logoutcurve.svg';

import { useState } from 'react';
function Sidebar() {
  const [hideBal, setHideBal] = useState(false);
  return (
    <div className="h-full">
      <div
        className={'h-[40%] w-full bg-no-repeat px-7 pt-5 bg-cover relative'}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className={'flex flex-row align-center gap-3 text-white pt-3'}>
          <div className="bg-white rounded-full w-[40px] h-[40px]"></div>
          <div>
            <div className={'text-sm text-primary font-bold'}>Welcome,</div>
            <div className={'text-xs'}>omarsunday0@gmail.com</div>
          </div>
        </div>

        <div className="py-[25px] flex flex-row justify-between items-center px-[31px] w-[80%] rounded-[25px] bg-[#DAE5ED] absolute top-[90px] left-1/2 transform -translate-x-1/2 z-20">
          <div>
            <div className="flex flex-row items-center">
              <div className="text-[#5D5A7E] text-[8px] font-semibold">
                Available Balance
              </div>
            </div>
            {hideBal ? (
              <div className="text-[#1F1B57] text-[22px]">****</div>
            ) : (
              <div className="text-[#1F1B57] text-[22px] font-bold">$2,000</div>
            )}
          </div>
          <div className="w-[39px] h-[39px] flex flex-row justify-center items-center bg-[#00B3FF4A] rounded-full">
            <img src={emptyWallet} alt="" className={'w-[23px] h-[23px]'} />
          </div>
          <div className="bg-primary h-[15px] rounded-b-[14px] w-[90%] absolute top-[92px] left-1/2 transform -translate-x-1/2 z-10" />
        </div>

        <div className={'absolute bottom-[-33px] flex flex-row gap-5 w-[80%]'}>
          <div className="w-[59px] h-[59px] rounded-full bg-accentLight flex flex-col items-center justify-center gap-1">
            <img src={sendIcon} alt="" className={'w-[17px] h-[17px] '} />
            <div className={'text-[#0081FF] text-[10px] text-center'}>Send</div>
          </div>

          <div className="w-[59px] h-[59px] rounded-full bg-accentLight mt-10 flex flex-col items-center justify-center gap-1">
            <img src={swapIcon} alt="" className={'w-[17px] h-[17px] '} />
            <div className={'text-[#0081FF] text-[10px] text-center'}>Swap</div>
          </div>
          <div className="w-[59px] h-[59px] rounded-full bg-accentLight mt-12 flex flex-col items-center justify-center gap-1">
            <img src={recieveIcon} alt="" className={'w-[17px] h-[17px] '} />
            <div className={'text-[#0081FF] text-[10px] text-center'}>
              Request
            </div>
          </div>
        </div>
      </div>

      {/*MAIN MENU AND OPTIONS */}
      <div className="text-[#D7E6F1] text-[10px] mt-[47px] pl-[34px] font-semibold">
        MAIN MENU
      </div>
      <div className="flex flex-row items-center ml-[41px] mt-[23px]">
        <img src={overview} alt="" />
        <div className="text-[#FFFFFF] text-[14px] pl-[5px]">Overview</div>
      </div>
      <div className="flex flex-row items-center ml-[41px] mt-[23px]">
        <img src={profile} alt="" />
        <div className="text-[#FFFFFF] text-[14px] pl-[5px]">Profile</div>
      </div>
      <div className="flex flex-row items-center ml-[41px] mt-[23px]">
        <img src={transactions} alt="" />
        <div className="text-[#FFFFFF] text-[14px] pl-[5px]">Transactions</div>
      </div>
      <div className="flex flex-row items-center ml-[41px] mt-[23px]">
        <img src={settings} alt="" />
        <div className="text-[#FFFFFF] text-[14px] pl-[5px]">Settings</div>
      </div>
      <div className="flex flex-row items-center ml-[41px] mt-[23px]">
        <img src={support} alt="" />
        <div className="text-[#FFFFFF] text-[14px] pl-[5px]">Support</div>
      </div>
      <div className="flex flex-row items-center flex-1 ml-[42px]">
        <img src={logoutIcon} alt="" />
        <div className="text-[#FFFFFF] text-[14px] pl-[5px]">Logout</div>
      </div>

      <div className="text-[#FFFFFF] pb-[50px] text-[11px] pl-[42px]">
        Version
      </div>
    </div>
  );
}

export default Sidebar;
