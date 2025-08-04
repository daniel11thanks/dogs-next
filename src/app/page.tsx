import photoGet from '@/actions/photos-get';
import Feed from '@/components/feed/feed';

export default async function Home() {
  const { data: photos, ok, error } = await photoGet();

  if (!ok) {
    return (
      <section className="container mainContainer">
        <p>Erro ao carregar fotos: {error}</p>
      </section>
    );
  }

  return (
    <section className="container mainContainer">
      <Feed photos={photos ?? []} />
    </section>
  );
}
