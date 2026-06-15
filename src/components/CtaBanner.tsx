import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container-max">
        <div className="bg-text-main rounded-[20px] py-16 px-8 text-center text-white relative overflow-hidden shadow-md">
          {/* Decorative gradients */}
          <div className="absolute -top-[50%] -right-[20%] w-[400px] h-[400px] rounded-full bg-cta/8 pointer-events-none animate-drift" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[300px] h-[300px] rounded-full bg-white/3 pointer-events-none animate-float" />

          <h2 className="font-heading text-3xl md:text-4xl mb-4 relative z-10 font-medium leading-tight">
            Ready to upgrade your tech stack? Let's talk this week.
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-8 max-w-md mx-auto relative z-10">
            We'd love to hear about your goals — whether it's a systems migration, a new web platform, or a custom mobile app.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold bg-cta text-white hover:bg-cta-hover transition-all relative z-10 shadow-md hover:-translate-y-[1px]"
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </section>
  );
}
