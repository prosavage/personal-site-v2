import styled, {ThemeContext} from "styled-components";
import ActiveLink from "./ActiveLink";
import PropsTheme from "../styles/theme/PropsTheme";
import DarkTheme from "../styles/theme/impl/DarkTheme";
import {useContext} from "react";
import {Moon, Sun} from "react-feather";
import {ThemeToggleContext} from "./context/ThemeToggleContext";

function Navbar(props) {
    const themeContext = useContext(ThemeContext);
    const themeToggleContext = useContext(ThemeToggleContext);

    const links = [
        {
            name: "GitHub",
            href: "https://github.com/ProSavage"
        },
        {
            name: "YouTube",
            href: "https://youtube.com"
        },
        {
            name: "Blog",
            href: "https://blog.prosavage.net"
        }
    ]

    const getLogoPath = () => {
        return themeContext === DarkTheme ? "prosavage-logo-dark.svg" : "prosavage-logo-light.svg"
    }


    return <Wrapper>
        <Item>
            <Logo height={50} src={`/img/${getLogoPath()}`} alt="ProSavage"/>
        </Item>
        <Item>
            {links.map(link => <LinkWrapper key={link.href}>
                <ActiveLink href={link.href}>{link.name}</ActiveLink>
            </LinkWrapper>)}
        </Item>
        <Item>
            <ClickableThemeContainer>
                {themeContext === DarkTheme ?
                    <Sun onClick={() => themeToggleContext.setTheme("light")}/> :
                    <Moon onClick={() => themeToggleContext.setTheme("dark")}/>}
            </ClickableThemeContainer>
        </Item>
    </Wrapper>
}

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  min-height: 75px;
  
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  
  /* background: ${(props: PropsTheme) => props.theme.background}; */
  background: transparent;
  backdrop-filter: blur(5px);
  
  padding: 10px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  fill: ${(props: PropsTheme) => props.theme.color};
`

const LinkWrapper = styled.div`
  padding: 0 10px;
`

const ClickableThemeContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`