import { useRouter } from 'next/router'
import { SyntheticEvent, useContext } from 'react';
import { ThemeContext } from "styled-components";
import ITheme from '../styles/theme/ITheme';
import styled from "styled-components";

function ActiveLink({ children, href }) {

    const themeContext: ITheme = useContext(ThemeContext);

    const router = useRouter()
    const style = {
        marginRight: 10,
        fontWeight: router.pathname ===
        href ? 700 : 400
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <StyledLink href={href} onClick={handleClick} style={style}>
            {children}
        </StyledLink>
    )
}

export default ActiveLink

const StyledLink = styled.a`
  transition: 500ms all ease-in-out;
  &:hover {
    border-bottom: 1px solid;
  }
`