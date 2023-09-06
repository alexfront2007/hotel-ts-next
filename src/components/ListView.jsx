'use client'
import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../helpers'
import { Link } from 'react-router-dom'
import { handleButtonClick } from '../helpers'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFavorite,
  removeFavorite,
} from '../app/global/features/productSlice'

const ListView = ({ products }) => {
  const dispatch = useDispatch()

  const handleAddToFavorite = (productId) => {
    dispatch(addFavorite({ productId }))
  }
  const handleremoveToFavorite = (productId) => {
    dispatch(removeFavorite({ productId }))
  }
  const isFavorite = useSelector((state) => state.products.favorites_products)
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product
        const wishList = isFavorite.some((item) => item.id === id)
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>
                {name}{' '}
                {wishList ? (
                  <MdFavorite
                    onClick={() => handleremoveToFavorite(id)}
                    color='red'
                  />
                ) : (
                  <MdFavoriteBorder onClick={() => handleAddToFavorite(id)} />
                )}
              </h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link
                to={`/rooms/${id}`}
                className='btn'
                onClick={handleButtonClick}
              >
                Details
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  max-width: 1450px;
  margin: auto;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView