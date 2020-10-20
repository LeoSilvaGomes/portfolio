import styled from "styled-components";

interface Content {
  visible: boolean;
}
interface Skill {
  withoutJustify?: boolean;
}

export const Container = styled.div`
  color: #fff;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  background-color: rgba(255, 170, 0);

  width: 100%;
  height: 100vh;
`;

export const Skills = styled.div<Content>`
  padding-top: ${(props) => (props.visible ? "30px" : "30px")};
  background-color: rgba(255, 190, 0);
  transition: 1s;

  width: ${(props) => (props.visible ? "90vw" : "5vw")};
  height: 100%;

  cursor: ${(props) => (props.visible ? "normal" : "pointer")};

  h1 {
    transition-delay: 0.5s;
    transition: 1.25s;
    padding-left: 30px;
    transform: ${(props) => (props.visible ? "rotate(0deg)" : "rotate(90deg)")};
  }

  span {
    margin: 20px 50px;
  }
`;

export const BoxSkills = styled.div<Skill>`
  display: flex;
  width: 80vw;
  justify-content: ${(props) =>
    props.withoutJustify ? "none" : "space-between"};
  margin: 0 5vw 2vw 5vw;
`;

export const Experiences = styled.div<Content>`
  padding-top: ${(props) => (props.visible ? "30px" : "30px")};
  background-color: rgba(255, 170, 0);
  transition: 1s;

  width: ${(props) => (props.visible ? "90vw" : "5vw")};
  height: 100%;

  cursor: ${(props) => (props.visible ? "normal" : "pointer")};

  h1 {
    transition-delay: 0.5s;
    transition: 1.25s;
    padding-left: 30px;
    transform: ${(props) => (props.visible ? "rotate(0deg)" : "rotate(90deg)")};
  }
`;

export const Projects = styled.div<Content>`
  padding-top: ${(props) => (props.visible ? "30px" : "30px")};
  background-color: rgba(255, 150, 0);
  transition: 1s;

  width: ${(props) => (props.visible ? "90vw" : "5vw")};
  height: 100%;

  cursor: ${(props) => (props.visible ? "normal" : "pointer")};

  h1 {
    transition-delay: 0.5s;
    transition: 1.25s;
    padding-left: 30px;
    transform: ${(props) => (props.visible ? "rotate(0deg)" : "rotate(90deg)")};
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  height: 10vh;
  width: 100px;

  cursor: pointer;
`;
