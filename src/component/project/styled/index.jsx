import tw from "tailwind-styled-components"

export const ProjectWrap = tw.div`
container
`

export const ProjectHeader = tw.div`
w-full
text-3xl
text-sky-700
font-bold
mb-8
`
export const ProjectBoxWrap = tw.div`
flex
justify-start
py-8
mb-6	
border-solid
border-b
`

export const ProjectSubHeader = tw.div`
w-full
text-xl
text-sky-800
`

export const ProjectThumbnail = tw.img`
w-full
block
`

export const ProjectContentListWrap = tw.ul`
w-3/5
pl-10
`

export const ProjectContentList = tw.li`
flex
flex-wrap
mb-3
[&:first-child]:text-xl
`

export const ProjectStacks = tw.div`
rounded-3xl
bg-cyan-400
p-2
text-white
[&:not(:first-child)]:ml-2
mb-1
`
export const ProjectThumbnailLink = tw.a`
w-2/5
block
`

export const ProjectLink = tw.a`
underline
`
