import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 329px;
  height: 50px;
  margin: 24px;
`

export const Hug = styled.div`
  background-color: var(--gray-100);
  height: 50px;
  width: 162px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  color: var(--gray-900);

  svg {
    height: 15px;
    width: 15px;
  }

  strong {
    margin-left: 1.5rem;
    letter-spacing: 3px;
  }
`

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--gray-300);
  height: 50px;
  width: 50px;
  border-radius: 50px;
`

export const CircleBackground = styled.div`
  position: absolute;
  left: -110px;
  top: -115px;
  width: 362px;
  height: 362px;
  border-radius: 50%;
  z-index: -1;
  opacity: 0.2;

  background-color: var(--blue-200);
`
