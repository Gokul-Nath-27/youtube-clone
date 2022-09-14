import React from 'react'
import styled from 'styled-components'
const NewComment = () => {
  return (
    <Container>
        <Avatar src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        <Input placeholder='Add a commment...'/>
    </Container>
  )
}
const Container = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin: 1rem 0;
`
const Avatar = styled.img`
width: 42px;
height: 42px;
object-fit: cover;
border-radius: 50%;
`
const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    border-bottom: 0.5px solid grey;
    padding: 0.5rem;
    color: ${({theme}) => theme.textlight};
`

export default NewComment