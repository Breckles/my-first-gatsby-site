import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = ({ data }) => {
  const listItems = data.allFile.nodes.map((node) => <li>{node.name}</li>);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>{listItems}</ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
