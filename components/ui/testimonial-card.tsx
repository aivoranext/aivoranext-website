import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-xl border border-white/10",
        "bg-gradient-to-b from-white/[0.05] to-white/[0.02]",
        "p-5 text-start sm:p-6",
        "hover:from-white/[0.08] hover:to-white/[0.04] hover:border-[#0065F8]/30",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border-2 border-white/10">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-base font-semibold leading-none text-white">
            {author.name}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
        "{text}"
      </p>
    </Card>
  )
}
