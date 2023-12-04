'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/redux/hooks'
import { useParams, useRouter } from 'next/navigation'
import { formatPrice } from '@/helpers'
import { Loading, Error, ProductImages } from '@/components'
import styled from 'styled-components'
import { getSingeProduct } from '@/app/redux/features/productSlice'
import Favorite from '@/components/Favorite'

const url = `https://course-api.com/react-store-single-product?id=`

const SingleProductPage = () => {
  const { id } = useParams()
  const navigate = useRouter()
  const dispatch = useAppDispatch()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
  } = useAppSelector((store) => store.products)

  useEffect(() => {
    dispatch(getSingeProduct(`${url}${id}`))
  }, [dispatch, id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate.push('/')
      }, 3000)
    }
  }, [error, navigate])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  const { name, price, description, stock, id: sku, company, images } = product

  return (
    <Wrapper>
      <div className='section section-center page'>
        <div className=' product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2 className='text-white'>
              <Favorite id={sku} name={name} />
            </h2>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'> {description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock !== undefined
                ? stock > 0
                  ? 'In stock'
                  : 'out of stock'
                : 'undefined'}
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
