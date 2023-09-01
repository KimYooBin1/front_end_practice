import * as UI from "../../../styles/23-style";

export default function MainPage() {
  return (
    <UI.Body>
      <UI.Wrapper>
        <UI.HeaderWrapper>
          <UI.HeaderSearch>
            <img src="/img/search.png"></img>
          </UI.HeaderSearch>
          <UI.HeaderProfile>
            <UI.ProfileTitle>마이</UI.ProfileTitle>
            <UI.ProfileBox>
              <img src="/img/profile.png"></img>
              <UI.ProfileName>
                임정아
                <span> {">"} </span>
              </UI.ProfileName>
            </UI.ProfileBox>
          </UI.HeaderProfile>
          <UI.HeaderMenu>
            <UI.Menu>공지사항</UI.Menu>
            <UI.Menu>이벤트</UI.Menu>
            <UI.Menu>FAQ</UI.Menu>
            <UI.Menu>Q&A</UI.Menu>
          </UI.HeaderMenu>
        </UI.HeaderWrapper>
        <UI.ContentWrapper>
          <UI.Content>
            <UI.ContentTitleBox>
              <UI.ContentTitle1>Q.01</UI.ContentTitle1>
              <UI.ContentTitle2>리뷰 작성은 어떻게 하나요?</UI.ContentTitle2>
            </UI.ContentTitleBox>
            <img src="/img/Group.png"></img>
          </UI.Content>
          <UI.Content>
            <UI.ContentTitleBox>
              <UI.ContentTitle1>Q.01</UI.ContentTitle1>
              <UI.ContentTitle2>리뷰 작성은 어떻게 하나요?</UI.ContentTitle2>
            </UI.ContentTitleBox>
            <img src="/img/Group.png"></img>
          </UI.Content>
          <UI.Content>
            <UI.ContentTitleBox>
              <UI.ContentTitle1>Q.01</UI.ContentTitle1>
              <UI.ContentTitle2>리뷰 작성은 어떻게 하나요?</UI.ContentTitle2>
            </UI.ContentTitleBox>
            <img src="/img/Group.png"></img>
          </UI.Content>
          <UI.Content>
            <UI.ContentTitleBox>
              <UI.ContentTitle1>Q.01</UI.ContentTitle1>
              <UI.ContentTitle2>리뷰 작성은 어떻게 하나요?</UI.ContentTitle2>
            </UI.ContentTitleBox>
            <img src="/img/Group.png"></img>
          </UI.Content>
          <UI.Content>
            <UI.ContentTitleBox>
              <UI.ContentTitle1>Q.01</UI.ContentTitle1>
              <UI.ContentTitle2>리뷰 작성은 어떻게 하나요?</UI.ContentTitle2>
            </UI.ContentTitleBox>
            <img src="/img/Group.png"></img>
          </UI.Content>
        </UI.ContentWrapper>
        <UI.MenuBar>
          <UI.MenuText>홈</UI.MenuText>
          <UI.MenuText>잇츠로드</UI.MenuText>
          <UI.MenuText>마이찜</UI.MenuText>
          <UI.MenuText>마이</UI.MenuText>
        </UI.MenuBar>
      </UI.Wrapper>
    </UI.Body>
  );
}
