import statsGet from '@/actions/stats-get';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ContaEstatisticas = dynamic(
  () => import('@/components/conta/conta-estatisticas'),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: 'Estatisticas | Minha Conta',
};

export default async function EstatisticasPage() {
  const { data } = await statsGet();
  const result = await statsGet();
  console.log('result', result);
  if (!result.ok) {
    console.error('Erro na API:', result.error);
  }

  if (!data) return null;
  return (
    <main>
      <ContaEstatisticas data={data} />
    </main>
  );
}
