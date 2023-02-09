import Header from 'src/components/Header'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import DefaultButton from 'src/components/DefaultButton'
import theme from 'src/style/theme'
import { useEffect } from 'react'
import { getMemberInfo } from 'src/lib/store/memberSlice'
import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import * as S from './styles'

const MemberInfo = () => {
  const dispatch = useAppDispatch()
  const memberData = useAppSelector(({ memberInfo }) => memberInfo)
  useEffect(() => {
    dispatch(getMemberInfo())
  }, [])

  return (
    <>
      <Header />
      <S.MainWrapper>
        <S.Profile>
          <S.Thumbnail>
            <S.MemberImage />
            <DefaultButton
              height="2rem"
              color={theme.buttonText}
              bgColor={theme.button}
              text="이미지 업로드"
              hoverBGColor={theme.buttonLightColor}
              hoverColor={theme.buttonText}
            />
            <DefaultButton
              height="2rem"
              color={theme.button}
              bgColor="transparent"
              text="이미지 제거"
              hoverColor={theme.buttonText}
              hoverBGColor={theme.buttonLightColor}
            />
          </S.Thumbnail>
          <S.MemberInfo>
            <S.Name>{memberData.username}</S.Name>
            <S.Email>{memberData.email === 'null' ? '' : memberData.email}</S.Email>
          </S.MemberInfo>
        </S.Profile>
      </S.MainWrapper>
    </>
  )
}

export default MemberInfo
