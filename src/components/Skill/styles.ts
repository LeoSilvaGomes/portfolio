import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 150px;
  height: 150px;

  h2 {
    font-size: 40px;
  }
`;

const Grow = keyframes`
  from {
    height: 100px;

  }
  to {
    height: 100px;
  }
`;

export const Graph = styled.div`
  width: 20px;
  height: 100px;
  margin: 0px 0px 9px 10px;
  background-color: #fff;
  border-radius: 5px 5px 0px 0px;

  animation: ${Grow} 2s;
  transition: width 2s;
`;

export const Level = styled.p`
  margin-bottom: 9px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;
