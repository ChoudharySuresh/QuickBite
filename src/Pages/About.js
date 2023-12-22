import { useEffect, useState } from "react";
import BurgerImg from "../Images/Burger.png";
import { FaLinkedin , FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
    const [profileData , setProfileData] = useState({});
    const [showProfile , setShowProfile] = useState(false);

    useEffect(() => {
        async function getProfileData () {
            const result = await fetch("https://api.github.com/users/ChoudharySuresh");
            const res = await result.json();
            setProfileData(res)
        }
        getProfileData()
    },[])
    

    const handleAboutClick = () => {
        setShowProfile(!showProfile)
    }

  return (
    <>

        <div className="flex flex-col items-center gap-2 my-4">
            <button onClick={handleAboutClick} className="bg-orange-500 px-4 py-2 text-white w-[10rem] rounded-md my-4">{!showProfile ? "Show Profile" : "Hide Profile"}</button>

            {
                showProfile ? 
                (

                    <div className="border-[2px] rounded-lg bg-gray-100 flex flex-col items-center gap-4 px-4 py-4">
                    <h2 className="font-bold">About Me</h2>
                    <div>
                        <img src={profileData.avatar_url} alt="" className="w-[10rem] rounded-full shadow-md"/>
                    </div>
                    <h1 className="text-2xl">{profileData.name}</h1>
                    <p>Frontend Developer | Javascript | React.js</p>
                    <div className=" flex items-center gap-4">
                        <Link to="https://www.linkedin.com/in/suresh-choudhary-42a250214/" target="_blank"><FaLinkedin className="text-blue-500" size="2rem"/></Link>
                        <Link to="https://github.com/ChoudharySuresh" target="_blank"><FaGithub size="2rem"/></Link>
                    </div>
                    </div>
                )
                :
                ""
            }


            <div className=" flex items-center justify-center my-8">
                <div>
                    <h1 className="text-6xl">QuickBite</h1>
                    <p className="text-4xl mt-3 bg-orange-400 inline-block px-3 py-1 text-white rounded-lg">Bite-sized Joy, Lightning Fast!</p>
                </div>


                <div>
                    <img src={BurgerImg} alt="burgerimg" />
                </div>
            </div>
        </div>
    </>
  )
}

export default About