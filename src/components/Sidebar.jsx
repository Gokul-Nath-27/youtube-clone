import styled from "styled-components"
import GoTube from '../assets/img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsFootballOutlinedIcon from '@mui/icons-material/SportsFootballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Sidebar = () => {
    const { isDarkmode, setIsDarkmode } = useContext(DarkModeContext)
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={GoTube} />
                    GoTube.
                </Logo>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Item>
                    <ExploreOutlinedIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon />
                    Subscription
                </Item>
                <Hr />
                <Item>
                    <HistoryIcon />
                    History
                </Item>
                <Item>
                    <VideoLibraryOutlinedIcon />
                    Library
                </Item>
                <Hr />
                <SignIn>
                    <p>Sign in to like, comment and Subscribe.</p>
                    <Button>
                        <AccountCircleOutlinedIcon />
                        SIGN IN
                    </Button>
                </SignIn>
                <Hr />
                <Title>Best of Gotube</Title>
                <Item>
                    <LibraryMusicOutlinedIcon />
                    Music
                </Item>
                <Item>
                    <SportsFootballOutlinedIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />
                    Gaming
                </Item>
                <Item>
                    <SlideshowOutlinedIcon />
                    Movie
                </Item>
                <Item>
                    <NewspaperOutlinedIcon />
                    News
                </Item>
                <Item>
                    <SensorsOutlinedIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsOutlinedIcon />
                    Settings
                </Item>
                <Item>
                    <FlagOutlinedIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon />
                    Help
                </Item>
                <Item onClick={() => (setIsDarkmode(!isDarkmode))}>
                    {(isDarkmode) ? (<LightModeOutlinedIcon />) : (<DarkModeOutlinedIcon />)}
                    {(isDarkmode) ? 'Light Mode' : 'Dark Mode'}
                </Item>
            </Wrapper>
        </Container>
    )
}

// Stylings
const Container = styled.div`
    flex:1.25;
    height:100vh;
    background-color: ${({ theme }) => theme.bgColorSecondary};
    color:${({ theme }) => theme.text};
    position:sticky;
    top:0;
`
const Wrapper = styled.div`
    padding: 18px 26px;
`
const Logo = styled.div`
    display: flex;
    font-family: 'Roboto';
    font-size:18px;
    align-items:center;
    gap:0.5rem;
    font-weight:bold;
    margin: 0 0 1.5rem 0 ;

`
const Img = styled.img`
    height:25px;
`
const Item = styled.div`
    font-size:14px;
    display:flex;
    align-items:center;
    gap:1.2rem;
    cursor:pointer;
    padding: 0.5rem 0.5rem;
    &:hover{
        background-color: ${({ theme }) => theme.hover};;
        border-radius: 5px;
    }
`
const Hr = styled.hr`
    margin:1rem 0;
    border: 0.5px solid ${({ theme }) => theme.hr};;
`
const Title = styled.h5`
font-size: 14px;
color: ${(theme) => theme.hover};
margin:5px 0;
`
const SignIn = styled.div``
const Button = styled.button`
    display:flex;
    align-items:center;
    gap:5px;
    font-size:14px;
    font-weight:bold;
    padding:5px 10px;
    background-color:transparent;
    color: #3ea6ff;
    border: 1px solid #3ea6ff;
    border-radius:3px;
    cursor:pointer;
    margin-top:12px;
`
export default Sidebar
