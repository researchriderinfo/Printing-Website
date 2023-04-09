import { Grid, Typography } from '@mui/material'
import React from 'react'
import SingleProcess from './SingleProcess'

const ourProcess=[
    {
        name:'CONFIRMATION OF QUOTATION',
        des:'Prior to the production process, we make sure that we possess all the information we need about your project. If you need it, we will send you a sample of your project for approval. If necessary, it will allow you can make additional changes. Since we are always working side-by-side with our clients, we can also provide advices on your trade printing project, so that it may reach its full potential.',
        image:'image'
    },
    {
        name:'VERIFICATION CONTROL & OPTIMISATION',
        des:'To achieve the quality print that you need, quality prepress is vital. At ePrintBD Graphic and Printing, we’ve done everything to ensure that quality is always present. Expertise, leading technology and the most advanced applications like automatic ripping and color management software allow us to provide the services you need to achieve the best print solutions. What we offer is peace of mind from the hitches and pitfalls of poor quality printing. Whether you want a simple flyer or an exceptional promotional product, we use the latest in digital printing technologies and offset lithography. ePrintBD Graphic and Printing offers full color sheet-fed offset printing on a 6 color 40 inch Mitsubishi press with coater, a 5 color 40 inch Mitsubishi press, a Heidelberg 5 color 40 inch with perfector and a Heidelberg 4 color 25 inch MO with coater. ',
        image:'image'
    },
    {
        name:'PACKAGING BINDERY',
        des:'We are recognized as one of the best bindery and finishing studios in Ontario. We are proficient and efficient no matter what binding project we take on. Simple tasks or advanced graphics, we have the most advanced bindery techniques and equipments available. The Muller Martini Saddle Sticher, 3 x 16 Pages MBO Folding Machine with inline perf/scoring, and the 45” Polar Cutter allows us to undertake anything. Tipping, embossing, foil stamping, gluing, inserting & more!',
        image:'image'
    },
    {
        name:'PREPRESS & PRINTING',
        des:'To achieve the quality print that you need, quality prepress is vital. At ePrintBD Graphic and Printing, we’ve done everything to ensure that quality is always present. Expertise, leading technology and the most advanced applications like automatic ripping and color management software allow us to provide the services you need to achieve the best print solutions. What we offer is peace of mind from the hitches and pitfalls of poor quality printing. Whether you want a simple flyer or an exceptional promotional product, we use the latest in digital printing technologies and offset lithography. ePrintBD Graphic and Printing offers full color sheet-fed offset printing on a 6 color 40 inch Mitsubishi press with coater, a 5 color 40 inch Mitsubishi press, a Heidelberg 5 color 40 inch with perfector and a Heidelberg 4 color 25 inch MO with coater.',
        image:'image'
    },
    {
        name:'QUALITY CONTROL & DELIVERY',
        des:'Once your project is packaged and ready to be delivered, ePrintBD Graphic and Printing ensures that all the details have been taken care of: sufficient and resistant packaging, shipping address, shipping delay, shipping dates and so on. Our shipping department guarantees that your package arrives in perfect condition. We make it a point of honor that you receive your package on time. We can even provide rush delivery options, if needed.',
        image:'image'
    },
]

const Process = () => {
  return (
    <div>
<Typography variant='h3' fontWeight={'bold'}>Our process</Typography>
        <Grid container spacing={{xs:2, md:3}}>

{
    ourProcess.map((process)=>{
        return(
            <Grid item md={4}>
            <SingleProcess process={process}>
    
            </SingleProcess>
        </Grid>
        )
    })
}

        </Grid>
    </div>
  )
}

export default Process