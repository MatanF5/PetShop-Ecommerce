import styled from "styled-components";

const Container = styled.div`
height: 30px;
background-color: gray;
color: white;
justify-content: center;
align-items: center;
display: flex;
font-weight: bold;
font-size:16px;
`


const Announcement = () => {
  return (
<Container>
    Cheap Prices On Everything!
</Container>
  )
}

export default Announcement