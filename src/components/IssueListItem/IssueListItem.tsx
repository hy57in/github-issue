import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';

export interface IssueListItemProps {
  id: number;
  title: string;
  comments: number;
  createdAt: string;
}

const IssueListItem = ({ id, title, comments, createdAt }: IssueListItemProps) => {
  return (
    <StyledIssueListItem>
      <Id>{id}</Id>
      <Title>{title}</Title>
      <Comments>{comments}</Comments>
      <Date>{format(parseISO(createdAt), 'yyyy-MM-dd hh:mm:ss')}</Date>
    </StyledIssueListItem>
  );
};

export default IssueListItem;

const StyledIssueListItem = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 100px;
  padding: 10px;
  gap: 10px;
  border: solid 1px #cfd8dd;
  border-radius: 6px;
`;

const Id = styled.p`
  width: 90px;
`;

const Title = styled.p`
  font-weight: bold;
  width: 500px;
  text-align: left;
`;

const Comments = styled.p`
  width: 50px;
`;

const Date = styled.p`
  width: 160px;
`;
