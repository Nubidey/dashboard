import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Image from 'next/image'
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import  Sidebar  from "../components/Sidebar";
import BarChart from '../components/BarChart';
export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if (loading) return <h1>Loading</h1>;
  if (!user) route.push("/auth/login");
  if (user)
    return (
      <main className='bg-gray-100'>
         
       <div className="flex flex-row my-6">
   
    <Sidebar/>
    <div className="flex-row absolute right-32 justify-start">
    <Header/>
    <TopCards/>
    <BarChart/>
    </div>


    
    </div>
    
    </main>
    );
}
