import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';

const PreOrderContent = dynamic(() => import('./PreOrderContent').then(mod => mod.PreOrderContent), {
  ssr: false
});

export default function PreOrderPage() {
  const t = useTranslations('PreOrder');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="relative overflow-hidden">
        <Suspense fallback={<div>loading...</div>}>
          <PreOrderContent t={t} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}