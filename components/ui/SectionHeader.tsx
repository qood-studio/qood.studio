// components/ui/SectionHeader.tsx
interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-neutral-400 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
