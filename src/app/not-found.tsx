import Link from 'next/link';

export default async function NotFound() {
  return (
    <section>
      <h1 className="title">Pagina não encontrada</h1>
      <Link
        className="button"
        href={'/'}
        style={{ marginBottom: '1rem', display: 'inline-block' }}
      >
        Volte para a Home.
      </Link>
    </section>
  );
}
