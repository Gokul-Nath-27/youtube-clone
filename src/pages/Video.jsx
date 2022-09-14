import React from 'react'
import styled from 'styled-components'
import NewComment from '../components/NewComment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Comment from '../components/Comment';
import Card from '../components/Card';
import ShareIcon from '@mui/icons-material/Share';
const Video = () => {
  return (
    <Container>
      <VideoContent>
        <VideoWrap>
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            allowFullScreen
            title='youtube video.'
          >
          </iframe>
        </VideoWrap>

        <Title>How Content Creators Make Money On Social Media - Exposed!</Title>
        <VideoDetails>
          <ViewsDate>1,742 viewsSep 13, 2022</ViewsDate>
          <Buttons>
            <Button><ThumbUpOffAltIcon /> Like</Button>
            <Button><ThumbDownOutlinedIcon /> Dislike</Button>
            <Button><ShareIcon /> Share</Button>
            <Button><ThumbUpOffAltIcon /> Save</Button>
          </Buttons>
        </VideoDetails>
        <Hr />
        <ChannelInfo>
          <Channel>
            <Img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"></Img>
            <ChannelName>
              <h2>Youtube Clone.</h2>
              <p>372k subscribers</p>
            </ChannelName>
          </Channel>
          <Subscribe>
            <SubBtn>SUBSCRIBE</SubBtn>
            <NotificationsNoneIcon />
          </Subscribe>
        </ChannelInfo>
        <Discription>In September 2018, W3C CSS Scrollbars defined specifications for customizing the appearance of scrollbars with CSS.
          As of 2020, 96% of internet users are
          running browsers that support CSS scrollbar styling.  However, you will need to write two sets of CSS rules to cover Blink and WebKit and also Firefox browsers.

          In this tutorial, you will learn how to use CSS to customize scrollbars to support modern browsers.
          <div>SHOW MORE</div>
        </Discription>
        <Hr />
        <NewComment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </VideoContent>
      <Recommendation>
        <Card />
      </Recommendation>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap:1rem;
  margin-top: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
`
const VideoContent = styled.div`
  flex: 5;
`
const Recommendation = styled.div`
  flex: 2;
`
const VideoWrap = styled.div`
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 */
  position: relative;

  iframe{
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
    width: 100%;
    height: 100%;
  }
`
const VideoDetails = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 1rem;
`
const Title = styled.p`
margin-top: 1rem;
margin-bottom: 0.5rem;
font-size: 18px;
`
const ViewsDate = styled.span`
  color: grey;

`
const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
  background-color: transparent;
  color: ${({ theme }) => theme.text}

`
const ChannelInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 1rem 0;
`
const Channel = styled.div`
display: flex;
gap:1rem;
`

const ChannelName = styled.div`
  display: flex;
  flex-direction: column;
  color: grey;
  gap: 3px;
  h2{
    color: ${({ theme }) => theme.text};
    font-weight: normal;
  }
  p{
    font-size: 12px;
  }
`
const Subscribe = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`
const Img = styled.img`
  height:42px;
  width: 42px;
  object-fit: cover;
  border-radius: 50%;
`
const Hr = styled.hr`
    border: 0.1px solid ${({ theme }) => theme.hr};
`
const SubBtn = styled.div`
  background-color: #cc0000;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  color: white;

`
const Discription = styled.p`
  font-size: 14px;
  line-height: 1.3;
  max-width: 700px;
  color:${({ theme }) => theme.textlight};
  margin-left: 3.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  div{
    font-size: 13px;
    color:grey;
    margin: 1rem 0;

    &:hover{
      color:${({ theme }) => theme.text};

    }
  }
`


export default Video