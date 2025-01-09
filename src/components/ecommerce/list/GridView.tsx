'use client'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import Products from '@/types/productsType'
import { formatPrice } from '@/utils/format'
import { Favorite } from '@/layout'
import { FaSearch } from 'react-icons/fa'

interface GridProducts {
  products: Products[]
}

const GridView: React.FC<GridProducts> = ({ products }) => {
  return (
    <Wrapper>
      <div className='grid__view-products' role='list'>
        {products.map((product) => {
          const { id, image, name, price } = product
          return (
            <article key={id}>
              <div className='grid__view-products-images'>
                <Image
                  className='grid__view-images'
                  src={image}
                  alt={name}
                  width={470}
                  height={500}
                />
                <Link
                  href={`/ecommerce/${id}`}
                  className='grid__view-products-link'
                >
                  <FaSearch />
                </Link>
              </div>
              <footer className='grid__view-footer'>
                <h5 className='grid__view-favorite'>
                  <Favorite
                    productId={id}
                    name={name}
                    products={products}
                    classIcon='grid__view-favorite-icon'
                  />
                </h5>
                <p className='grid__view-products-price'>
                  {formatPrice(price)}
                </p>
              </footer>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 2rem;
  .grid__view-products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
  .grid__view-products-images {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    padding: 0px;
  }
  .grid__view-images {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .grid__view-products-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .grid__view-images:hover,
  .grid__view-products-images:hover .grid__view-images {
    opacity: 0.5;
  }
  .grid__view-products-images:hover .grid__view-products-link {
    opacity: 1;
  }
  .grid__view-products-link:hover ~ .grid__view-images {
    opacity: 0.5;
  }
  .grid__view-products-price {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  .grid__view-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    color: var(--clr-grey-dark);
  }
  .grid__view-favorite,
  .grid__view-products-price {
    margin-bottom: 0;
    font-weight: 400;
  }
  .grid__view-favorite-icon {
    vertical-align: text-top;
    cursor: pointer;
    width: 18px;
    height: 18px;
    color: var(--clr-grey-dark);
  }

  @media (max-width: 1500px) {
    .grid__view-products {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  @media (max-width: 768px) {
    .grid__view-products {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default GridView
