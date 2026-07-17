import { ImageReveal, Reveal } from "@/components/motion/reveal";

type Room = { tag: string; name: string; d: string; img: string; feats: string[] };

export function Rooms({ rooms }: { rooms: Room[] }) {
  return (
    <div className="space-y-20 md:space-y-28">
      {rooms.map((r, i) => {
        const flip = i % 2 === 1;
        return (
          <div
            key={r.name}
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <ImageReveal
              src={r.img}
              alt={r.name}
              className="aspect-[4/3] rounded-[1.75rem] shadow-[0_35px_80px_-45px_rgba(10,44,52,0.5)]"
              imgClassName="transition-transform duration-[1.2s] hover:scale-105"
            />
            <div className={flip ? "lg:pr-6" : "lg:pl-6"}>
              <Reveal>
                <span className="eyebrow text-gold-600">{r.tag}</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h3 className="font-display mt-4 text-3xl leading-tight text-sea-800 md:text-4xl">{r.name}</h3>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-lg leading-relaxed text-sea-700/80 text-pretty">{r.d}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {r.feats.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-sea-700/15 bg-sand-100 px-4 py-1.5 text-sm text-sea-700/85"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        );
      })}
    </div>
  );
}
