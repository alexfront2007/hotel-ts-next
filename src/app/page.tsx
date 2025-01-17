import {
  FeaturedProducts,
  Hero,
  About,
  Experience,
  Works,
  Contact,
} from '@/components/home'
import { StarsCanvas } from '@/canvas'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Works />
      <FeaturedProducts />
      <div className='home__contact-container'>
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  )
}

export default Home
