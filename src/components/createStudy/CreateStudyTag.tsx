import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import { changeStudyForm } from 'src/lib/store/studyFormSlice'
import styled from 'styled-components'

const CreateStudyTag = () => {
  const tagData = useAppSelector<string[]>(({ studyForm }) => studyForm.value.tags)
  const dispatch = useAppDispatch()
  const [tagValue, setTagValue] = useState('')

  const onChangeTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value)
  }

  const onClickTagButton = () => {
    const newTagData = [...tagData, tagValue]
    dispatch(changeStudyForm({ key: 'tags', value: newTagData }))
    setTagValue('')
  }

  const onClickRemoveTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTag = e.currentTarget
    const newTagData = tagData.filter((tag) => tag !== currentTag.id)
    dispatch(changeStudyForm({ key: 'tags', value: newTagData }))
  }

  return (
    <Container>
      <Wrapper>
        <SubTitle>스터디 태그</SubTitle>
        <input type="text" style={{ display: 'none' }} />
        <TagInput type="text" value={tagValue} onChange={onChangeTagInput} />
        <button type="button" onClick={onClickTagButton}>
          태그 등록
        </button>
      </Wrapper>
      <TagWrapper>
        {tagData.map((tag, index) => (
          <>
            <Tag id={tag} key={tag}>
              {tag}{' '}
              <RemoveTag id={tag} key={tag} onClick={onClickRemoveTag}>
                x
              </RemoveTag>
            </Tag>
          </>
        ))}
      </TagWrapper>
    </Container>
  )
}

export default CreateStudyTag

const Container = styled.div`
  margin-top: 2rem;

  color: ${(props) => props.theme.text1};
`
const Wrapper = styled.div``

const SubTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`

const TagInput = styled.input`
  width: 18rem;
  margin-left: 1rem;
  padding-left: 1rem;
  font-size: 24px;

  background-color: ${(props) => props.theme.bgGroundColor3};
  border: 1px solid ${(props) => props.theme.border4};
  border-radius: 15px;
`
const TagWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
`
const Tag = styled.div`
  height: 2rem;
  margin-right: 1rem;
  padding: 0 1rem 0 1rem;

  font-size: 20px;
  font-weight: bold;
  text-align: center;

  border-radius: 20px;
  background: ${(props) => props.theme.green6};
`

const RemoveTag = styled.button`
  display: inline;
  width: 1rem;
  height: 1rem;
  font-size: 1.5rem;
  background: none;
  &:hover {
    cursor: pointer;
  }
`
