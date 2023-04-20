import { useRouter } from 'next/router';

export default function Help() {
  const router = useRouter();
  const parmas = router.query.parmas;

  return <div>Help Page: {(parmas as string[])?.join(' ')}</div>;
}
