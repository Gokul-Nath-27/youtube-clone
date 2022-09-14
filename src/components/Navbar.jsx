import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder='search for contents' />
                    <SearchIcon />
                </Search>
                <Link to='signin' style={{textDecoration:'none', color:'inherit'}}>
                    <Button>
                        <AccountCircleOutlinedIcon />
                        SIGN IN
                    </Button>
                </Link>
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
    padding: 0.5rem 0;
    background-color: ${({theme}) => theme.bgColorSecondary};
    height: 56px;
    position: sticky;
    top:0;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;

`
const Search = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:0.5rem;
    border: 1px solid ${({ theme }) => theme.hr};
    padding:  0 1rem;
`
const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    background-color: transparent;
    color:${({ theme }) => theme.text};
`
const Button = styled.button`
    display:flex;
    align-items:center;
    gap:5px;
    font-size:14px;
    font-weight:bold;
    background-color:transparent;
    color: #3ea6ff;
    border: 1px solid #3ea6ff;
    border-radius:3px;
    cursor:pointer;
    padding: 5px 10px;
`

export default Navbar
