import { SkillsTypeWrap, SkillsTypeListWrap, SkillsType, SkillsHeader, SkillsSubHeader, SkillsWrap } from "./styled"

export const Skills = ({ skills }) => {
    return (
        <SkillsWrap ref={skills}>
            <SkillsHeader>Skills</SkillsHeader>
            <SkillsTypeWrap>
                <SkillsSubHeader>Backend</SkillsSubHeader>
                <SkillsTypeListWrap>
                    <SkillsType>Node.js</SkillsType>
                    <SkillsType>Nest.js</SkillsType>
                    <SkillsType>MySQL</SkillsType>
                </SkillsTypeListWrap>
            </SkillsTypeWrap>
            <SkillsTypeWrap>
                <SkillsSubHeader>Infra</SkillsSubHeader>
                <SkillsTypeListWrap>
                    <SkillsType>AWS</SkillsType>
                    <SkillsType>Terraform</SkillsType>
                </SkillsTypeListWrap>
            </SkillsTypeWrap>
        </SkillsWrap>
    )
}
