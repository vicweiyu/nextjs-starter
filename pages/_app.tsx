import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const Header = () => {
  return <h1 style={{ color: 'lightblue' }}>APP Header</h1>;
};

const Footer = () => {
  return <h1 style={{ color: 'lightblue' }}>APP Footer</h1>;
};

export default function App({ Component, pageProps }: AppProps) {
  console.log((Component as any).getTitle());
  console.log((Component as any).render);

  console.log(pageProps);

  return (
    <>
      <Header />
      {(Component as any).render && (Component as any).render()}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
