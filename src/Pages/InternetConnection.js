import React from 'react'
import Disconnect from "../Images/Disconnected.svg";
const InternetConnection = () => {
  return (
    <>
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <div className='flex flex-col items-center p-2'>
                <div>
                    <img src={Disconnect} alt="disconnected" className='w-[20rem]'/>
                </div>
                <h1 className='text-2xl font-semibold my-2'>No Internet Connection</h1>
                <p>Check your internet connection</p>
                <p>and try reloading this page</p>
            </div>
        </div>
    </>
  )
}

export default InternetConnection