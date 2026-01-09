import Image from 'next/image'
import React from 'react'

const CategoryItem = ({categoryImage, categoryName, categoryId}) => {
  return (
    <div className='p-4 border flex flex-col gap-3 justify-center items-center hover:border-gray-500'>
      <Image
        src={"/img/home/" + categoryImage}
        width={250}
        height={250}
        className='h-[150px] w-full object-cover'
        alt={categoryName}
      />

      <span>{categoryName}</span>
    </div>
  )
}

export default CategoryItem
