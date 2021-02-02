import styled from "styled-components";
import Project from "./Project";
import { GitBranch, GitCommit, GitHub, GitMerge, GitPullRequest } from "react-feather";
import Carousel from "./Carousel";

function ProjectSection(props) {

   
    return <Wrapper>
        <Header>PROJECTS</Header>
        <Container>
            <Project
                key={"store"}
                user="SavageLabs"
                project="store"
                social={[]}
            />
            <Project
                key={"personal-site-v2"}
                user="ProSavage"
                project="personal-site-v2"
                social={[]}
            />
            <Project
                key={"next-js-template"}
                user={"ProSavage"}
                project={"next-js-template"}
                social={[]}
            />
            <Project
                key={"coming-soon"}
                user="notesets"
                project="coming-soon"
                social={[]}
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