import Container from "@/components/Container";
import CopyEmailButton from "@/components/CopyEmailButton";

export default function ContactPage() {
  const email = "journal.unbound@gmail.com";

  return (
    <main>
      <section className="pt-16 md:pt-24 pb-24 md:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mt-6">Contact</h1>

            <p className="mt-6 text-secondary text-[17px] leading-8">
              For collaborations, questions, or a thoughtful note — email is best.
            </p>

            <div className="mt-10 rounded-2xl border border-charcoal/10 bg-white/35 p-6 md:p-8">
              <p className="text-sm text-secondary">Email</p>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent("Hello from Unbound")}`}
                  className="text-[17px] underline underline-offset-4 decoration-charcoal/20 hover:decoration-charcoal/40 transition"
                >
                  {email}
                </a>

                <CopyEmailButton email={email} />
              </div>

              <p className="mt-6 text-sm text-secondary">
                If you prefer, include a few lines about who you are and what you’re working on.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}