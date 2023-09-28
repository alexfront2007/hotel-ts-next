'use client'
import React from 'react'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '@/app/redux/hooks'
import { closeModal } from '@/app/redux/features/modalSlice'
import { RouterLink, SocialLink } from '../utils'
import Image from 'next/image'
import city from '../images/city_coast_skyscrapers_866257_1920x1200.jpg'

const Sidebar = () => {
  const { isOpen } = useAppSelector((store) => store.modal)
  const dispatch = useAppDispatch()

  return (
    <Wrapper>
      <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        {/* <div className='video'>
          <video src='/public/city.webm' autoPlay muted loop />
        </div> */}
        <Image
          src={city}
          alt='city'
          width={1920}
          height={1920}
          className='img'
        />
        <div className='dark-overlay'></div>
        <div className='content'>
          <button className='close-btn' onClick={() => dispatch(closeModal())}>
            <i className='fas fa-times'></i>
          </button>
          <div>
            <RouterLink parentClass='sidebar-links' />
            <SocialLink />
          </div>
        </div>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .sidebar {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    transition: var(--transition);
    transform: translateX(-100%);
  }
  .show-sidebar {
    transform: translateX(0);
  }
  .video {
    max-height: 100vh;
    position: relative;
    z-index: 1;
    padding-bottom: 56.25%;
  }
  .img {
    max-height: 100vh;
    position: relative;
    z-index: 1;
  }
  .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    pointer-events: none;
    z-index: 1;
  }

  .content {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .sidebar-links {
    text-align: center;
  }
  .sidebar-links a,
  button {
    font-size: 2rem;
    transition: var(--transition);
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    display: inline-block;
    text-decoration: none;
    margin-bottom: 1.5rem;
  }
  .sidebar-links button {
    background: transparent;
    cursor: pointer;
    text-transform: capitalize;
    border: none;
    outline: none;
  }
  .sidebar-links a:hover {
    color: var(--clr-primary-5);
  }
  .sidebar-links button:hover {
    color: var(--clr-primary-5);
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    background: transparent;
    border: transparent;
    transition: var(--transition);
    color: #bb2525;
    cursor: pointer;
  }
  .close-btn:hover {
    color: #e66b6b;
  }
  @media screen and (max-width: 768px) {
    .close-btn {
      right: 2rem;
    }
  }
`

export default Sidebar
