import styled from "styled-components/macro";
import BoardItem from "./BoardItem";
import { useState, useEffect, useContext } from "react";
import ActionToolbar from "../../components/ActionToolbar";
import AdContent from "../shared/AdContent";
import GlobalContext from "../../contexts/GlobalContext";
import { Helmet } from "react-helmet";

const BoardListContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  gap: 100px;
  .boardList {
    max-width: 800px;
    width: 800px;
  }
`;

const BoardList = () => {
  const [boardData, setboardData] = useState([]);
  const { API_BASEURL } = useContext(GlobalContext) || {};
  const API_ENDPOINT = `${API_BASEURL}/hotBoard`;

  useEffect(() => {
    fetch(API_ENDPOINT, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        const baordData = res.data.sort((prevItem, nextItem) => {
          const prevItem_activeUser = parseInt(prevItem.activeUser);
          const nextItem_activeUser = parseInt(nextItem.activeUser);
          if (prevItem_activeUser > nextItem_activeUser) return -1;
          if (prevItem_activeUser < nextItem_activeUser) return 1;
          return 0;
        });
        setboardData(baordData);
      })
      .catch((error) => {
        console.error("get error", error);
      });
  }, []);

  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content="批踢踢-鄉民之力 熱門看板"/>
        <meta name="description" content="批踢踢-鄉民之力 熱門看板" />
        <title>批踢踢-鄉民之力</title>
      </Helmet>

      <div style={{ position: "relative" }}>
        <ActionToolbar />
        <BoardListContainer>
          <div className="boardList">
            {boardData
              ? boardData.map((board) => {
                  <BoardItem />;
                  const { boardId, name, activeUser, category, title } = board;
                  return (
                    <BoardItem
                      key={boardId}
                      boardId={boardId}
                      name={name}
                      activeUser={activeUser}
                      category={category}
                      title={title}
                    />
                  );
                })
              : ""}
          </div>
          <AdContent />
        </BoardListContainer>
      </div>
    </div>
  );
};

export default BoardList;
