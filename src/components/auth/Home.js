import React, { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
                        <div className="flex flex-col">
                        <h1 className="siteTitle m-auto mt-[25%] text-white">Remote Fan</h1>
                        <div className="city mx-auto text-white">
                            <p>Find your home team away from home</p></div>
                        </div>
                        </>
    )
}