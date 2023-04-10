import React from 'react'

const bInfos=[
  {
    name:'Bindary',
    img:'img',
    des:'In Printing, we invest in the best bindery equipment in order to offer excellent services to our customer.'
  },
  {
    name:'Bindary',
    img:'img',
    des:'Some of our most common bindery equipment and services include saddle stitching, wire spiral, punching, clip, and automatic folding machine.Saddle stitching is a vital method for binding books. However, it is most suitable for books around 64 pages or less. Our bindery experts in Printing are dedicated to making sure that you get the best service for saddle stitching.'
  },
  {
    name:'Bindary',
    img:'img',
    des:'Binding with wire spiral is also a very popular art, commonly referred to as spiral binding. Spiral binding is important to organize a document and make it look neat and presentable. While there are several forms of spiral binding, you can be sure of the best quality with us.'
  },
]

const Bindary = () => {
  return (
    <div>
{
  bInfos.map((bInfo)=>{
    console.log(bInfo)
  })
}
    </div>
  )
}

export default Bindary