import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const StyledArticleItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #aaa;
  background-color: #111;
  font-size: 20px;
  padding: 4px 8px;
  .titleContent {
    width: 800px;
    @media ${(props) => props.theme.devices.tablet.mediaQuery} {
      max-width: 960px;
      width: 100vw;
      word-break: break-all;
    }
    @media ${(props) => props.theme.devices.mobile.mediaQuery} {
      max-width: 485px;
      width: 100vw;
      word-break: break-all;
    }
    .articleTitle {
      color: #aaa;
      @media ${(props) => props.theme.devices.tablet.mediaQuery} {
        color: #fff;
      }
      @media ${(props) => props.theme.devices.mobile.mediaQuery} {
        color: #fff;
      }
      &:hover {
        color: #333;
        background-color: #ccc;
        @media ${(props) => props.theme.devices.tablet.mediaQuery} {
          color: #aaa;
          background-color: #111;
        }
        @media ${(props) => props.theme.devices.mobile.mediaQuery} {
          color: #aaa;
          background-color: #111;
        }
      }
    }
  }
  .articleDetailContent {
    display: flex;
    flex-direction: row;
    .author {
    }
    .createDate {
      margin-left: auto;
    }
  }
`;

const ArticleItem = (props) => {
  const { boardName, ArticleId, ArticleTitle, Author, CreateDate } = props;
  return (
    <StyledArticleItem>
      <div className="titleContent">
        <Link
          className="articleTitle"
          to={`/ArticleContent/${boardName}/${ArticleId}`}
        >
          {ArticleTitle}
        </Link>
      </div>
      <div className="articleDetailContent">
        <div className="author">{Author}</div>
        <div className="createDate">{dayjs(CreateDate).format("MM/DD")}</div>
      </div>
    </StyledArticleItem>
  );
};

export default ArticleItem;
