import React, { useEffect, useState } from 'react';
// import { SIGNUP } from "../../services/auth_service";
// import ConfirmEmailModal from "./ConfirmEmailModal";
// import CustomLoader from "../../components/CustomLoader";
// import AuthButton from "../../components/AuthButton";
// import useAuth from "../../../hooks/useAuth";
// import SuccessModal from "../../components/SuccessModal";
import EmailField from '../../components/EmailField';
import PasswordField from '../../components/PasswordField';
import Login from './Login';
import AuthButton from '../../components/AuthButton';
// import ErrorModal from "../../components/ErrorModal";
import logoWhite from '../../assets/logo-white.svg';
import userIcon from '../../assets/user.svg';

const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// username should contain minimum of 8 characters one upper case, one lower case and a number
const USERNAME_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUserNameValid, setIsUserNameValid] = useState(true);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const [responseMsg, setResponseMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (email.length > 0) {
      setIsEmailValid(EMAIL_REGEX.test(email));
      if (!EMAIL_REGEX.test(email)) {
        setEmailError('Please enter a valid email address');
      }
    } else {
      setIsEmailValid(true);
    }
  }, [email]);

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

  useEffect(() => {
    if (userName.length > 0) {
      setIsUserNameValid(USERNAME_REGEX.test(userName));
      if (!USERNAME_REGEX.test(userName)) {
        setUserNameError(
          'Username must be at least 8 characters, at least one uppercase letter, one lowercase letter, one number'
        );
      }
    } else {
      setIsUserNameValid(true);
    }
  }, [userName]);

  // const handleRegister = async () => {
  //     const data = {
  //         email,
  //         password,
  //         userName,
  //     };
  //     setLoading(true);
  //     if (!email && !password && !userName) {
  //         setLoading(false);
  //         setGeneralError("Please fill all the fields correctly");
  //     } else if (!userName) {
  //         setLoading(false);
  //         setGeneralError("Username is required");
  //     } else if (!email) {
  //         setLoading(false);
  //         setGeneralError("Email is required");
  //     } else if (!password) {
  //         setLoading(false);
  //         setGeneralError("Password is required");
  //     } else {
  //         const response = await SIGNUP(data);
  //         if (response.status === "successful") {
  //             setTimeout(() => {
  //                 setLoading(false);
  //                 setResponseMsg(response.msg);
  //                 setShowModal(true);
  //                 setPassword("");
  //                 setUserName("");
  //             }, 2000);
  //         } else if (response.status === "error") {
  //             setLoading(false);
  //             setGeneralError(response.msg);
  //         } else {
  //             setLoading(false);
  //             setGeneralError("Please check your internet connection");
  //         }
  //     }
  // };

  //remove general error if no error available
  useEffect(() => {
    if (isEmailValid && isPasswordValid && isUserNameValid) {
      setGeneralError('');
    }
  }, [isEmailValid, isPasswordValid, isUserNameValid]);

  return (
    <div className="h-screen bg-[#F5F5F9]">
      <div>
        <div className="bg-[#1F1B57] pt-[10px] rounded-b-[30px] relative">
          <div className="flex flex-row justify-center">
            <img
              src={logoWhite}
              className="w-[50px] h-[50px] mt-[45px] self-center"
              alt=""
            />
          </div>

          {!showLogin ? (
            <div>
              <div className="text-[24px] text-[#FFFFFF] pt-[54px] pl-[29px]">
                Create An Account
              </div>
              <div className="text-[14px] text-[#D7E6F1] pl-[29px] pr-[170px]">
                Fill in your valid details to sign up with us.
              </div>

              <div className="mx-[28px] mt-[30px]">
                {generalError && (
                  <div className="text-[12px] text-red-500 font-medium pb-[10px]">
                    {generalError}
                  </div>
                )}

                <div className="h-[52px] rounded-[15px] bg-[#474C7E] flex flex-row items-center px-[16px]">
                  <img src={userIcon} alt="" />
                  <input
                    className="h-[52px] text-white bg-[#474C7E] w-2/3 text-[12px] ml-[12px] outline-0"
                    placeholder="Username"
                    value={userName}
                    onChange={(e: any) => setUserName(e.target.value)}
                  />
                </div>

                {isUserNameValid ? null : (
                  <div className="text-[12px] text-[#F5B300] font-medium pt-[8px]">
                    {userNameError}
                  </div>
                )}

                <div className="mt-[18px]">
                  <EmailField value={email} setValue={setEmail} />
                </div>
                {isEmailValid ? null : (
                  <div className="text-[12px] text-[#F5B300] font-medium pt-[8px]">
                    {emailError}
                  </div>
                )}

                <div className="mt-[18px]">
                  <PasswordField value={password} setValue={setPassword} />
                </div>
                {isPasswordValid ? null : (
                  <div className="text-[12px] text-[#F5B300] font-medium pt-[8px]">
                    {passwordError}
                  </div>
                )}

                <div className="flex flex-row mt-[20px] pb-[105px]">
                  <div className="text-[14px] text-[#D7E6F1] pr-[5px]">
                    Already registered?
                  </div>
                  <div
                    onClick={() => setShowLogin(!showLogin)}
                    className="h-[30px] w-[100px]"
                  >
                    <div className="text-[14px] text-[#01D6DC]">Login here</div>
                  </div>
                </div>
              </div>

              <div className="absolute w-full flex flex-row justify-center">
                <AuthButton name={'REGISTER'} onPress={() => {}} />
              </div>
            </div>
          ) : (
            <Login
              onPress={() => setShowLogin(!showLogin)}
              setLoading={setLoading}
            />
          )}
        </div>
        {/* <Text
          style={tw.style(`text-[12px] text-[#5D5A7E] text-center pt-[64px]`, {
            fontFamily: "Sora-Regular",
          })}
        >
          Or continue with •
        </Text> */}
        {/* <SocialButtons /> */}
        <div className="mt-[70px] pt-[36px] mx-[20px] mb-[64px]">
          <div className="text-[12px] text-[#4C4B63]  text-center">
            By continuing, you confirm that you agree with our
          </div>
          <div>
            <div className="text-[12px] text-[#00B3FF]  text-center pt-[3px]">
              Terms and Conditions
            </div>
          </div>
        </div>
      </div>
      {/*<CustomLoader modalVisible={loading} />*/}
      {/*<ConfirmEmailModal*/}
      {/*    email={email}*/}
      {/*    setEmail={setEmail}*/}
      {/*    text={responseMsg}*/}
      {/*    isVisible={showModal}*/}
      {/*    setIsVisible={setShowModal}*/}
      {/*    setErrorModal={setErrorModal}*/}
      {/*    setSuccessModal={setSuccessModal}*/}
      {/*/>*/}

      {/*<ErrorModal*/}
      {/*    isVisible={errorModal}*/}
      {/*    setIsVisible={setErrorModal}*/}
      {/*    subHeading={*/}
      {/*        "There was an error registering your account. Please try again."*/}
      {/*    }*/}
      {/*/>*/}
    </div>
  );
};

export default Register;
