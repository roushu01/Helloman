import React, { useState,useEffect } from "react";
import api from "../api/axios";
import {
  Store,
  ShieldCheck,
  DollarSign,
  Users,
  Award,
  Briefcase,
  PlusCircle,
  CheckCircle,
  Lock,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import { useSignUp, useSignIn } from "@clerk/clerk-react";
export default function SellerRegister({ onSellerLogin }) {
  const [authMode, setAuthMode] = useState("login"); // "login" | "signup"
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);
  const [clerkUserId, setClerkUserId] = useState("");
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [step, setStep] = useState(1);
  const { signOut } = useClerk();
  const {signUp,setActive: setSignUpActive,isLoaded: isSignUpLoaded} = useSignUp();
  const {
 signIn,
 setActive: setSignInActive,
 isLoaded: isSignInLoaded
} = useSignIn();

const [email, setEmail] = useState("");
const [verifyingOtp, setVerifyingOtp] = useState(false);
const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",

  businessName: "",
  businessType: "Individual",

  gstNumber: "",
  panNumber: "",

  address: {
    street: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
  },

  bankDetails: {
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
  },
});
const [otpVerified, setOtpVerified] = useState(false);
  const [loginEmail,setLoginEmail]=useState("");
const [loginOtp,setLoginOtp]=useState("");
const [loginStep,setLoginStep]=useState(1);
  const [loginData, setLoginData] = useState({
    email: "",
   
  });

 const sendLoginOtp = async()=>{

  if(!isSignInLoaded) return;


  try{

    const result = await signIn.create({
      identifier: loginEmail,
    });


    console.log("Sign in created:", result);


    const emailFactor = result.supportedFirstFactors.find(
      (factor)=> factor.strategy === "email_code"
    );


    if(!emailFactor){
      alert("Email OTP is not enabled for this account");
      return;
    }


    await signIn.prepareFirstFactor({

      strategy:"email_code",

      emailAddressId: emailFactor.emailAddressId

    });


    setLoginStep(2);


  }catch(err){

    console.log(err);

    alert(
      err.errors?.[0]?.longMessage ||
      "Unable to send OTP"
    );

  }

};
const handleVerifyOtp = async () => {
  try {
    setVerifyingOtp(true);

    await verifyLoginOtp();

  } catch (err) {
    console.log(err);
  } finally {
    setVerifyingOtp(false);
  }
};

       const verifyLoginOtp = async()=>{

        try{

        const result = await signIn.attemptFirstFactor({
        strategy:"email_code",
        code:loginOtp
        });



        if(result.status==="complete"){

        await setSignInActive({
          session: result.createdSessionId
        });


        setIsLoggedIn(true);


        const sellerUser = {

            id: result.userId,

            clerkId: result.userId,

            role:"seller",

            email:loginEmail,

            name:"Seller"

          };


          localStorage.setItem(
            "clerkId",
            result.userId
          );


          localStorage.setItem(
            "user",
            JSON.stringify(sellerUser)
          );


          onSellerLogin(sellerUser);


        alert("Login successful");

        }

        }catch(err){

        console.log(err);

        alert(
        err.errors?.[0]?.longMessage || "Wrong OTP"
        );

        }

        };

const handleRegister = async (e) => {
  e.preventDefault();

  const payload = {

  clerkUserId: clerkUserId,

  firstName: formData.firstName,

  lastName: formData.lastName,

  email: formData.email,

  password: formData.password,

  phone: formData.phone,

  businessName: formData.businessName,

  businessType: formData.businessType,

  gstNumber: formData.gstNumber,

  panNumber: formData.panNumber,

  address: formData.address,

  bankDetails: formData.bankDetails

};

  try {

 const res = await api.post(
   "/api/sellers/register",
   payload
 );


 alert("Seller Registered Successfully");


 const seller = res.data.seller;


 onSellerLogin({

 id: seller._id,

 clerkId: clerkUserId,

 role:"seller",

 name:`${seller.firstName} ${seller.lastName}`,

 shopName:seller.businessName,

 email:seller.email

});


} catch(error){

 console.log(error);

 alert(
 error.response?.data?.message ||
 "Registration Failed"
 );

}
};


const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/api/auth/login", {
  email: loginData.email,
 
});

console.log(response.data);

const { token, user } = response.data;

localStorage.setItem("token", token);

