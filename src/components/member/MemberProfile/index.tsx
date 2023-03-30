import DefaultButton from 'src/components/DefaultButton'
import theme from 'src/style/theme'
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import { changeMemberInfo } from 'src/lib/store/member/memberSlice'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { AiOutlineWarning } from 'react-icons/ai'
import { memberAPI } from 'src/lib/api/Member/MemberAPI'
import * as S from './styles'

const MemberProfile = () => {
  const dispatch = useAppDispatch()
  const { memberInfo } = useAppSelector(({ member }) => member.value)
  const imgInputRef = useRef<HTMLInputElement>(null)
  const initialEditForm = {
    profileUrl: '',
    imageFile: {},
    username: memberInfo.username,
    imageUrl: memberInfo.imageUrl,
  }
  const [memberForm, setMemberForm] = useState(initialEditForm)
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const onClickUploadButton = () => {
    imgInputRef.current?.click()
  }

  const onChangeProfileImg = (e: ChangeEvent<HTMLElement>) => {
    const ImageFiles = (e.target as HTMLInputElement).files
    if (ImageFiles && ImageFiles[0]) {
      const url = URL.createObjectURL(ImageFiles[0])
      setMemberForm({ ...memberForm, imageFile: ImageFiles[0], imageUrl: url })
    }
  }

  const onClickRemoveButton = useCallback(() => {
    setMemberForm({ ...memberForm, imageUrl: memberInfo.imageUrl })
  }, [imgInputRef])

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberForm({ ...memberForm, username: e.target.value })
  }

  const onSubmitUserForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = { username: memberForm.username, imageFile: memberForm.imageFile }
    await memberAPI.postMemberInfo(form)
    setIsOpenEdit(false)
    dispatch(changeMemberInfo({ key: 'username', value: memberForm.username }))
    dispatch(changeMemberInfo({ key: 'imageUrl', value: memberForm.imageUrl }))
    setMemberForm(initialEditForm)
  }

  const isGithubLoginUser = () => memberInfo.githubId !== null
  return isOpenEdit ? (
    <>
      <form encType="multipart/form-data" onSubmit={onSubmitUserForm}>
        <S.Profile>
          <S.Thumbnail>
            <S.MemberImage image={memberForm.imageUrl || memberInfo.imageUrl} />
            <S.ImgUploadInput
              id="ImgUpload"
              type="file"
              accept="image/*"
              onChange={onChangeProfileImg}
              ref={imgInputRef}
            />
            <DefaultButton
              height="2rem"
              color={theme.buttonText}
              bgColor={theme.button}
              text="이미지 업로드"
              hoverBGColor={theme.buttonLightColor}
              hoverColor={theme.buttonText}
              onClick={onClickUploadButton}
            />
            <DefaultButton
              height="2rem"
              color={theme.button}
              bgColor="transparent"
              text="이미지 제거"
              hoverColor={theme.buttonText}
              hoverBGColor={theme.buttonLightColor}
              onClick={onClickRemoveButton}
            />
          </S.Thumbnail>
          <S.MemberInfo>
            <S.NameInput value={memberForm.username} onChange={onChangeInputValue} />
            <S.Email>{memberInfo.email === 'null' ? '' : memberInfo.email}</S.Email>
            <S.ButtonWrapper>
              <S.SaveButton>저장</S.SaveButton>
              <S.CancelButton type="button" onClick={() => setIsOpenEdit(false)}>
                취소
              </S.CancelButton>
            </S.ButtonWrapper>
          </S.MemberInfo>
        </S.Profile>
      </form>
    </>
  ) : (
    <>
      <S.Profile>
        <S.Thumbnail>
          <S.MemberImage image={memberForm.imageUrl} />
        </S.Thumbnail>
        <S.MemberInfo>
          <S.Name>{memberInfo.username}</S.Name>
          <S.Email>{memberInfo.email === 'null' ? '' : memberInfo.email}</S.Email>
          <S.EditButton type="button" onClick={() => setIsOpenEdit(true)} disabled={isGithubLoginUser()}>
            {isGithubLoginUser() ? (
              <>
                <AiOutlineWarning style={{ marginRight: '1rem' }} />
                <h5 style={{ textAlign: 'left' }}>
                  깃허브 로그인 사용자는 회원정보 수정이 불가합니다.
                  <br />
                  <a style={{ textDecoration: 'none' }} href={memberInfo.profileUrl}>
                    깃허브 페이지
                  </a>
                  에서 회원정보를 수정해주세요.
                </h5>
              </>
            ) : (
              <h5>회원정보 수정</h5>
            )}
          </S.EditButton>
        </S.MemberInfo>
      </S.Profile>
    </>
  )
}

export default MemberProfile
