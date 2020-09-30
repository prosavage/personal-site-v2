import styled from "styled-components";
import Project from "./Project";
import {GitBranch, GitCommit, GitHub, GitMerge, GitPullRequest} from "react-feather";

function ProjectSection(props) {
    return <Wrapper>
        <Header>PROJECTS</Header>
        <Container>
            <Project
                project={"PERSONAL-SITE-V2"}
                desc={"This is my personal website that I built to showcase my personal projects & more, with github integration \n" +
                "to easily show project data."}
                tags={[
                    "NEXTJS", "REACT", "QUARK"
                ]}
                langs={[
                    {
                        color: "blue",
                        name: "TypeScript"
                    },
                    {
                        color: "orange",
                        name: "Kotlin"
                    }
                ]}
                gitstats={[
                    {
                        icon: <GitHub/>,
                        text: "personal-site-v2"
                    },
                    {
                        icon: <GitCommit/>,
                        text: "524 Commits"
                    },

                    {
                        icon: <GitMerge/>,
                        text: "15 Merges"
                    },
                    {
                        icon: <GitPullRequest/>,
                        text: "5 Pull Requests"
                    },
                    {
                        icon: <GitBranch/>,
                        text: "1 Branch"
                    }
                ]}
                social={[
                    {
                        href: "https://gihtub.com/ProSavage/personal-site-v2",
                        name: "GitHub"
                    },
                    {
                        href: "https://youtube.com",
                        name: "YouTube"
                    }
                ]}
            />
        </Container>
    </Wrapper>
}

export default ProjectSection;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Header = styled.p`
  font-weight: normal;
  font-size: 50px;
  line-height: 85px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  padding-top: 50px;
`