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
    justify-content: center;
    margin-top: 1.5rem;
`
export default Home