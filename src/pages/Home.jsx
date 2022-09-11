import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
const Home = () => {
    return (
        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:1rem;
    margin: 30px 0 0 70px
`
export default Home