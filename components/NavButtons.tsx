import { useCallback } from 'react';
import { useRouter } from 'next/router';

export default function NavButtons() {
  const router = useRouter();

  const back = useCallback(() => {
    router.back();
  }, [router]);

  const home = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <>
      <button onClick={back} style={{ margin: '1rem' }}>
        Back
      </button>
      <button onClick={home} style={{ margin: '1rem' }}>
        Home
      </button>
    </>
  );
}
