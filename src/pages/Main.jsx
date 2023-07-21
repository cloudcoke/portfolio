import { About } from "../component/about/About"
import { Contact } from "../component/contact/Contact"
import { Project } from "../component/project/Project"
import { Skills } from "../component/skills/Skills"
import { WrapComp } from "../component/wrap/styled"

export const Main = () => {
    return (
        <>
            <WrapComp>
                <About></About>
                <Contact></Contact>
                <Skills></Skills>
                <Project></Project>
            </WrapComp>
        </>
    )
}
