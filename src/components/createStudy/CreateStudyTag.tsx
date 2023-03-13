import { ChangeEvent, useState } from 'react'
import { changeStudyForm } from 'src/lib/store/studyFormSlice'
import { AiOutlineDelete } from 'react-icons/ai'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'

const CreateStudyTag = () => {
  const tagData = useAppSelector<string[]>(({ studyForm }) => studyForm.value.tags)
  const dispatch = useAppDispatch()
  const [tagValue, setTagValue] = useState('')

  const onChangeTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value)
  }

  const onClickTagButton = () => {
    const newTagData = [...new Set([...tagData, tagValue])]
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
      <>
        <SubTitle>스터디 태그</SubTitle>
        <InputWrapper>
          <TagInput type="text" value={tagValue} onChange={onChangeTagInput} />
          <SubmitTagButton type="button" onClick={onClickTagButton}>
            등록
          </SubmitTagButton>
        </InputWrapper>
      </>
      <TagWrapper>
        {tagData.map((tag) => (
          <Tag key={tag}>
            <TagText id={tag}>#{tag}</TagText>
            <RemoveButton id={tag} type="button" onClick={onClickRemoveTag}>
              <AiOutlineDelete />
            </RemoveButton>
          </Tag>
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

const SubTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`
const InputWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`

const TagInput = styled.input`
  width: 18rem;
  padding-left: 1rem;
  margin-right: 1rem;
  font-size: 24px;

  background-color: ${(props) => props.theme.bgGroundColor3};
  border: 1px solid ${(props) => props.theme.border4};
  border-radius: 15px;
`

const SubmitTagButton = styled.button`
  width: 3.5rem;
  border-radius: 20px;

  font-weight: 600;
  line-height: 1rem;

  background: ${(props) => props.theme.green6};
`

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`
const Tag = styled.div`
  display: flex;
  align-items: center;
`
const TagText = styled.div`
  height: 2rem;
  margin-right: 0.5rem;
  padding: 0.1rem 1rem 0 1rem;

  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.text2};

  border-radius: 20px;
  background: ${(props) => props.theme.bgGroundColor4};
`

const RemoveButton = styled.button`
  display: inline;
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.4rem;
  margin-right: 2rem;

  font-size: 1.3rem;
  background: none;

  &:hover {
    color: ${(props) => props.theme.warning};
  }
`
