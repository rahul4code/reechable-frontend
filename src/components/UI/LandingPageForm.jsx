'use client'

import React, {useState} from "react";
import Link from "next/link";

const LandingPageForm = () => {

const [name, setName]=useState("")

  return (
    <>
      <input
        placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)} required
        className="bottom-2 font-mono text-xl mb-8 border-b-2 focus:outline-none focus:border-green-700"
      />
      <Link
        href={`/chatRoom?name=${name}`}
        className="bg-slate-800 text-white p-3 text-md rounded-full hover:bg-green-800"
      >
        Meet New People
      </Link>
    </>
  );
};
export default LandingPageForm;
