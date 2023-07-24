import { ContactTpyeWrap, ContactHeader, ContactWrap, ContactSubHeader, ContactContent, ContactLink } from "./styled"

export const Contact = ({ contact }) => {
    return (
        <ContactWrap ref={contact}>
            <ContactHeader>Contact</ContactHeader>
            <ContactTpyeWrap>
                <ContactSubHeader>Email</ContactSubHeader>
                <ContactContent>
                    <ContactLink href="mailto:cloudcoke.dev@gmail.com">cloudcoke.dev@gmail.com</ContactLink>
                </ContactContent>
            </ContactTpyeWrap>
            <ContactTpyeWrap>
                <ContactSubHeader>Github</ContactSubHeader>
                <ContactContent>
                    <ContactLink href="https://github.com/cloudcoke" target="_blank">
                        https://github.com/cloudcoke
                    </ContactLink>
                </ContactContent>
            </ContactTpyeWrap>
            <ContactTpyeWrap>
                <ContactSubHeader>Blog</ContactSubHeader>
                <ContactContent>
                    <ContactLink href="https://velog.io/@cloudcoke" target="_blank">
                        https://velog.io/@cloudcoke
                    </ContactLink>
                </ContactContent>
            </ContactTpyeWrap>
        </ContactWrap>
    )
}
