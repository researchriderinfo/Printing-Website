import React from 'react'

const lInfos=[
    {
        name:'lamination',
        img:'img',
        des:'We understand the importance of using the right lamination machines in producing the best quality lamination. At Printing, we primarily use heat activation lamination system with automatic lamination. We make use of BOPP lamination film which has amazing features such as excellent gloss, high transparency, superb moisture barrier, and efficient chemical resistance.'
    },
    {
        name:'lamination',
        img:'img',
        des:'We ensure that your laminated document is glossy, attractive and sustainable. We leverage optimally thick lamination film to ensure that you get the attractiveness and rigidity you desire in your laminated document.'
    },
    {
        name:'lamination',
        img:'img',
        des:'Our efficient lamination process ensures that your document would possess a perfect finish, unique thickness, and tear resistance. We can laminate all kinds of documents of various sizes and forms while making sure that the highest quality standard is maintained.'
    },
]

const Lamination = () => {
  return (
    <div>
{
    lInfos.map((lInfo)=>{

        return(
            console.log(lInfo)
        )
    })
}
    </div>
  )
}

export default Lamination