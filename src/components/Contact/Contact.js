import { Button, Typography } from '@mui/material'
import React from 'react'

const officeInfos=[
    {
        address:'Mirpur',
        Phone:'017000000',
        Email:'reserarchrider@gmail.com',
        website:'priting.com'

    }
]

const Contact = () => {
  return (
    <div>
       
       <Typography variant='h2' >Contact Us</Typography>
        <Typography variant='p'>We will answer any questions you may have about our online sales, rights or partnership service right here.
       </Typography>

{
    officeInfos.map((officeInfo)=>{
        return(
            console.log(officeInfo)
        )
    })
}

       <Typography>Get answers to all your questions you might have.</Typography>
       <Typography variant='p'>We will answer any questions you may have about our online sales right here.</Typography>
       <Typography variant='p'>Saturday to Thursday from 10:00 AM to 09:00 PM</Typography>
       <br></br>

       <Button>Contact Our Company</Button>
       <br></br>
       <Button>Live Chat On Messenger</Button>


    </div>
  )
}

export default Contact