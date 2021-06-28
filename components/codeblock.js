import highlight from 'highlight.js';

export default function CodeBlock({ children }) {

  const highlighted = highlight.highlightAuto(children[0]).value;

  return (
    <pre className='hljs'>
      <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    </pre>
  );
}
