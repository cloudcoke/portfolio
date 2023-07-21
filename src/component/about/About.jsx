import { AboutContentWrap, AboutHeaderWrap, AboutWrap } from "./styled"

export const About = () => {
    return (
        <AboutWrap>
            <AboutHeaderWrap>About Me</AboutHeaderWrap>
            <AboutContentWrap>안녕하세요. Cloud와 Linux에 관심이 많은 백엔드 개발자 이민수 입니다.</AboutContentWrap>
            <AboutContentWrap>
                클라우드 기술에 대한 관심은 현대 소프트웨어 개발에서 빠질 수 없는 중요한 부분이라고 생각합니다.
            </AboutContentWrap>
            <AboutContentWrap>
                다양한 클라우드 서비스들을 학습하고, 이를 효과적으로 활용하여 안정적이고 확장 가능한 웹 어플리케이션을
                구축하는 것을 목표로 하고 있습니다.
            </AboutContentWrap>
        </AboutWrap>
    )
}
