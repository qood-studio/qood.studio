// components/sections/ProjectCard.tsx
interface ProjectCardProps {
  title: string
  category: string
}

export function ProjectCard({ title, category }: ProjectCardProps) {
  return (
    <div className="group relative h-40 rounded-xl border border-neutral-800 bg-neutral-900 p-6 cursor-pointer transition hover:border-neutral-600">
      <span className="text-sm text-neutral-500">{category}</span>
      <h3 className="mt-2 text-xl font-medium">
        {title}
      </h3>

      <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 transition group-hover:opacity-100 group-hover:translate-y-0">
        →
      </div>
    </div>
  )
}
