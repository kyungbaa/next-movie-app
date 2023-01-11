import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Deatil() {
  const router = useRouter();
  const [title, id] = router.query.params || [];
  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
