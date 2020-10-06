import styled from "styled-components";
import Link from "next/link";

function Header(props) {
    return <HeaderWrapper>
        <TextWrapper>
            <HeaderText>
                Hi, I'm <CrossThrough><LessStrong>Naman Gupta</LessStrong>,
                <br/>a.k.a</CrossThrough> <LessStrong>ProSavage</LessStrong>
            </HeaderText>
            <p>Owner of <strong><ClickableLink
                href={"https://savagelabs.net"}>SavageLabs</ClickableLink></strong></p>
        </TextWrapper>
    </HeaderWrapper>
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const HeaderText = styled.p`
  font-size: 90px;
  line-height: 100px;

  @media(max-width: 400px) {
    flex-direction: column;
    font-size: 65px;
    line-height: 65px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LessStrong = styled.strong`
  font-weight: 600;
`

const CrossThrough = styled.span`
  text-decoration: line-through;
`

const ClickableLink = styled(Link)`
  cursor: pointer;
`