onSellerLogin({
  id: user._id,
  role: user.role,
  name: `${user.firstName} ${user.lastName}`,
  shopName: user.businessName,
  email: user.email,
});
    // Optional: Store token if backend returns one
    if (user.token) {
      localStorage.setItem("token", user.token);
    }

    onSellerLogin({
      id: user.id,
      role: user.role,
      name: `${user.firstName} ${user.lastName}`,
      shopName: user.businessName,
      email: user.email,
    });

  } catch (error) {
  console.log("Status:", error.response?.status);
  console.log("Response:", error.response?.data);
}
};


const sendOtp = async () => {

  if (!email) {
    alert("Please enter email");
    return;
  }

  try {

    setLoading(true);

    await signUp.create({
      emailAddress: email,
    });

    await signUp.prepareEmailAddressVerification({
      strategy: "email_code",
    });

    setStep(1);

  } catch(err){

    console.log(err);
    alert(
      err.errors?.[0]?.longMessage ||
      "Unable to send OTP"
    );

  } finally {
    setLoading(false);
  }
};

const verifyOtp = async () => {

  if (!isSignUpLoaded) return;

  try {

    const completeSignUp =
      await signUp.attemptEmailAddressVerification({
        code: otp,
      });

    console.log(completeSignUp);

    if (completeSignUp.status === "complete") {

  await setSignUpActive({
    session: completeSignUp.createdSessionId,
  });


  setClerkUserId(completeSignUp.createdUserId);


  alert("OTP Verified Successfully");


  setFormData({
    ...formData,
    email,
  });


  setStep(3);

} else {

      alert("Verification not completed");

    }

  } catch(err){

    console.log(err);

    alert(
      err.errors?.[0]?.longMessage ||
      "Invalid OTP"
    );

  }

};
const changeEmail = () => {
  setOtp("");
  setStep(2);
};
  return (

    
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col gap-10" id="seller-register-page">
      
        <>
          {/* Intro header with statistics */}
          <div className="flex justify-center  items-center">
           
            {/* Auth card */}
            <div className="bg-white  p-6 md:p-8 shadow-sm">
              {/* Login / Sign Up Tabs */}
              <div className="grid grid-cols-2 gap-2 bg-gray-100  p-1 rounded-xl mb-6">
                <button
                  type="button"
                  onClick={() => setAuthMode("login")}
                  className={`text-xs font-black uppercase tracking-wider py-2.5 rounded-lg transition-colors cursor-pointer ${
                    authMode === "login"
                      ? "bg-white  text-orange-500 shadow-sm"
                      : "text-slate-500 hover:text-slate-700 "
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMode("signup")}
                  className={`text-xs font-black uppercase tracking-wider py-2.5 rounded-lg transition-colors cursor-pointer ${
                    authMode === "signup"
                      ? "bg-white  text-orange-500 shadow-sm"
                      : "text-slate-500  hover:text-slate-700 "
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {authMode === "login" ? (
                /* ---------------- LOGIN FORM ---------------- */
               <form className="space-y-5">
                        {/* Email */}
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                            Mobile Number or Email
                          </label>

                          <div className="flex gap-3">
                            <div className="relative flex-1">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                              <input
                                type="email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                placeholder="Enter email"
                                className="w-full h-11 pl-11 pr-4 border border-slate-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                              />
                            </div>

                            {/* Send OTP Button */}
                            <button
                              type="button"
                              onClick={sendLoginOtp}
                              className="h-11 px-5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium whitespace-nowrap transition"
                            >
                              Verify OTP
                            </button>
                          </div>
                        </div>

                        {/* OTP Field */}
                        {loginStep === 2 && (
                        <div className="flex flex-col gap-1">
  <label className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
    OTP
  </label>

  <div className="flex gap-3">
    <input
      type="text"
      maxLength={6}
      required
      value={loginOtp}
      onChange={(e) => setLoginOtp(e.target.value)}
      placeholder="Enter 6-digit OTP"
      className="flex-1 h-11 px-4 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
    />

    <button
      type="button"
      onClick={handleVerifyOtp}
      disabled={
        verifyingOtp ||
        otpVerified ||
        loginOtp.length !== 6
      }
      className={`px-5 rounded-lg font-medium text-white transition ${
        verifyingOtp || otpVerified
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-600 hover:bg-green-700"
      }`}
    >
      {otpVerified
        ? "Verified"
        : verifyingOtp
        ? "Verifying..."
        : "Verify OTP"}
    </button>
  </div>
</div>
                        )}
                      </form>
              ) : (
                  step === 1 ? (
    <>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-center mb-2">
          Enter Verification Code
          </h2>

          <p className="text-sm text-gray-500 text-center mb-6">
          Enter the 6-digit code sent to
          <br />
          <span className="font-semibold">{email}</span>
          </p>

          <input
          type="text"
          maxLength={6}
          placeholder="123456"
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 text-center tracking-[10px] text-xl font-semibold mb-5 focus:ring-2 focus:ring-orange-500 outline-none"
          />

          <button
          type="button"
          onClick={verifyOtp}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
          Verify OTP
          </button>
          <button
            type="button"
            onClick={changeEmail}
            className="w-full mt-3 border border-orange-500 text-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
          >
            Change Email / Resend OTP
          </button>

          </div>
    </>
                  ):(
    step === 2 ? (
    <>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-center mb-2">
        Verify your Email
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
        We'll send a verification code to your email.
        </p>

        <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 mb-5 focus:ring-2 focus:ring-orange-500 outline-none"
        />

        <button
        type="button"
        onClick={sendOtp}
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
        >
        {loading?"Sending...":"Send OTP"}
        </button>

        </div>
    </>
):(
              
                /* ---------------- SIGN UP FORM ---------------- */
               <form onSubmit={handleRegister} className="flex flex-col gap-5">

  <div className="border-b border-gray-200 pb-3">
    <h3 className="text-base font-black uppercase tracking-wider">
      Seller Registration
    </h3>

    <p className="text-xs text-gray-500 mt-1">
      Complete your seller profile to start selling.
    </p>
  </div>

  {/* PERSONAL INFORMATION */}

  <div>

    <h4 className="font-bold text-orange-500 mb-4">
      Personal Information
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div>

        <label className="text-[10px] font-bold uppercase">
          First Name
        </label>

        <input
          type="text"
          required
          value={formData.firstName}
          onChange={(e)=>
            setFormData({
              ...formData,
              firstName:e.target.value
            })
          }
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      <div>

        <label className="text-[10px] font-bold uppercase">
          Last Name
        </label>

        <input
          type="text"
          required
          value={formData.lastName}
          onChange={(e)=>
            setFormData({
              ...formData,
              lastName:e.target.value
            })
          }
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      <div>

        <label className="text-[10px] font-bold uppercase">
          Email
        </label>

        <input
          type="email"
          required
          value={formData.email}
          onChange={(e)=>
            setFormData({
              ...formData,
              email:e.target.value
            })
          }
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      <div>

        <label className="text-[10px] font-bold uppercase">
          Phone Number
        </label>

        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e)=>
            setFormData({
              ...formData,
              phone:e.target.value
            })
          }
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

    </div>

  </div>

  {/* BUSINESS INFORMATION */}

  <div>

    <h4 className="font-bold text-orange-500 mb-4">
      Business Information
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div>

        <label className="text-[10px] font-bold uppercase">
          Business Name
        </label>

        <input
          type="text"
          required
          value={formData.businessName}
          onChange={(e)=>
            setFormData({
              ...formData,
              businessName:e.target.value
            })
          }
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      <div>

        <label className="text-[10px] font-bold uppercase">
          Business Type
        </label>

        <select
          value={formData.businessType}
          onChange={(e)=>
            setFormData({
              ...formData,
              businessType:e.target.value
            })
          }
          className="w-full px-3 py-2 border rounded-lg mt-1"
        >

          <option>Individual</option>
          <option>Company</option>
          <option>Partnership</option>
          <option>LLP</option>
          <option>Private Limited</option>

        </select>

      </div>

      <div>

        <label className="text-[10px] font-bold uppercase">
          GST Number
        </label>

        <input
          type="text"
          value={formData.gstNumber}
          onChange={(e)=>
            setFormData({
              ...formData,
              gstNumber:e.target.value
            })
          }
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      <div>

        <label className="text-[10px] font-bold uppercase">
          PAN Number
        </label>

        <input
          type="text"
          value={formData.panNumber}
          onChange={(e)=>
            setFormData({
              ...formData,
              panNumber:e.target.value
            })
          }
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

    </div>

  </div>

  {/* ADDRESS */}
    {/* ADDRESS */}

  <div>

    <h4 className="font-bold text-orange-500 mb-4">
      Address Information
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Street */}

      <div className="md:col-span-2">

        <label className="text-[10px] font-bold uppercase">
          Street Address
        </label>

        <input
          type="text"
          required
          value={formData.address.street}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                street: e.target.value,
              },
            })
          }
          placeholder="123 MG Road"
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      {/* City */}

      <div>

        <label className="text-[10px] font-bold uppercase">
          City
        </label>

        <input
          type="text"
          required
          value={formData.address.city}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                city: e.target.value,
              },
            })
          }
          placeholder="Jaipur"
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      {/* State */}

      <div>

        <label className="text-[10px] font-bold uppercase">
          State
        </label>

        <input
          type="text"
          required
          value={formData.address.state}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                state: e.target.value,
              },
            })
          }
          placeholder="Rajasthan"
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      {/* Country */}

      <div>

        <label className="text-[10px] font-bold uppercase">
          Country
        </label>

        <input
          type="text"
          required
          value={formData.address.country}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                country: e.target.value,
              },
            })
          }
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      {/* Pincode */}

      <div>

        <label className="text-[10px] font-bold uppercase">
          Pincode
        </label>

        <input
          type="text"
          required
          value={formData.address.pincode}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                pincode: e.target.value,
              },
            })
          }
          placeholder="302001"
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

    </div>

  </div>

  {/* BANK DETAILS */}
    {/* BANK DETAILS */}

  <div>

    <h4 className="font-bold text-orange-500 mb-4">
      Bank Details
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Account Holder */}

      <div>

        <label className="text-[10px] font-bold uppercase">
          Account Holder Name
        </label>

        <input
          type="text"
          required
          value={formData.bankDetails.accountHolder}
          onChange={(e) =>
            setFormData({
              ...formData,
              bankDetails: {
                ...formData.bankDetails,
                accountHolder: e.target.value,
              },
            })
          }
          placeholder="Demo Seller"
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      {/* Account Number */}

      <div>

        <label className="text-[10px] font-bold uppercase">
          Account Number
        </label>

        <input
          type="text"
          required
          value={formData.bankDetails.accountNumber}
          onChange={(e) =>
            setFormData({
              ...formData,
              bankDetails: {
                ...formData.bankDetails,
                accountNumber: e.target.value,
              },
            })
          }
          placeholder="123456789012"
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      {/* IFSC */}

      <div>

        <label className="text-[10px] font-bold uppercase">
          IFSC Code
        </label>

        <input
          type="text"
          required
          value={formData.bankDetails.ifsc}
          onChange={(e) =>
            setFormData({
              ...formData,
              bankDetails: {
                ...formData.bankDetails,
                ifsc: e.target.value,
              },
            })
          }
          placeholder="SBIN0001234"
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

      {/* Bank Name */}

      <div>

        <label className="text-[10px] font-bold uppercase">
          Bank Name
        </label>

        <input
          type="text"
          required
          value={formData.bankDetails.bankName}
          onChange={(e) =>
            setFormData({
              ...formData,
              bankDetails: {
                ...formData.bankDetails,
                bankName: e.target.value,
              },
            })
          }
          placeholder="State Bank of India"
          className="w-full px-3 py-2 border rounded-lg mt-1"
        />

      </div>

    </div>

  </div>

  {/* PASSWORD */}

  {/* <div>

    <label className="text-[10px] font-bold uppercase">
      Create Password
    </label>

    <div className="relative mt-1">

      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        <Lock className="w-4 h-4" />
      </span>

      <input
        type={showPassword ? "text" : "password"}
        required
        minLength={6}
        value={formData.password}
        onChange={(e) =>
          setFormData({
            ...formData,
            password: e.target.value,
          })
        }
        placeholder="Enter Password"
        className="w-full pl-10 pr-10 py-2 border rounded-lg"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
      >
        {showPassword ? (
          <EyeOff className="w-4 h-4" />
        ) : (
          <Eye className="w-4 h-4" />
        )}
      </button>

    </div>

  </div> */}
    <button
    type="submit"
    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all mt-4"
  >
    Register Seller
  </button>

  <p className="text-center text-sm text-gray-500">
    Already have a seller account?{" "}
    <button
      type="button"
      onClick={() => setAuthMode("login")}
      className="text-orange-500 font-semibold hover:underline"
    >
      Login
    </button>
  </p>

</form>
)

                  )
              )}
            </div>
          </div>
        </>

       
        </div>
      

  );
}