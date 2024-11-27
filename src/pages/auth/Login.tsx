import React, { useEffect, useState } from 'react';
import EmailField from '../../components/EmailField';
import PasswordField from '../../components/PasswordField';
import AuthButton from '../../components/AuthButton';
// import EmailField from "../../components/EmailField";
// import PasswordField from "../../components/PasswordField";
// import { LOGIN } from "../../services/auth_service";
// import useAuth from "../../../hooks/useAuth";
// import AuthButton from "../../components/AuthButton";

const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const Login = ({
  onPress,
  setLoading,
}: {
  onPress: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const { setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [generalError, setGeneralError] = useState('');

  useEffect(() => {
    setEmail(email.trim());
    if (email.length > 0) {
      setIsEmailValid(EMAIL_REGEX.test(email));
      if (!EMAIL_REGEX.test(email)) {
        setEmailError('Please enter a valid email address');
      }
    } else {
      setIsEmailValid(true);
    }
  }, [email]);
  // 9vob0u95de@skygazerhub.com
  // cetx4fsgi3@rentforsale7.com
  // 9cjmbdorjo@sfolkar.com

  useEffect(() => {
    if (password.length > 0) {
      setIsPasswordValid(PASSWORD_REGEX.test(password));
      if (!PASSWORD_REGEX.test(password)) {
        setPasswordError(
          'Password must be at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
        );
      }
    } else {
      setIsPasswordValid(true);
    }
  }, [password]);

  // const handleLogin = async () => {
  //     const payload = {
  //         email,
  //         password,
  //     };
  //     if (!email && !password) {
  //         setGeneralError("Please enter a valid email and password");
  //     } else if (!email) {
  //         setGeneralError("Please enter a valid email");
  //     } else if (!password) {
  //         setGeneralError("Please enter a valid password");
  //     } else if (email && !isEmailValid) {
  //         setGeneralError("This is not a valid email address");
  //     } else {
  //         setLoading(true);
  //         const response = await LOGIN(payload);
  //         if (response.status === "successful") {
  //             setTimeout(async () => {
  //                 setUser(response);
  //                 setLoading(false);
  //             }, 2000);
  //         } else if (response.status === "error") {
  //             setGeneralError(response.msg);
  //             setLoading(false);
  //             // console.log(response);
  //         } else {
  //             // console.log(response);
  //             setLoading(false);
  //             setGeneralError("Please check your internet connection");
  //         }
  //     }
  // };

  //clear general error if email and password is correct
  useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setGeneralError('');
    }
  }, [isEmailValid, isPasswordValid]);

  return (
    <div className="bg-primary rounded-b-[30px] relative">
      <div className="text-[24px] text-[#FFFFFF] pt-[54px] pl-[29px] font-bold">
        Welcome back!
      </div>
      <div className="text-[14px] text-[#D7E6F1] pl-[29px] pr-[170px]">
        Sign in to your account
      </div>
      <div className="mt-[65px] mx-[28px]">
        {generalError && (
          <div className="text-[12px] text-red-500 font-medium pb-[10px]">
            {generalError}
          </div>
        )}
        <EmailField value={email} setValue={setEmail} />
      </div>
      {isEmailValid ? null : (
        <div className="text-[12px] text-[#F5B300] font-medium pt-[8px] mx-[28px] ">
          {emailError}
        </div>
      )}

      <div className="mt-[18px] mx-[28px]">
        <PasswordField value={password} setValue={setPassword} />
      </div>
      {isPasswordValid ? null : (
        <div className="text-[12px] text-[#F5B300] font-medium pt-[8px] mx-[28px]">
          {passwordError}
        </div>
      )}

      {/* <View style={tw`flex-row mt-[27px] ml-[28px]`}>
        <Text
          style={tw.style("text-[12px] text-[#D7E6F1] pr-[5px]", {
            fontFamily: "Sora-Regular",
          })}
        >
          Forgot password?
        </Text>
        <Pressable>
          <Text
            style={tw.style("text-[12px] text-[#01D6DC]", {
              fontFamily: "Sora-Regular",
            })}
          >
            Recover here
          </Text>
        </Pressable>
      </View> */}

      <div className="flex flex-row mt-[40px] pb-[135px] ml-[28px]">
        <div className="text-[14px] text-[#D7E6F1] pr-[5px]">
          Not yet registered?
        </div>
        <div onClick={onPress} className="h-[30px] w-[90px]">
          <div className="text-[14px] text-[#01D6DC]">Sign up</div>
        </div>
      </div>

      <div className="absolute w-full flex flex-row justify-center">
        <AuthButton name={'LOGIN'} onPress={() => {}} />
      </div>
    </div>
  );
};

export default Login;
