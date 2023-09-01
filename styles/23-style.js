import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

export const Wrapper = styled.div`
  width: 640px;
  height: 900px;
  background-color: white;
`;

export const HeaderWrapper = styled.div`
  height: 23%;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 40px;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const HeaderProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProfileTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

export const ProfileName = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left: 10px;
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Menu = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-right: 50px;
  color: #cacaca;
  cursor: pointer;
  :hover {
    color: #ff1b6d;
    text-decoration: underline;
  }
`;

export const ContentWrapper = styled.div`
  height: 68%;
  border-bottom: 1px solid gray;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const ContentTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentTitle1 = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #adadad;
`;

export const ContentTitle2 = styled.div`
  font-size: 24px;
  font-weight: 400;
`;

export const MenuBar = styled.div`
  height: 9%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const MenuText = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #adadad;
  cursor: pointer;
  :hover {
    color: #ff1b6d;
    text-decoration: underline;
  }
`;
