export default function Comments(props: any) {
  return (
    <div>
      <h1>Comment List: {`Post ID -> ${props.postID}`}</h1>
      <ul>
        {props.data.map((item: any) => {
          return <li key={item.id}>{item.body}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postID: '1' } }, { params: { postID: '2' } }],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const postID = context.params.postID;

  const resp = await fetch(`https://dummyjson.com/comments/post/${postID}`);
  const reply = await resp.json();

  return {
    props: {
      postID,
      data: reply.comments,
    },
  };
}
