import React from 'react'
import styled from 'styled-components'
const Comment = () => {
    return (
        <Container>
            <Avatar src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
            <Details>
                <Name>John Doe <Date>3 days ago</Date></Name>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione tempore quaerat incidunt co Loreuam, velit? Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi cumque hic impedit ipsa esse. Cum natus maiores optio nihil sit reiciendis veniam ipsa aliquam, quasi, animi quas est, facilis accusamus perspiciatis unde dignissimos a repellat dolore voluptates porro similique. Pariatur perferendis esse aliquid omnis iure temporibus debitis id maiores. ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum.</Text>
            </Details>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    gap:1.5rem;
    margin: 1rem 0;
    margin-left: 1.5rem;
`
const Avatar = styled.img`
    width: 42px;
    height: 42px;
    object-fit: cover;
    border-radius: 50%;
    `
const Details = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 12px;
`
const Name = styled.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
`
const Date = styled.span`
    font-size: 12px;
    color:grey;
`
const Text = styled.span`
    color: ${({theme}) => theme.textlight};
    font-size: 14px;
`

export default Comment