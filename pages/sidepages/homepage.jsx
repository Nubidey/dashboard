import TopCards from '../../components/TopCards';
import BarChart from '../../components/BarChart';
import DoughnutChart from "../../components/PieChart";
import AreaChart1 from "../../components/AreaChart";
import { AiFillDollarCircle, AiOutlineShareAlt, AiOutlineStar} from "react-icons/ai";
import { SlLike } from "react-icons/sl";



const Homepage = () =>
{
    const topCards=[{key:'Earning', icon:< AiFillDollarCircle id='text-yellow'/>, value:2434 },{key:'Share', icon:<AiOutlineShareAlt id=''/>, value:3248 },{key:'Likes', icon:<SlLike id=''/>, value:3849 },{key:'Rating', icon: <AiOutlineStar id=''/>, value:3849 }];
  
return(

    <div className="grid grid-cols-4 gap-12">
  {topCards.map((item,index) => (
      <div key={index}>
      <TopCards item={item}/>
 </div>))}
    
    <div className="col-span-3">
    <BarChart/>
    </div>
    <div className=" row-span-2"> 
    <DoughnutChart/>
    </div>
<div className="col-span-3 row-span-1">
    <AreaChart1/></div>
    </div>
)
}
export default Homepage;