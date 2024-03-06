import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
    <Main/>
    <Row rowId='1'title='Upcoming'fetchURL={requests.upcoming}/>
    <Row rowId='2'title='topRated'fetchURL={requests.topRated}/>
    <Row rowId='3'title='trending'fetchURL={requests.trending}/>
    <Row rowId='4'title='popular'fetchURL={requests.popular}/>
    </>
  )
}

export default Home