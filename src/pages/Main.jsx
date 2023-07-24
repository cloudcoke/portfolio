import { Header } from "../component/header/Header"
import { About } from "../component/about/About"
import { Contact } from "../component/contact/Contact"
import { Project } from "../component/project/Project"
import { Skills } from "../component/skills/Skills"
import { WrapComp } from "../component/wrap/styled"
import useMoveScroll from "../hooks/useMoveScroll"

export const Main = () => {
    const { element: home, onMoveToElement: moveToHome } = useMoveScroll()
    const { element: about, onMoveToElement: moveToAbout } = useMoveScroll()
    const { element: contact, onMoveToElement: moveToContact } = useMoveScroll()
    const { element: skills, onMoveToElement: moveToSkills } = useMoveScroll()
    const { element: project, onMoveToElement: moveToProject } = useMoveScroll()

    return (
        <>
            <WrapComp ref={home}>
                <Header
                    moveToHome={moveToHome}
                    moveToAbout={moveToAbout}
                    moveToContact={moveToContact}
                    moveToSkills={moveToSkills}
                    moveToProject={moveToProject}
                ></Header>
                <About about={about}></About>
                <Contact contact={contact}></Contact>
                <Skills skills={skills}></Skills>
                <Project project={project}></Project>
            </WrapComp>
        </>
    )
}
