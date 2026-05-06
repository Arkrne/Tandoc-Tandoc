interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="text-center mb-20">
      <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase mb-4 block">
        {label}
      </span>
      <h2 className="font-['Noto_Serif'] text-4xl md:text-5xl text-primary-container mb-6">
        {title}
      </h2>
      <div className="w-24 h-px bg-secondary mx-auto"></div>
    </div>
  );
}
