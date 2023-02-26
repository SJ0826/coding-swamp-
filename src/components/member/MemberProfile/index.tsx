import DefaultButton from 'src/components/DefaultButton'
import theme from 'src/style/theme'
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react'
import { changeMemberInfo, postEditedMember } from 'src/lib/store/member/memberSlice'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { EditMemberParam } from 'src/lib/types/UserInterface'
import * as S from './styles'

const initialEditForm = {
  profileUrl: '',
  imageFile: null,
  username: '',
  imageUrl: '',
}
const MemberProfile = () => {
  const dispatch = useAppDispatch()
  const { memberInfo } = useAppSelector(({ member }) => member.value)
  const imgInputRef = useRef<HTMLInputElement>(null)
  const [userForm, setUserForm] = useState<EditMemberParam>(initialEditForm)
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const onClickUploadButton = () => {
    imgInputRef.current?.click()
  }

  const onChangeProfileImg = useCallback(
    async (e: ChangeEvent<HTMLElement>) => {
      const ImageFiles = (e.target as HTMLInputElement).files
      if (ImageFiles && ImageFiles[0]) {
        const url = URL.createObjectURL(ImageFiles[0])
        setUserForm({ ...userForm, imageFile: ImageFiles[0] })
        setUserForm({ ...userForm, imageUrl: url })
      }
    },
    [imgInputRef],
  )

  const onClickRemoveButton = useCallback(() => {
    setUserForm({ ...userForm, imageUrl: memberInfo.imageUrl })
  }, [imgInputRef])

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUserForm({ ...userForm, username: e.target.value })
  }

  const onSubmitUserForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await dispatch(postEditedMember(userForm))
    setIsOpenEdit(false)
    dispatch(changeMemberInfo({ key: 'username', value: userForm.username }))
    dispatch(changeMemberInfo({ key: 'imageUrl', value: userForm.imageUrl }))
    setUserForm(initialEditForm)
  }

  return isOpenEdit ? (
    <>
      <form encType="multipart/form-data" onSubmit={onSubmitUserForm}>
        <S.Profile>
          <S.Thumbnail>
            <S.MemberImage image={userForm.imageUrl || memberInfo.imageUrl} />
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
            <S.NameInput value={userForm.username} onChange={onChangeInputValue} />
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
          <S.MemberImage image={memberInfo.imageUrl} />
          <S.ImgUploadInput
            id="ImgUpload"
            type="file"
            accept="image/*"
            onChange={onChangeProfileImg}
            ref={imgInputRef}
          />
        </S.Thumbnail>
        <S.MemberInfo>
          <S.Name>{memberInfo.username}</S.Name>
          <S.Email>{memberInfo.email === 'null' ? '' : memberInfo.email}</S.Email>
          <S.EditButton type="button" onClick={() => setIsOpenEdit(true)}>
            회원정보 수정
          </S.EditButton>
        </S.MemberInfo>
      </S.Profile>
    </>
  )
}

export default MemberProfile
