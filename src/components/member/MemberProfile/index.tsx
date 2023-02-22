import DefaultButton from 'src/components/DefaultButton'
import theme from 'src/style/theme'
import { ChangeEvent, FormEvent, useCallback, useRef } from 'react'
import { changeMemberInfo } from 'src/lib/store/member/memberSlice'
import { changeEditForm, postEditedMember, toggleEditMode } from 'src/lib/store/member/editModeSlice'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'

import * as S from './styles'

const MemberProfile = () => {
  const dispatch = useAppDispatch()
  const { memberInfo } = useAppSelector(({ member }) => member.value)
  const { editForm, isEditMode } = useAppSelector(({ editMode }) => editMode.value)
  const imgInputRef = useRef<HTMLInputElement>(null)
  const onClickUploadButton = () => {
    imgInputRef.current?.click()
  }

  const onChangeProfileImg = useCallback(
    async (e: ChangeEvent<HTMLElement>) => {
      const ImageFiles = (e.target as HTMLInputElement).files
      if (ImageFiles && ImageFiles[0]) {
        const url = URL.createObjectURL(ImageFiles[0])
        dispatch(changeEditForm({ key: 'imageFile', value: ImageFiles[0] }))
        dispatch(changeEditForm({ key: 'profileUrl', value: url }))
      }
    },
    [imgInputRef],
  )

  const onClickRemoveButton = useCallback(() => {
    dispatch(changeEditForm({ key: 'profileUrl', value: memberInfo.imageUrl }))
  }, [imgInputRef])

  const onClickCancelButton = () => {
    dispatch(toggleEditMode(false))
  }

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEditForm({ key: 'username', value: e.target.value }))
  }

  const onSubmitUserForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(postEditedMember(editForm))
    dispatch(toggleEditMode(false))
    dispatch(changeMemberInfo({ key: 'username', value: editForm.username }))
    dispatch(changeMemberInfo({ key: 'profileUrl', value: editForm.profileUrl }))
  }

  const onClickEditButton = () => {
    dispatch(toggleEditMode(true))
  }

  return isEditMode ? (
    <>
      <S.MainWrapper>
        <form encType="multipart/form-data" onSubmit={onSubmitUserForm}>
          <S.Profile>
            <S.Thumbnail>
              <S.MemberImage image={editForm.profileUrl || memberInfo.imageUrl} />
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
              <S.NameInput value={editForm.username} onChange={onChangeInputValue} />
              <S.Email>{memberInfo.email === 'null' ? '' : memberInfo.email}</S.Email>
              <S.ButtonWrapper>
                <S.SaveButton onClick={onClickEditButton}>저장</S.SaveButton>
                <S.CancelButton type="button" onClick={onClickCancelButton}>
                  취소
                </S.CancelButton>
              </S.ButtonWrapper>
            </S.MemberInfo>
          </S.Profile>
        </form>
      </S.MainWrapper>
    </>
  ) : (
    <>
      <S.MainWrapper>
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
            <S.EditButton type="button" onClick={onClickEditButton}>
              회원정보 수정
            </S.EditButton>
          </S.MemberInfo>
        </S.Profile>
      </S.MainWrapper>
    </>
  )
}

export default MemberProfile
