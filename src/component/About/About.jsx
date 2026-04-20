
export function About() {
  return (
    <section  id="about" className="relative max-w-5xl  mx-auto px-4 sm:px-8 pt-40 pb-24 text-center">
      <h1
  style={{ fontFamily: 'EB Garamond, serif' }}
  className="text-[clamp(3.5rem,8vw,6rem)] leading-[1.1] "
>
  <span className="text-neutral-400">I build</span>{" "}
  <span className="text-neutral-900">modern web experiences</span>
</h1>


      <p style={{fontFamily: 'Poppins, sans-serif'}}  className="mt-6 max-w-2xl mx-auto text-neutral-700 text-base sm:text-lg">
        I’m <span className="font-medium text-neutral-900">Shreyash Jadhav</span> — an elegant
        Full-Stack Developer crafting scalable applications, intuitive UI/UX,
        and cloud-ready systems using modern web technologies and AWS.
      </p>

      <div style={{fontFamily: 'Poppins, sans-serif'}}  className="mt-8 flex flex-col items-center gap-3">
        <button className="px-6 py-3 rounded-xl bg-[#E7D6FF] border border-neutral-900 font-semibold">
          View My Work
        </button>
        <span className="text-sm text-neutral-500">
          Full-Stack · DevOps (AWS) · UI/UX · Freelancer
        </span>
      </div>

      <div style={{fontFamily: 'Poppins, sans-serif'}}  className="mt-14 flex justify-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E6F5C] text-white text-sm font-medium">
          ✓ 1+ year building production-ready applications
        </div>
      </div>
    </section>
  );
}
