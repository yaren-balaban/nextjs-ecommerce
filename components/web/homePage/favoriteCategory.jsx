import React from 'react'
import categories from '@/data/favoriteCategory.json'
import CategoryItem from './categoryItem'

const FavoriteCategory = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-1 w-full'>
            <h1 className='text-3xl'>Favori Kategorilerimiz</h1>
            <h3 className='text-xl'>En beğenilen kategoriler</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-5'>
                {
                    categories.map((item, index) => (
                        <CategoryItem
                            key={index}
                            categoryImage={item.image}
                            categoryName={item.name}
                            categoryId={item.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FavoriteCategory
