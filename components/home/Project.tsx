import styled from "styled-components";
import {
  GitBranch,
  GitCommit,
  GitHub,
  XCircle,
} from "react-feather";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";

interface ProjectProps {
  project: string;
  user: string;
  social: { href: string; name: string }[];
}

function Project(props: ProjectProps) {

  useEffect(() => {
    Axios.post("/api/project", {
      name: props.project,
      user: props.user,
    }).then((res) => {
      const data = res.data;
      console.log(data)
      setData({
        project: data.project,
        desc: data.desc,
        tags: data.topics,
        langs: data.lang,
        homepage: data.homepage,
        gitstats: [
          {
            icon: <GitHub />,
            text: data.project,
          },
          // {
          //   icon: <GitCommit />,
          //   text: `${data.commits} Commits`,
          // },
          {
            icon: <GitBranch />,
            text: `${data.forks} Forks`,
          },
          {
            icon: <XCircle />,
            text: `${data.issues} Issues`,
          },
        ],
        social: props.social,
      });
    });
  }, []);

  const [data, setData] = useState(null);
  const router = useRouter();

  if (data === null) return <></>;

  return (
    <Container>
      <Header>{data.project}</Header>
      <PreviewStatsContainer>
        <Preview
          onClick={() => router.push(data.homepage)}
          src={`/img/projects/${props.project}/preview.png`}
          alt="project preview"
        />
        <StatsContainer>
          {data.gitstats.map((stat) => (
            <StatsEntry key={stat.text}>
              {stat.icon} <StatText>{stat.text}</StatText>
            </StatsEntry>
          ))}
        </StatsContainer>
      </PreviewStatsContainer>
      <TagContainer>
        {data.tags.map((tag) => (
          <TagButton key={tag}>{tag}</TagButton>
        ))}
      </TagContainer>
      <LanguagesContainer>
        {data.langs.map((lang) => (
          <LangWrapper key={lang.name}>
            <LangDot style={{ background: lang.color }} />
            <LangText>{lang.name}</LangText>
          </LangWrapper>
        ))}
      </LanguagesContainer>
      <Divider>{data.desc}</Divider>
      <Divider>
        {data.social.map((entry) => (
          <SocialButton
            key={entry.name}
            onClick={() => router.push(entry.href)}
          >
            <SocialText>{entry.name}</SocialText>
          </SocialButton>
        ))}
      </Divider>
    </Container>
  );
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

  @media (max-width: 1000px) {
    flex-direction: column;
    max-width: 450px;
  }
`;

const PreviewStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;

const StatsEntry = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 5px 10px;
  }
`;

const StatText = styled.p`
  font-size: 15px;
  padding-left: 5px;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const LanguagesContainer = styled.div`
  display: flex;
  padding: 10px 0;
  flex-wrap: wrap;
`;

const LangText = styled.p`
  font-size: 15px;
  padding-left: 5px;
`;

const LangWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const LangDot = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
`;

const Preview = styled.img`
  height: 360px;
  width: 640px;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 1000px) {
    height: 180px;
    width: 320px;
  }
`;

const Header = styled.p`
  font-size: 25px;
  text-transform: uppercase;
`;

const TagContainer = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Divider = styled.div`
  display: flex;

  padding: 5px 0;
`;

const TagButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  padding: 5px;

  background: black;
  color: white;
  margin-right: 5px;
  text-transform: uppercase;
`;

const SocialText = styled.p`
  padding: 0 5px;
  font-size: 15px;
`;

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
`;
