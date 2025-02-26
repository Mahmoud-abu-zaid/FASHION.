import { useState } from "react";

export default function SignUp() {
  const [userEmail ,setUserEmail]=useState("")
  function login(){
    console.log(userEmail)
  }
  return (
    <>
      <div className="bg-[#e5c643] py-[50px] text-white">
        <div className="text-center">
          <h2 className="text-[35px]  ">
            <b>
              JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
            </b>
          </h2>
          <p className="py-4">Type your email down below and be young wild generation</p>
          <form onSubmit={(e)=> e.preventDefault()}>
          <label htmlFor="userEmail" className="bg-white p-4 rounded-lg">
            <input className=" p-3 rounded-lg text-black" type="email" name="" id="userEmail" onChange={(e)=>setUserEmail(e.target.value)} />
            <button onClick={login} className="bg-black ml-2 p-2 px-4 rounded-lg">Send</button>
          </label>
          </form>
         
        </div>
      </div>
    </>
  );
}
