import { postSlugs, postForSlug } from '../../posts';
import Layout from '../../components/layout';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/codeblock';
import footnotes from 'remark-footnotes';
import MDLink from '../../components/mdLink';
import MDListItem from '../../components/mdListItem';

export default function Post({ frontmatter, body }) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={frontmatter.title}>
      <div className='w-full'>
        <article className='prose max-w-none'>
          <h1>{frontmatter.title}</h1>
          <p className='italic'>{frontmatter.date}</p>
          <ReactMarkdown
            children={body}
            components={{ code: CodeBlock, a: MDLink, li: MDListItem }}
            plugins={[footnotes]}
          />
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { frontmatter, body } = await postForSlug(params.post);

  return {
    props: {
      frontmatter,
      body,
    },
  };
}

export async function getStaticPaths() {
  const paths = postSlugs().map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
