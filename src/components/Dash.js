import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Auth from '../lib/auth'

export default function Dash() {
  const [data, setData] = useState()

  useEffect(() => {
    profileData()
  }, [])

  async function profileData() {
    const response = await axios.get('api/profile', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
    setData(response.data)
  }

  return (
    <>
      {console.log('dash', data)}
      {data && 
      <>
        <h2>Username: {data.username}</h2>
      </>}
    </>
    
  )
}