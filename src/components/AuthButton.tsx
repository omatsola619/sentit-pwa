import React from 'react';

const AuthButton = ({
  name,
  onPress,
}: {
  name: string;
  onPress: () => void;
}) => {
  return (
    <div
      onClick={onPress}
      className="bg-[#00B3FF] h-[68px] w-[197px] rounded-[20px] justify-center items-center flex flex-row align-center"
      style={{
        position: 'absolute',
        bottom: -30,
      }}
    >
      <div className="text-[16px] text-[#1F1B57] pr-[8px]">{name}</div>
      {/*{rightArrow}*/}
    </div>
  );
};

export default AuthButton;
