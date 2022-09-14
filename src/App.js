import styled, { ThemeProvider } from 'styled-components'
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme'
import { useContext } from 'react';
import { DarkModeContext } from './contexts/DarkModeContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './components/SignIn';

function App() {
  const { isDarkmode } = useContext(DarkModeContext)

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
        <Container>  
          <Sidebar />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />}/>
                  <Route path='video' element={<Video />}/>
                  <Route path='signin' element={<SignIn />}/>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </ThemeProvider>
    </BrowserRouter>

  );
}

const Container = styled.div`
  display: flex;
  `
const Main = styled.div`
  flex:7;
  background-color: ${({ theme }) => theme.bgColorPrimary};
  color:${({ theme }) => theme.text};
  `
const Wrapper = styled.div`

`

export default App;
