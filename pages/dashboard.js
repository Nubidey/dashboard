import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import  Sidebar  from "../components/Sidebar";
import BarChart from '../components/BarChart';
import DoughnutChart from "../components/PieChart";
import AreaChart1 from "../components/AreaChart";
import { AiFillDollarCircle, AiOutlineShareAlt, AiOutlineStar} from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import Homepage from "./sidepages/homepage";
import { useState } from "react";
import Files from "./sidepages/files";
import Graph from './sidepages/graph';
import Msg from './sidepages/message';
import Location from './sidepages/location';
import Notification from './sidepages/notification';




export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [btnClicked, setBtnClicked] = useState('dashboard');

  function displayData(data){
    setBtnClicked(data);
  }
  

  console.log(user);
  if (loading) return <h1>Loading</h1>;
  if (!user) route.push("/auth/login");
  if (user)
    return (
      <main className='bg-gray-100'>
         <div className="flex flex-row gap-6">
    <Sidebar func = {displayData}/>
    <div className="mx-8">
    <Header/>
    {
      {
        'dashboard': <Homepage/>,
        'files': <Files/>,
        'message': <Msg/>,
        'notification': <Notification/>,
        'location' : <Location/>,
        'graph' : <Graph/>

      } [btnClicked]
    }

     </div>
       
    </div>
    
    </main>
    );
}
