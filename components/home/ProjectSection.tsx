import styled from "styled-components";
import Project from "./Project";
import {GitBranch, GitCommit, GitHub, GitMerge, GitPullRequest} from "react-feather";

function ProjectSection(props) {
    return <Wrapper>
        <Header>PROJECTS</Header>
        <Container>
            <Project/>
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