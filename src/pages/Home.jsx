import React from 'react'
import HeroSection from '../componets/home/Hero'
import One11ShowSection from '../componets/home/One11ShowSection'
import JoinUsSection from '../componets/home/JoinUsSection'
import ProMusicServices from '../componets/home/ProMusicServices'
import LatestSignedArtists from '../componets/home/LatestSignedArtists'
import GallerySection from '../componets/home/GallerySection'
import InsightsSection from '../componets/home/InsightsSection'
import ChordifiersStudio from '../componets/home/ChordifiersStudio'
import TestimonialCarousel from '../componets/home/TestimonialsCarousedl'
import MusicProducerCTA from '../componets/home/MusicProducerCTA'

const Home = () => {
  return (
   <>
    <HeroSection/>
    <One11ShowSection/>
    <JoinUsSection/>
    <ProMusicServices/>
    <LatestSignedArtists/>
    <GallerySection/>
    <InsightsSection/>
    <ChordifiersStudio/>
    <TestimonialCarousel/>
    <MusicProducerCTA/>
   </>
  )
}

export default Home