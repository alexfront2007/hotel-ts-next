'use client'
import React, { useEffect } from 'react'
import { getSingeProduct } from '../features/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { formatPrice } from '../helpers'
import { Loading, Error, ProductImages } from '../components'
import styled from 'styled-components'
import { addFavorite, removeFavorite } from '../features/productSlice'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const url = `https://course-api.com/react-store-single-product?id=`

const SingleProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
  } = useSelector((store) => store.products)

  const isFavorite = useSelector((state) => state.products.favorites_products)

  useEffect(() => {
    dispatch(getSingeProduct(`${url}${id}`))
  }, [dispatch, id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [error, navigate])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  const handleAddToFavorite = (productId) => {
    dispatch(addFavorite({ productId }))
  }
  const handleremoveToFavorite = (productId) => {
    dispatch(removeFavorite({ productId }))
  }

  const { name, price, description, stock, id: sku, company, images } = product
  const wishList = isFavorite.some((item) => item.id === id)

  return (
    <Wrapper>
      <div className='section section-center page'>
        <div className=' product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2 className='text-white'>
              {name}{' '}
              {wishList ? (
                <MdFavorite
                  onClick={() => handleremoveToFavorite(id)}
                  color='red'
                />
              ) : (
                <MdFavoriteBorder onClick={() => handleAddToFavorite(id)} />
              )}
            </h2>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'> {description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU : </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
    color: #6c757d;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    color: #6c757d;

    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
