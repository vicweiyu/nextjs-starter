export default function Products(props: any) {
  return (
    <div>
      <h1>Product List Page</h1>
      <h2>{props.time}</h2>
      <div>
        {props.data.map((item: any) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Products.getTitle = () => {
  return 'Products Title';
};

Products.render = () => {
  return <h1 style={{ color: 'lightgreen' }}>Render from Product List Page</h1>;
};

export async function getServerSideProps(context: any) {
  const resp = await fetch('http://127.0.0.1:3000/api/products');
  const products = await resp.json();

  const { req, res, params, query, ...rest } = context;
  console.log('**********');
  console.log(params);
  console.log(query);
  console.log('**********');

  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', 'token=1111');

  return {
    props: {
      data: products,
      time: new Date().toLocaleString(),
      pageName: 'Product List',
    },
  };
}
