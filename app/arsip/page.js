import TopBar from '@/components/TopBar';
import Arsip from '@/components/Arsip';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ title: 'Arsip', description: "Kartu Lajur yang sudah diarsipkan dari lajur Selesai — kembalikan ke papan atau hapus selamanya.", path: '/arsip' });

export default function ArsipPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="mx-auto w-full max-w-4xl px-5 py-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">Arsip</h1>
        <p className="mt-1 text-on-surface-variant">Kartu selesai yang sudah tidak perlu dilihat setiap hari.</p>
        <div className="mt-8"><Arsip /></div>
      </main>
    </div>
  );
}
