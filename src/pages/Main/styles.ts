import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  height: 100%;
  width: 100%;
`;

export const Box = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;

  height: 100%;
  width: 100%;
`;
