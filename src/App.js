import styled, { ThemeProvider } from 'styled-components'
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme'
import { useContext } from 'react';
import { DarkModeContext } from './contexts/DarkModeContext'
function App() {
  const { isDarkmode } = useContext(DarkModeContext)

  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar />
        <Main>
          <Navbar />
          <Wrapper>
            Video Cards
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>

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
const Wrapper = styled.div``

export default App;
