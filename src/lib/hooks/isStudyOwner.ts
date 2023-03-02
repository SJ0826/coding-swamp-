import { useAppSelector } from '.'

const isStudyOwner = () => {
  const { username } = useAppSelector(({ member }) => member.value.memberInfo)
  const { owner } = useAppSelector(({ studyItem }) => studyItem.studyInfo)

  return username === owner.username
}

export default isStudyOwner
