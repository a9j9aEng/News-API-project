import React,{useState,useEffect} from 'react'
import NewsCard from './component/NewsCard';


export default function App() {
      
  const [newsData,setNewsData]=useState([]);
  const [loading,setLoading]=useState(true);

    let apiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=cbe5f10ef9d940729b057c301222ac0a";
  
 useEffect(()=>{
    getApiDAtaViaFetch();
  },[])

  const getApiDAtaViaFetch=async()=>{
    const apiResponse=await fetch(apiUrl);
    const Data= await apiResponse.json();
    console.log(Data);
    setNewsData(Data.articles);
    setLoading(false);
  }


  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Today's News
          </h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {loading? 'Fetching News' :newsData.map((news)=>{
             return( 
               <NewsCard news ={news} key={news.url}/>
              )
          })}
         </div>
      </div>
    </div>
  );
}














