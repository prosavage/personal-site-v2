import styled from "styled-components";
import { GitBranch, GitCommit, GitHub, GitMerge, GitPullRequest } from "react-feather";
import { useEffect, useState } from "react";
import Axios from "axios";

interface ProjectProps {
  project: string,
  desc: string,
  tags: string[]
  langs: { color: string, name: string }[]
  social: { href: string, name: string }[]
  gitstats: { icon: React.ReactNode, text: string }[]
}

function Project() {

  useEffect(() => {
    Axios.get("/api/project")
  }, [])

  const []

  const [info, setInfo] = useState({
    project: "PERSONAL-SITE-V2",
    desc: "This is my personal website that I built to showcase my personal projects & more, with github integration \n" +
      "to easily show project data.",
    tags: [
      "NEXTJS", "REACT", "QUARK"
    ],
    langs: [
      {
        color: "blue",
        name: "TypeScript"
      },
      {
        color: "orange",
        name: "Kotlin"
      }
    ],
    gitstats: [
      {
        icon: <GitHub />,
        text: "personal-site-v2"
      },
      {
        icon: <GitCommit />,
        text: "524 Commits"
      },
      {
        icon: <GitMerge />,
        text: "15 Merges"
      },
      {
        icon: <GitPullRequest />,
        text: "5 Pull Requests"
      },
      {
        icon: <GitBranch />,
        text: "1 Branch"
      }
    ],
    social: [
      {
        href: "https://gihtub.com/ProSavage/personal-site-v2",
        name: "GitHub"
      },
      {
        href: "https://youtube.com",
        name: "YouTube"
      }
    ]
  })


  return <Container>
    <Header>{info.project}</Header>
    <PreviewStatsContainer>
      <Preview src="/img/projects/personal-site-v2/preview.png" alt="" />
      <StatsContainer>
        {info.gitstats.map(stat => <StatsEntry key={stat.text}>{stat.icon} <StatText>{stat.text}</StatText></StatsEntry>)}
      </StatsContainer>
    </PreviewStatsContainer>
    <TagContainer>
      {info.tags.map(tag => <TagButton key={tag}>{tag}</TagButton>)}
    </TagContainer>
    <LanguagesContainer>
      {info.langs.map(lang =>
        <LangWrapper key={lang.name}>
          <LangDot style={{ background: lang.color }} />
          <LangText>{lang.name}</LangText>
        </LangWrapper>
      )}
    </LanguagesContainer>
    <Divider>
      {info.desc}
    </Divider>
    <Divider>
      {info.social.map(entry =>
        <SocialButton key={entry.name}>
          <SocialText>{entry.name}</SocialText>
        </SocialButton>
      )}
    </Divider>
  </Container>
}

export default Project;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: 5px;
  padding: 10px 20px;
  
  border: 2px solid #eaeaea;
  border-radius: 5px;
  max-width: 900px;
`

const PreviewStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StatsEntry = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`

const StatText = styled.p`
  font-size: 15px;
  padding-left: 5px;
`


const LanguagesContainer = styled.div`
  display: flex;
  padding: 10px 0;
`

const LangText = styled.p`
  font-size: 15px;
  padding-left: 5px;
`

const LangWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

const LangDot = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
`

const Preview = styled.img`
  height: 360px;
  width: 640px;
  border: 2px solid black;
  border-radius: 5px;
`

const Header = styled.p`
  font-size: 25px;
`

const TagContainer = styled.div`
  display: flex;
  padding: 10px 0;
`

const Divider = styled.div`
  display: flex;
  
  padding: 5px 0;
`

const TagButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 5px;
  
  width: 75px;
  
  background: black;
  color: white;
  margin-right: 10px;
`

const SocialText = styled.p`
  padding: 0 5px;
  font-size: 15px;
`

const SocialButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 5px;
  
  width: 75px;
  
  border: 2px solid black;
  background: white;
  color: black;
  margin-right: 10px;
`