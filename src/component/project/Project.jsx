import {
    ProjectThumbnailLink,
    ProjectLink,
    ProjectBoxWrap,
    ProjectContentList,
    ProjectContentListWrap,
    ProjectHeader,
    ProjectStacks,
    ProjectSubHeader,
    ProjectThumbnail,
    ProjectWrap,
} from "./styled"
import wallet_thumb from "../../images/wallet_thumb.png"
import terminus_thumb from "../../images/terminus.gif"
import food_community_thumb from "../../images/food_community.gif"

export const Project = () => {
    return (
        <ProjectWrap>
            <ProjectHeader>Project</ProjectHeader>
            <ProjectSubHeader>BlockChain Wallet</ProjectSubHeader>
            <ProjectBoxWrap>
                <ProjectThumbnailLink href="https://github.com/100space/wallet" target="_blank">
                    <ProjectThumbnail src={wallet_thumb}></ProjectThumbnail>
                </ProjectThumbnailLink>
                <ProjectContentListWrap>
                    <ProjectContentList>
                        <ProjectLink href="https://github.com/100space/wallet" target="_blank">
                            블록체인 지갑을 만드는 프로젝트 입니다.
                        </ProjectLink>
                    </ProjectContentList>
                    <ProjectContentList>토큰 송금 및 입금과 NFT 구매도 가능합니다.</ProjectContentList>
                    <ProjectContentList>인원 : 4명</ProjectContentList>
                    <ProjectContentList>기간 : 2023.05.31 ~ 2023.07.18</ProjectContentList>
                    <ProjectContentList>상세 역할 : 백엔드 개발 및 배포</ProjectContentList>
                    <ProjectContentList>
                        페이지 :&nbsp;
                        <ProjectLink href="https://nftin.site" target="_blank">
                            https://nftin.site
                        </ProjectLink>
                    </ProjectContentList>
                    <ProjectContentList>
                        <ProjectStacks>NestJS</ProjectStacks>
                        <ProjectStacks>TypeScript</ProjectStacks>
                        <ProjectStacks>MongoDB</ProjectStacks>
                        <ProjectStacks>Mongoose</ProjectStacks>
                        <ProjectStacks>Swagger</ProjectStacks>
                        <ProjectStacks>AWS</ProjectStacks>
                        <ProjectStacks>Terraform</ProjectStacks>
                        <ProjectStacks>Github Actions</ProjectStacks>
                    </ProjectContentList>
                </ProjectContentListWrap>
            </ProjectBoxWrap>
            <ProjectSubHeader>Terminus</ProjectSubHeader>
            <ProjectBoxWrap>
                <ProjectThumbnailLink href="https://github.com/cloudcoke/terminus" target="_blank">
                    <ProjectThumbnail src={terminus_thumb}></ProjectThumbnail>
                </ProjectThumbnailLink>
                <ProjectContentListWrap>
                    <ProjectContentList>
                        <ProjectLink href="https://github.com/cloudcoke/terminus" target="_blank">
                            리눅스 명령어를 연습 할 수 있는 사이트를 만드는 프로젝트 입니다.
                        </ProjectLink>
                    </ProjectContentList>
                    <ProjectContentList>
                        리눅스 환경을 구축하지 않아도 Linux 명령어와 SQL 쿼리를 연습할 수 있습니다.
                    </ProjectContentList>
                    <ProjectContentList>인원 : 3명</ProjectContentList>
                    <ProjectContentList>기간 : 2023.03.23 ~ 2023.04.14</ProjectContentList>
                    <ProjectContentList>상세 역할 : 백엔드 개발 및 배포</ProjectContentList>
                    <ProjectContentList>
                        페이지 :&nbsp;
                        <ProjectLink href="https://terminus.run" target="_blank">
                            https://terminus.run
                        </ProjectLink>
                    </ProjectContentList>
                    <ProjectContentList>
                        <ProjectStacks>Node.js</ProjectStacks>
                        <ProjectStacks>TypeScript</ProjectStacks>
                        <ProjectStacks>Socket.IO</ProjectStacks>
                        <ProjectStacks>Express</ProjectStacks>
                        <ProjectStacks>MySQL</ProjectStacks>
                        <ProjectStacks>Sequelize</ProjectStacks>
                        <ProjectStacks>Bash</ProjectStacks>
                        <ProjectStacks>AWS</ProjectStacks>
                        <ProjectStacks>Github Actions</ProjectStacks>
                    </ProjectContentList>
                </ProjectContentListWrap>
            </ProjectBoxWrap>
            <ProjectSubHeader>Food Community</ProjectSubHeader>
            <ProjectBoxWrap>
                <ProjectThumbnailLink href="https://github.com/sangbeomhwang/community_node_project" target="_blank">
                    <ProjectThumbnail src={food_community_thumb}></ProjectThumbnail>
                </ProjectThumbnailLink>
                <ProjectContentListWrap>
                    <ProjectContentList>
                        <ProjectLink href="https://github.com/sangbeomhwang/community_node_project" target="_blank">
                            음식 관련 커뮤니티 사이트
                        </ProjectLink>
                    </ProjectContentList>
                    <ProjectContentList>
                        사용자들이 음식에 관련된 레시피나 조리도구, 일상이야기 등을 공유 할 수 있는 커뮤니티
                        사이트입니다.
                    </ProjectContentList>
                    <ProjectContentList>인원 : 3명</ProjectContentList>
                    <ProjectContentList>기간 : 2023.01.30 ~ 2023.02.17</ProjectContentList>
                    <ProjectContentList>상세 역할 : 개발 및 디자인</ProjectContentList>
                    <ProjectContentList>
                        페이지 :&nbsp;
                        <ProjectLink>http://43.200.183.116</ProjectLink>
                    </ProjectContentList>
                    <ProjectContentList>
                        <ProjectStacks>JavaScript</ProjectStacks>
                        <ProjectStacks>Node.js</ProjectStacks>
                        <ProjectStacks>Express</ProjectStacks>
                        <ProjectStacks>MySQL</ProjectStacks>
                        <ProjectStacks>Sequelize</ProjectStacks>
                        <ProjectStacks>AWS</ProjectStacks>
                        <ProjectStacks>HTML5</ProjectStacks>
                        <ProjectStacks>CSS 3</ProjectStacks>
                    </ProjectContentList>
                </ProjectContentListWrap>
            </ProjectBoxWrap>
        </ProjectWrap>
    )
}
