import Link from 'next/link';

export default function Posts(props: any) {
  return (
    <div>
      <h1>Post List Page</h1>
      <h3>{props.time}</h3>
      <ul>
        {props.data.map((item: any) => {
          return (
            <li key={item.id}>
              <Link href={`/posts/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const resp = await fetch('https://dummyjson.com/posts');
  const reply = await resp.json();

  return {
    props: {
      data: reply.posts,
      time: new Date().toLocaleString(),
    },
  };
}
