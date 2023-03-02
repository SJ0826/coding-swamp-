import { useAppSelector } from '.'

const isStudyOwner = () => {
  const { username } = useAppSelector(({ member }) => member.value.memberInfo)
  const { participants } = useAppSelector(({ studyItem }) => studyItem.studyInfo)

  const userNameList = participants.map((participant) => participant.username)
  return userNameList.includes(username)
}

export default isStudyOwner
