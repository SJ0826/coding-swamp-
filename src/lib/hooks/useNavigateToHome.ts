import { useNavigate } from 'react-router-dom'

const useNavigateToHome = () => {
  const navigate = useNavigate()
  return navigate('/')
}

export default useNavigateToHome
