import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import Results from '../components/results'
import Search from '../components/search'

export default function Home() {
  return (
    <>
       <Search />
       <Results />
    </>
  )
}
