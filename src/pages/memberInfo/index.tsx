import Header from 'src/components/Header/Header'

import DefaultButton from 'src/components/DefaultButton'
import theme from 'src/style/theme'
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef } from 'react'
import { changeMemberInfo, getMemberInfo } from 'src/lib/store/member/memberSlice'

import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { changeEditForm, postEditedMember, toggleEditMode } from 'src/lib/store/member/editModeSlice'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import * as S from './styles'

export interface type {
  imageFile: null | File
  username: string
  profileUrl: string | null
}
const MemberInfo = () => {
  const dispatch = useAppDispatch()
  const memberData = useAppSelector(({ memberInfo }) => memberInfo)
  const editModeData = useAppSelector(({ editMode }) => editMode.value)

  const imgInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    dispatch(getMemberInfo())
    refreshTokenAPI.getRefreshToken()
  }, [])

  const onClickUploadButton = () => {
    imgInputRef.current?.click()
  }

  const onChangeProfileImg = useCallback(
    async (e: ChangeEvent<HTMLElement>) => {
      const ImageFiles = (e.target as HTMLInputElement).files
      if (ImageFiles && ImageFiles[0]) {
        const url = URL.createObjectURL(ImageFiles[0])
        dispatch(changeEditForm({ key: 'imageFile', value: ImageFiles[0] }))
        dispatch(changeEditForm({ key: 'imageUrl', value: url }))
      }
    },
    [imgInputRef],
  )

  const onClickRemoveButton = useCallback(() => {
    dispatch(changeEditForm({ key: 'imageUrl', value: memberData.imageUrl }))
  }, [imgInputRef])

  const onClickCancelButton = () => {
    dispatch(toggleEditMode(false))
  }

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEditForm({ key: 'username', value: e.target.value }))
  }

  const onSubmitUserForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const editForm = {
      username: editModeData[0].value as string,
      profileUrl: editModeData[1].value as string | null,
      imageFile: editModeData[2].value as File | null,
    }
    dispatch(postEditedMember(editForm))
    dispatch(toggleEditMode(false))
    dispatch(changeMemberInfo({ key: 'username', value: editForm.username }))
    dispatch(changeMemberInfo({ key: 'imageUrl', value: editModeData[4].value }))
    dispatch(changeEditForm({ key: 'username', value: '' }))
    dispatch(changeEditForm({ key: 'imageFile', value: null }))
    dispatch(changeEditForm({ key: 'imageUrl', value: null }))
  }

  const onClickEditButton = () => {
    dispatch(toggleEditMode(true))
  }

  return editModeData[4].value ? (
    <>
      <Header />
      <S.MainWrapper>
        <form encType="multipart/form-data" onSubmit={onSubmitUserForm}>
          <S.Profile>
            <S.Thumbnail>
              <S.MemberImage image={(editModeData[3].value as string) || memberData.imageUrl} />
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
              <S.NameInput value={editModeData[0].value as string} onChange={onChangeInputValue} />
              <S.Email>{memberData.email === 'null' ? '' : memberData.email}</S.Email>
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
      <Header />
      <S.MainWrapper>
        <S.Profile>
          <S.Thumbnail>
            <S.MemberImage image={memberData.imageUrl} />
            <S.ImgUploadInput
              id="ImgUpload"
              type="file"
              accept="image/*"
              onChange={onChangeProfileImg}
              ref={imgInputRef}
            />
          </S.Thumbnail>
          <S.MemberInfo>
            <S.Name>{memberData.username}</S.Name>
            <S.Email>{memberData.email === 'null' ? '' : memberData.email}</S.Email>
            <S.EditButton type="button" onClick={onClickEditButton}>
              회원정보 수정
            </S.EditButton>
          </S.MemberInfo>
        </S.Profile>
      </S.MainWrapper>
    </>
  )
}

export default MemberInfo
