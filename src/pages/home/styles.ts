import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;

    z-index: -1;

    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-image: url('/background.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
`

export const Content = styled.div`
  width: min(25rem, 90%);

  margin-top: -8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  p {
    font-size: 1.125rem;

    span:first-child {
      font-family: 'Permanent Marker', cursive;
      color: ${({ theme }) => theme['orange-600']};
      font-size: 1.5rem;
    }

    span:nth-child(2) {
      font-family: 'Fredoka One', cursive;
      color: ${({ theme }) => theme['blue-600']};
      font-size: 1.25rem;
    }
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 0.5rem 1.5rem;
    background: ${({ theme }) => theme['blue-600']};
    border: none;
    border-radius: 999px;

    font-weight: 500;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.white};
    line-height: 1.6;

    transition: 0.2s all;

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const Title = styled.div`
  span:first-child {
    font-family: 'Permanent Marker', cursive;
    font-size: 2.5rem;
    color: ${({ theme }) => theme['orange-600']};
  }

  span:last-child {
    font-family: 'Fredoka One', cursive;
    font-size: 2rem;
    letter-spacing: 2px;
    color: ${({ theme }) => theme['blue-600']};
  }
`