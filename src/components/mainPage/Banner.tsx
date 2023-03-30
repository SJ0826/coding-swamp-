import styled from 'styled-components'
import bannerImage from '../../lib/assets/image/BannerImage.png'

const Banner = () => (
  <Container>
    <div>
      <Label>Welcome</Label>
      <h2>모여봐요</h2>
      <h2>코딩의 늪 🐊</h2>
      <br />
      <br />
      <h5>다양한 사람들과 함께 스터디를 만들어보세요!</h5>
    </div>
    <BannerImage src={bannerImage} />
  </Container>
)

export default Banner

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 15.25rem;
  padding: 1.875rem 1.25rem 2.5rem 2.5rem;
  color: white;

  border-radius: 15px;
  background-color: ${(props) => props.theme.green2};

  @media ${(props) => props.theme.small} {
    h2 {
      font-size: 18px;
    }
    height: 10rem;
    padding: 1rem;
  }
`

const Label = styled.h6`
  width: 4rem;
  margin-bottom: 1rem;
  max-width: 20ch;
  padding: 0.5rem;

  border-radius: 0.25rem;
  background-color: rgba(74, 74, 74, 0.4);
  line-height: 100%;
  z-index: 5;

  @media ${(props) => props.theme.small} {
    padding: 0.2rem;
    margin-bottom: 0.2rem;
  }
`

const BannerImage = styled.img`
  width: 16rem;
  height: 12rem;
  margin-top: 1rem;
  margin-right: 5rem;

  background-size: cover;
  object-fit: cover;

  @media ${(props) => props.theme.medium} {
    width: 14rem;
    height: 10rem;
  }

  @media ${(props) => props.theme.small} {
    display: none;
  }
`
