export default function Comment(props: any) {
  return (
    <div>
      <h1>Comments Page: {`Post ID -> ${props.postID}, Comment ID -> ${props.commentID}`}</h1>
      <h2>{(props.data as any).body}</h2>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postID: '1', commentID: '1' } }, { params: { postID: '2', commentID: '2' } }],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const postID = context.params.postID;
  const commentID = context.params.commentID;

  const resp = await fetch(`https://dummyjson.com/comments/${commentID}`);
  const reply = await resp.json();

  return {
    props: {
      postID,
      commentID,
      data: reply,
    },
  };
}
