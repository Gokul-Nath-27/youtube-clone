import styled from 'styled-components'
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';

const Container = styled.div`
display: flex;
`
const Main = styled.div`
flex:7;`
const Wrapper = styled.div``

function App() {
  return (
    <Container>
      <Sidebar />
      <Main>
          <Navbar />
          <Wrapper>
            Video Cards
          </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
