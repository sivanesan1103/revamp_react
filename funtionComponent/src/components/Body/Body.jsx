import axios from 'axios';
import { Card } from '../Card/Card';
import { useState,setState, useEffect } from "react";

export const Body = () =>{
    
    const [Productdatas,setProductdatas]= useState([]);

    const fetchData=async()=>{
        let data= await axios.get("https://api.escuelajs.co/api/v1/products");
        setProductdatas(data.data);
       
        console.log(Productdatas);
        
    }

    useEffect(()=>{
        fetchData()
    },[])

    
    return(
        <>
        <div className='mx-auto my-5 2xl:container' >
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {Productdatas.map((product)=>{
    
               return <Card test={product.id} />
            })}
           </div>
           
        </div>
        </>
    )

}