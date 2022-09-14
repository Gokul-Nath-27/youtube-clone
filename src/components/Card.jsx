import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Card = () => {
    return (
        <Link to='video' style={{textDecoration:'none'}}>
            <Container>
                <Image src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <Details>
                    <ChannelImg src="https://images.unsplash.com/photo-1598908314732-07113901949e" />
                    <Info>
                        <Title>This is a test Video Template.</Title>
                        <ChannelName>GoTube</ChannelName>
                        <Views>627k views.</Views>
                    </Info>
                </Details>
            </Container>
        </Link>

    )
}


const Container = styled.div`
    width: 360px;
    cursor:pointer;
`
const Image = styled.img`
    width: 100%;
    height:200px;
    object-fit: fill;

`
const Details = styled.div`
    display: flex;
    gap:1rem;
    margin: 10px;
`
const ChannelImg = styled.img`
    object-fit: fill;
    width:36px;
    height: 36px;
    border-radius: 50%;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    color: #7c7c7c;
    gap:5px;
`
const Title = styled.div`
    font-size:14px;
    color: ${({theme}) => theme.text}
`
const ChannelName = styled.h2`
    font-size:14px;
`
const Views = styled.div`
    font-size:14px;
`

export default Card