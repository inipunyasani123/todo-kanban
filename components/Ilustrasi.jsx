// Ilustrasi kecil untuk keadaan kosong. SVG sebaris (tanpa unduhan), warnanya dari token tema sehingga ikut
// berganti di mode gelap. Dekoratif: teks di sebelahnya yang membawa pesan.

/** Arsip masih kosong: kotak arsip terbuka di ujung lajur putus-putus, satu kartu selesai sedang masuk. */
export function ArsipKosong() {
  return (
    <svg viewBox="0 0 160 120" className="mx-auto mb-5 h-24 w-32" aria-hidden="true" focusable="false">
      <path d="M26 6v84M134 6v84" fill="none" strokeWidth="2.5" strokeDasharray="7 7" strokeLinecap="round" className="stroke-tertiary-container/70" />
      <ellipse cx="80" cy="110" rx="44" ry="5" className="fill-on-surface/5" />
      <g transform="rotate(-8 80 40)">
        <rect x="56" y="16" width="48" height="34" rx="6" strokeWidth="2.5" className="fill-surface-container-lowest stroke-outline" />
        <path d="M64 29l5 5 10-11" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary" />
        <path d="M84 30h12M66 42h28" fill="none" strokeWidth="2.5" strokeLinecap="round" className="stroke-outline-variant" />
      </g>
      <path d="M44 60h72l-4 44a6 6 0 0 1-6 5H54a6 6 0 0 1-6-5z" strokeWidth="2.5" strokeLinejoin="round" className="fill-primary-fixed stroke-primary" />
      <rect x="38" y="52" width="84" height="14" rx="4" strokeWidth="2.5" className="fill-primary-fixed-dim stroke-primary" />
      <rect x="68" y="76" width="24" height="7" rx="3.5" className="fill-primary" />
    </svg>
  );
}
