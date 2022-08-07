import getIssue from '@/apis';
import $issueListAtom from '@/recoil';
import { IIssue } from '@/types/issueType';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import IssueListItem from '../IssueListItem';

const IssueList = () => {
  const [issueList, setIssueList] = useRecoilState<IIssue[]>($issueListAtom);

  useEffect(() => {
    async function tmp() {
      const issueData = await getIssue();
      setIssueList(issueData.sort((a: IIssue, b: IIssue) => b.comments - a.comments));
    }
    tmp();
  }, [setIssueList]);

  return (
    <StyledIssueList>
      <Category>
        <Id>ID</Id>
        <Title>제목</Title>
        <Comments>댓글 수</Comments>
        <Date>날짜</Date>
      </Category>
      {issueList.map((issue: IIssue) => (
        <IssueListItem
          key={issue.id}
          id={issue.id}
          title={issue.title}
          comments={issue.comments}
          createdAt={issue.created_at}
        />
      ))}
    </StyledIssueList>
  );
};

export default IssueList;

const StyledIssueList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 6px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 50px;
  padding: 10px;
  background-color: #cfd8dd;
  border-radius: 6px;
  font-weight: bold;
`;

const Id = styled.p`
  width: 90px;
`;

const Title = styled.p`
  width: 500px;
`;

const Comments = styled.p`
  width: 50px;
`;

const Date = styled.p`
  width: 160px;
`;
