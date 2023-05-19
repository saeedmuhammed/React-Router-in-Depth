import axios from 'axios'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


export default function Careers() {
    let careers = useLoaderData();
  return (
    <div className="careers">
    {careers.map(career => (
      <Link to={career.id.toString()} key={career.id}>
        <p>{career.title}</p>
        <p>Based in {career.location}</p>
      </Link>
    ))}
  </div>
  )
}

export const getCareers = async () => {

    try {
        let data = await axios.get("http://localhost:4000/careers");

        return data.data;
         
    } catch (error) {
        throw Error("Couldn't fetch data");      
    }
}
