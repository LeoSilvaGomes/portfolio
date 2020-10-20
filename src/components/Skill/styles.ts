import styled, { keyframes } from "styled-components";

interface graphHeight {
  level: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin: 0 20px;

  height: 150px;

  h2 {
    font-size: 2vw;
  }
`;

const GrowBasic = keyframes`
  from {
    height: 1vw;
  }
  to {
    height: 2vw;
  }
`;

const GrowAdvanced = keyframes`
  from {
    height: 1vw;
  }
  to {
    height: 6vw;
  }
`;

const GrowIntermediate = keyframes`
  from {
    height: 1vw;
  }
  to {
    height: 4vw;
  }
`;

export const Graph = styled.div<graphHeight>`
  width: 1.4vw;

  height: ${(props) =>
    props.level === "Basic"
      ? "2vw"
      : props.level === "Advanced"
      ? "6vw"
      : "4vw"};

  margin: 0px 0px 9px 8px;
  background-color: #fff;
  border-radius: 5px 5px 0px 0px;

  animation: ${(props) =>
      props.level === "Basic"
        ? GrowBasic
        : props.level === "Advanced"
        ? GrowAdvanced
        : GrowIntermediate}
    2s;

  transition: width 2s;
`;

export const Level = styled.p`
  font-size: 1vw;
  margin-bottom: 9px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;
