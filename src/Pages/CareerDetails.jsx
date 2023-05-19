import axios from 'axios';
import React from 'react'
import { useLoaderData} from 'react-router-dom'

export default function CareerDetails() {
  const career = useLoaderData();
    return (
    <>
    
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
      </div>
    </div>
    </>
    )
}

export const getCareerDetails = async ({params}) => {
    try {
        let {id} = params ;
        let data = await axios.get(`http://localhost:4000/careers/${id}`);
        return data.data;
            
    } catch (error) {
               throw Error("Could find this carrer"); 
    }
}