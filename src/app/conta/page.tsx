import photoGet from '@/actions/photos-get';
import userGet from '@/actions/user-get';
import Feed from '@/components/feed/feed';
import { useUser } from '@/context/user-context';
import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MInha Conta',
};

export default async function ContaPage() {
  const { data: user } = await userGet();
  const { data } = await photoGet({ user: user?.username });
  return (
    <section>
      {data?.length ? (
        <Feed photos={data} user={user?.username} />
      ) : (
        <div>
          <p style={{ color: '444', fontSize: '1.25', marginBottom: '1rem' }}>
            Nenhuma foto encontrada
          </p>
          <Link
            href={'/conta/postar'}
            className="button"
            style={{ display: 'inline-block' }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </section>
  );
}
