import {
  Wrapper,
  Title,
  WrapperConsumer,
  SmallTitles,
  ConsumerName,
  InputBlock,
  ConsumerInputBox,
  StandardInput,
  ContentBox,
  ContentInput,
  Mybutton,
  SmallInputBox,
  RegisterButton,
  PhotoWrapper,
  Part,
  AddressBox,
  YoutubeBox
} from "../../../styles/boardsNew"

export default function BoardsNewPage(){

  return(
    <Wrapper>
      <Title>게시물 등록</Title>
      <WrapperConsumer>
        <InputBlock>
          <ConsumerName>작성자</ConsumerName>
          <ConsumerInputBox type="text" placeholder="이름을 적어주세요."/>
        </InputBlock>
        <InputBlock>
          <SmallTitles>비밀번호</SmallTitles>
          <ConsumerInputBox type="text" placeholder="비밀번호를 적어주세요."/>
        </InputBlock>
      </WrapperConsumer>
      <InputBlock>
        <SmallTitles>제목</SmallTitles>
        <StandardInput type="text" placeholder='제목을 작성해주세요.'/>
      </InputBlock>
      <ContentBox>
        <SmallTitles>내용</SmallTitles>
        <ContentInput type="text" placeholder='내용을 작성해주세요.'/>
      </ContentBox>
      <AddressBox>
        <SmallTitles>주소</SmallTitles>
        <div>
          <SmallInputBox type="text" placeholder='07250'/>
          <Mybutton>우편번호 검색</Mybutton>
        </div>
        <StandardInput type="text" />
        <StandardInput type="text" />
      </AddressBox>
      <YoutubeBox>
        <SmallTitles>유튜브</SmallTitles>
        <StandardInput type="text" placeholder='링크를 복사해주세요.'/>
      </YoutubeBox>
      <Part>
        <SmallTitles>사진 첨부</SmallTitles>
        <PhotoWrapper>
          <img src="/image1.png" />
          <img src="/image1.png" />
          <img src="/image1.png" />
        </PhotoWrapper>
      </Part>
      <Part>
        <SmallTitles>메인 설정</SmallTitles>
        <input type="radio"/>유튜브
        <input type="radio"/>사진
      </Part>
      <RegisterButton>등록하기</RegisterButton>
    </Wrapper>
  )
}