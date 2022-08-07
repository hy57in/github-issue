import IssueList from '@/components/IssueList';
import styled from '@emotion/styled';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container>
      <Title>GitHub Issue</Title>
      <IssueList />
    </Container>
  );
};

export default Home;

const Container = styled.section`
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
