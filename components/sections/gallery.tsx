import { Stagger, StaggerItem } from "@/components/motion/reveal";

type Shot = { img: string; cap: string };

export function Gallery({ shots }: { shots: Shot[] }) {
  return (
    <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {shots.map((s, i) => (
        <StaggerItem
          key={s.img}
          className={`${i === 0 ? "col-span-2 row-span-2" : ""}`}
        >
          <figure className="img-zoom group relative h-full overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.img}
              alt={s.cap}
              className={`w-full object-cover ${i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sea-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <figcaption className="absolute bottom-4 left-4 translate-y-2 text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {s.cap}
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
