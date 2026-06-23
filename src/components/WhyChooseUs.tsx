import { features } from '@/data/home';

export function WhyChooseUs() {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="section-shell">
        <h2 className="section-heading">Why You Should Work With Us</h2>
        <p className="section-kicker">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-ink shadow-sm">
                <feature.icon className="h-7 w-7 stroke-[1.7]" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">{feature.title}</h3>
              <p className="mx-auto mt-2 max-w-[230px] text-xs leading-5 text-slate-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
