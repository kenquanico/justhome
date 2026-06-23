import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/metadata';

const sections = [
  ['Data collected', 'We collect contact details, search preferences, saved listings, messages, and basic device information when you use JustHome. We only request information that helps us respond to property needs or improve the service.'],
  ['How it is used', 'Your information helps us coordinate viewings, recommend relevant listings, respond to enquiries, and improve the website experience. We may also use aggregated trends to understand market demand.'],
  ['Cookies', 'JustHome may use cookies and similar technologies for site functionality, analytics, and remembering preferences. You can control cookie behavior through your browser settings.'],
  ['Third parties', 'We may share necessary details with agents, service providers, analytics vendors, or legal partners who help operate the service. These parties are expected to handle data responsibly and only for agreed purposes.'],
  ['Security', 'We use reasonable safeguards to protect submitted information, but no online system can be guaranteed completely secure. Please avoid sending highly sensitive personal documents through general enquiry forms.'],
  ['Deletion requests', 'To request deletion or correction of your data, contact hello@justhome.ae. We will review the request and respond according to applicable UAE requirements.'],
];

export const metadata = pageMetadata('Privacy Policy', 'JustHome privacy policy and data handling summary.');

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero title="Privacy Policy" subTitle="Last updated June 2026" breadcrumbs={[{ label: 'Privacy Policy' }]} />
      <section className="section-shell py-16 lg:py-24">
        <div className="grid max-w-3xl gap-8">
          {sections.map(([title, copy]) => (
            <section key={title}>
              <h2 className="text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
