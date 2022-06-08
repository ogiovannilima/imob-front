import React from 'react'
// import { PATHS } from '../../Constants/paths'
import * as S from './styles'

import { AiOutlineMenu, AiFillHome } from 'react-icons/ai'

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.CircleBackground />
      <S.Hug>
        <AiFillHome />
        <strong>ITER</strong>
      </S.Hug>
      <S.MenuButton>
        <AiOutlineMenu />
      </S.MenuButton>
    </S.Container>
  )
}
