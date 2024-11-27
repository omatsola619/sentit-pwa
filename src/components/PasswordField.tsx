import React, { useState } from 'react';
import keyIcon from '../assets/key.svg';
import eye from '../assets/eyeslash.svg';

const PasswordField = ({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-[52px] rounded-[15px] bg-[#474C7E] flex flex-row items-center px-[16px]">
      <img src={keyIcon} alt="" />
      <input
        className="h-[52px] text-white bg-[#474C7E] w-2/3 text-[12px] ml-[12px] outline-0 font-semibold flex-1"
        placeholder="Password"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
      <div onClick={() => setShowPassword(!showPassword)}>
        <img src={eye} alt="" />
      </div>
    </div>
  );
};

export default PasswordField;
