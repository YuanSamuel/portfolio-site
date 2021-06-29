import MDLink from './mdLink';

export default function MDListItem({ id, children }) {
  if (id.startsWith('fn')) {
    return FootnoteDefinition(id, children);
  }
  return <li id={id}>{children}</li>;
}

function FootnoteDefinition(id, children) {
  return (
    <li id={id}>
      <MDLink href={children[0]} children={children[0]} />
    </li>
  );
}
