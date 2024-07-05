'use client'
import styled from 'styled-components'
import { ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useEffect } from 'react'
import {
  updateSort,
  setGridView,
  setListView,
  sortProducts,
} from '@/redux/features/filterSlice'

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    sort,
  } = useAppSelector((store) => store.filter)

  const dispatch = useAppDispatch()

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateSort(e.target.value))
  }

  useEffect(() => {
    dispatch(sortProducts())
  }, [sort, dispatch])

  return (
    <Wrapper>
      <div className='sort__container'>
        <div className='sort__btn'>
          <button
            type='button'
            className={`${grid_view ? 'sort__btn-active' : null}`}
            onClick={() => dispatch(setGridView())}
          >
            <BsFillGridFill />
          </button>
          <button
            type='button'
            className={`${!grid_view ? 'sort__btn-active' : null}`}
            onClick={() => dispatch(setListView())}
          >
            <BsList />
          </button>
        </div>
        <p className='sort__title'>{products.length} products found</p>
        <hr />
        <form>
          <label htmlFor='sort__price'>sort by</label>
          <select
            name='sort'
            id='sort'
            className='sort__input'
            value={sort}
            onChange={handleSort}
          >
            <option value='price-lowest'>price (lowest)</option>
            <option value='price-highest'>price (highest)</option>
            <option value='name-a'>name (a-z)</option>
            <option value='name-z'>name (z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 1450px;
  margin: auto;
  margin-bottom: 2rem;
  .sort__container {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    column-gap: 2rem;
  }
  .sort__btn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .sort__btn-active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }
  .sort__input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  .sort__price {
    font-size: 1rem;
    text-transform: capitalize;
  }
  .sort__title {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  @media (max-width: 1500px) {
    margin-left: 15px;
    margin-right: 15px;
  }
  @media (max-width: 768px) {
    .sort__btn {
      display: none;
    }
    .sort__container {
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: 576px) {
    .sort__btn {
      width: 50px;
    }
  }
`

export default Sort