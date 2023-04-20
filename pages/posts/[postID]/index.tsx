import { useRouter } from 'next/router';

export default function Details(props: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>
        Post Details: {props.postID}, {props.time}
      </h1>
      <h2>{(props.data as any).title}</h2>
      <h3>{(props.data as any).body}</h3>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postID: '1' } }, { params: { postID: '2' } }],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const postID = context.params.postID;

  const resp = await fetch(`https://dummyjson.com/posts/${postID}`);
  const reply = await resp.json();

  return {
    props: {
      postID,
      data: reply,
      time: new Date().toLocaleString(),
    },
    revalidate: 30,
  };
}
