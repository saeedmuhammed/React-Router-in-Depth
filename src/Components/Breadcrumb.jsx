import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumb() {
    const location = useLocation();
    let currentLocation='';
    const crumbs = location.pathname.split("/").filter((cramb) => cramb !== '')
    .map((crumb,index)=>{
        currentLocation+=`/${crumb}`
        return (
            <div className="crumb" key={index}>
            <Link to={currentLocation}>{crumb}</Link>
          </div>
        )
        });
       
  return (
    <div className="breadcrumbs">
    {crumbs}
  </div>
    

  )
}
