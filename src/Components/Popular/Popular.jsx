import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className=''>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div>
        {data_product.map((item,index)=>(
         <Item key={index} id ={item.id} name={item.name} image={item.image}  />
        ))}
      </div>
    </div>
  )
}

export default Popular
