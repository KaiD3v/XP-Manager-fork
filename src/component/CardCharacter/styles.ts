import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 1.5rem 0.5rem;
  /* margin-top: 1.5rem; */

  & + & {
    border-top: 1px solid ${({ theme }) => theme['orange-200']};
  }

  > form {
    width: 21rem;

    margin-top: 1rem;

    display: grid;
    grid-template-columns: 8rem 1fr;
    align-items: center;
    gap: 0.5rem;

    button {
      height: 1.75rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      border: 1px solid ${({ theme }) => theme['orange-900']};
      border-radius: 4px;
      background: ${({ theme }) => theme['gray-100']};
    }
  }
`

export const InfosCharacter = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.875rem;
  }

  strong {
    span {
      font-family: 'Permanent Marker', cursive;
      font-size: 1.125rem;
      color: ${({ theme }) => theme['orange-600']};
      letter-spacing: 2px;
    }
  }
`
