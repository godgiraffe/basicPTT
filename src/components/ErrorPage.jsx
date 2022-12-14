import styled from "styled-components/macro";

const ErrorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 6em;
  color: #fff;
`;

const ErrorPage = (props) => {
  const { msg } = props;
  return <ErrorPageContainer>發生錯誤 { msg ? ` - ${msg}` : ""}</ErrorPageContainer>;
};

export default ErrorPage;
