'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addFavorite, removeFavorite } from '@/redux/features/favoriteSlice'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import Products from '@/types/productsType'

interface ListProducts {
  name: string
  products: Products[]
  productId: string
}

const Favorite: React.FC<ListProducts> = ({ name, products, productId }) => {
  const dispatch = useAppDispatch()

  const { favorites_products } = useAppSelector((store) => store.favorite)

  const handleAddToFavorite = (productId: string, products: Products[]) => {
    dispatch(addFavorite({ productId, products }))
  }
  const handleremoveToFavorite = (productId: string) => {
    dispatch(removeFavorite({ productId }))
  }
  const wishList = favorites_products.some((item) => item.id === productId)

  return (
    <>
      {name}{' '}
      {wishList ? (
        <MdFavorite
          onClick={() => handleremoveToFavorite(productId)}
          color='red'
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <MdFavoriteBorder
          onClick={() => handleAddToFavorite(productId, products)}
          style={{ cursor: 'pointer' }}
        />
      )}
    </>
  )
}

export default Favorite
