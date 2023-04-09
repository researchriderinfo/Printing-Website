
import { Grid, Typography } from '@mui/material'
import React from 'react'
import Service from './Service'


const serviceDes=[
    {
        name:'GRAPHIC DESIGN',
        des:'When it comes to graphic design, you need an exceptional skill and experiences in artwork. But, that is exactly what we offer you in ePrintBD. Our experts in PRINTING will help you to create a distinguishing and presentable design that would attract the attention of anyone and also make your business to stand out. With our exceptional graphic design skills, your business will experience an enormous result and will communicate great values.',
        image:'image'
    },
    {
        name:'PRINTING',
        des:'We are king in printing services in Bangladesh. When it comes to printing, there is no better place to go than PRINTING. We make use of high quality printing machines such as Heidelberg machines, all made in Germany. Furthermore, we offer single color and bicolor printing. We don’t just offer our customers great value, we offer our customers a mix of great value and exceptional experiences.',
        image:'image'
    },
    {
        name:'PACKAGING',
        des:'We offer some of the best packaging solutions out there. No matter the kind of product you have, you can be sure to leverage our robust packaging solution. In PRINTING, we offer packaging services to various businesses and services including bath spa boxes, pharmaceuticals medication boxes, software and electronics, food and drink boxes, and so forth. You can expect only the best services with us.',
        image:'image'
    },
    {
        name:'LAMINATION',
        des:'Lamination helps to preserve your documents to ensure longevity and it also makes your documents presentable. You need our expertise for the best lamination services. We make use of highly efficient lamination processes including BOPP film lamination sealing, together with head and adhesive to ensure that the product is not only well laminated but also gorgeous and highly attractive.',
        image:'image'
    },
    {
        name:'UV COATING',
        des:'Sometimes, UV coating may be required to fine-tune the looks of your printed products. We can employ UV coating on some parts or your entire printed materials. We make use of highly powered ultra violet lights to ensure the best results.',
        image:'image'
    },
    {
        name:'VARNISH',
        des:'Your printed material should have high quality and it should also be glossy and durable. This is where varnish comes in. We offer the best quality varnish, ensuring that your printed material stands out.',
        image:'image'
    },
    {
        name:'FOLDING & FINISHING',
        des:'Folding and finishing involve a range of processes and sometimes, these processes are better handled by experts. Our experts can handle a range of folding and finishing services including brochure folding, numbering, and perforation, pocketing on the file folder, stitching, knitting and so forth.',
        image:'image'
    },
    {
        name:'DIE CUTTING',
        des:'Sometimes, you need to make some unique shapes for some specific purposes in your business or brand. We are the right professionals and experts you can trust for such services. We have the expertise, equipment, and experiences to make any kind of shapes on your printed materials. Depending on your requirements, we can make shapes that stand out any time.',
        image:'image'
    },
    {
        name:'BINDERY',
        des:'PRINTING specializes in premium bindery services. We make use of some of the best tools and machines for excellent bindery services. Our bindery tools comprise loop wire, pad binding, hard cover, pin binding and so forth. Besides, you will be sure to have some of our binderys experts in ePrintBD to handle your projects and ensure the best touch.',
        image:'image'
    },
]

const Services = () => {
  return (
    <div>
        <Typography variant='h3' fontWeight={'bold'}>Our Services</Typography>
        <Grid container spacing={{xs:2, md:3}}>
        {
    serviceDes.map((service)=>{
        return(
        <Grid item md={4}>
        <Service service={service}>

        </Service>
    </Grid>)
        
    })
}
        </Grid>


    </div>
  )
}

export default Services