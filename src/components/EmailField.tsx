import React from 'react';
import messageIcon from '../assets/message.svg';

const EmailField = ({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="h-[52px] rounded-[15px] bg-[#474C7E] flex flex-row items-center px-[16px]">
      <img src={messageIcon} alt="" />
      <input
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        className="h-[52px] text-white bg-[#474C7E] w-2/3 text-[12px] ml-[12px] outline-0 font-semibold"
        placeholder="Email"
        autoCapitalize="none"
        autoFocus={false}
      />
    </div>
  );
};

export default EmailField;
