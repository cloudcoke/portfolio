import { HeaderLogo, HeaderLogoWrap, HeaderContentBox, HeaderContainer, HeaderContent, HeaderWrap } from "./styled"
import logo from "../../images/logo.png"

export const Header = ({ moveToHome, moveToAbout, moveToContact, moveToSkills, moveToProject }) => {
    return (
        <>
            <HeaderWrap>
                <HeaderContainer>
                    <HeaderContentBox>
                        <HeaderLogoWrap>
                            <HeaderLogo src={logo}></HeaderLogo>
                            Cloudcoke's Portfolio
                        </HeaderLogoWrap>
                    </HeaderContentBox>
                    <HeaderContentBox>
                        <HeaderContent onClick={moveToHome}>Home</HeaderContent>
                        <HeaderContent onClick={moveToAbout}>About</HeaderContent>
                        <HeaderContent onClick={moveToContact}>Contact</HeaderContent>
                        <HeaderContent onClick={moveToSkills}>Skills</HeaderContent>
                        <HeaderContent onClick={moveToProject}>Project</HeaderContent>
                    </HeaderContentBox>
                </HeaderContainer>
            </HeaderWrap>
        </>
    )
}
