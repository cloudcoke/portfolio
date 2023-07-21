import { HeaderContainer, HeaderContent, HeaderWrap } from "./styled"

export const Header = () => {
    return (
        <>
            <HeaderWrap>
                <HeaderContainer>
                    <HeaderContent>Home</HeaderContent>
                    <HeaderContent>About</HeaderContent>
                    <HeaderContent>Skills</HeaderContent>
                    <HeaderContent>Project</HeaderContent>
                    <HeaderContent>Contact</HeaderContent>
                </HeaderContainer>
            </HeaderWrap>
        </>
    )
}
