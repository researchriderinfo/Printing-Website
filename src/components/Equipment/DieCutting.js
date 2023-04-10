import React from 'react'

const dInfos=[
    {
        name:'Die Cutting',
        img:'img',
        des:'We make use of the best die cutting machines to ensure outstanding papercrafting for our customers. Whether you want unit die cutting or bulk die cutting, we have the right machine that would serve your purposes.'
    },
    {
        name:'Die Cutting',
        img:'img',
        des:'We make use of automatic Heidelburg die cutting machines for bulk die cutting production. Our die cutting machines are essentially some of the finest die cutting machines made in Germany and China and the machines are used to produce an outstanding outcome for your papercraft work.'
    },
    {
        name:'Die Cutting',
        img:'img',
        des:'Nowadays, die cutting has advanced remarkably to include cutting-edge technologies. We also understand the immense importance of precision and high quality when it comes to producing papercrafts for our customers.'
    },
]

const DieCutting = () => {
  return (
    <div>
{
    dInfos.map((dInfo)=>{
        console.log(dInfo)
    })
}
    </div>
  )
}

export default DieCutting