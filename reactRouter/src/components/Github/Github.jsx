import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // })


return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>
        Github Followers: {data.followers}
        <div className="flex justify-center items-center m-4 p-4">
            <img src={data.avatar_url} alt='Image' width={200} />
        </div>
    </div>
)
}

export default Github

export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}