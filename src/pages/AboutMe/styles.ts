import styled, { keyframes } from "styled-components";

interface handleArrow {
  visible: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: auto;

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
  align-items: center;
  scroll-snap-align: start;

  height: 100%;
  width: 50%;
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;

  div {
    margin-bottom: 80px;
  }

  h2 {
    font-size: 75px;
  }

  p {
    font-size: 65px;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-size: 24;

  height: 120px;
  width: 10vh;

  cursor: pointer;
`;

export const ArrowLeft = styled.div<handleArrow>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  transition: 1s;
  opacity: ${(props) => (props.visible ? "0%" : "100%")};

  font-size: 24;

  height: 40px;
  width: 10vh;

  cursor: pointer;
`;

export const ArrowRight = styled.div<handleArrow>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  transition: 1s;
  opacity: ${(props) => (props.visible ? "100%" : "0%")};

  font-size: 24;

  height: 40px;
  width: 10vh;

  cursor: pointer;
`;

export const Animation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 100%;
  width: 100%;
`;

const Blob = keyframes`
  0% {
    border-radius: 80% 85% 100% 70% / 100% 100% 100% 95%;
  }
  20% {
    border-radius: 90% 85% 100% 70% / 75% 100% 80% 95%;
  }
  40% {
    border-radius: 75% 100% 80% 100% / 100% 70% 100% 70%;
  }
  60% {
    border-radius: 70% 100% 80% 90% / 80% 100% 70% 85%;
  }
  80% {
    border-radius: 100% 100% 100% 70% / 100% 100% 100% 70%;
  }
  100% {
    border-radius: 80% 85% 100% 70% / 100% 100% 100% 95%;
  }
`;

export const CircleOne = styled.div`
  background-color: rgba(255, 216, 0);

  z-index: 20;

  position: absolute;

  margin-right: 100px;
  margin-bottom: 50px;

  opacity: 80%;

  height: 430px;
  width: 430px;

  animation: ${Blob} 6s infinite;
`;

export const CircleTwo = styled.div`
  background-image: linear-gradient(
    -45deg,
    rgba(255, 200, 0) 0%,
    rgba(255, 200, 0) 40%,
    rgba(255, 190, 0) 60%,
    rgba(255, 190, 0) 100%
  );

  z-index: 10;

  margin-top: 50px;
  margin-left: 30px;

  position: absolute;

  height: 480px;
  width: 500px;

  animation: ${Blob} 8s infinite;
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10vh;
  width: 100px;

  cursor: pointer;
`;
