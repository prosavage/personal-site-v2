import styled from "styled-components";
import Project from "./Project";
import { GitBranch, GitCommit, GitHub, GitMerge, GitPullRequest } from "react-feather";

function ProjectSection(props) {
    return <Wrapper>
        <Header>PROJECTS</Header>
        <Container>
            <Project
                user="SavageLabs"
                project="store"
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
            <Project
                user="ProSavage"
                project="personal-site-v2"
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
            <Project
                user="ProSavage"
                project="ur-a-cutie"
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
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
`