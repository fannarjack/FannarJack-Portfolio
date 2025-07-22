import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-3 gap-12 items-center w-full">
        <div className="flex justify-center">
          <div
            className={`w-90 h-96 rounded-sm overflow-hidden transition-colors duration-500
                }`}
          >
            <Image
              src="/img/PicOfMe2.png"
              alt="Fannar Hrafn"
              width={504} // 72 * 4
              height={520} // 80 * 4
              className="w-full h-full object-contain object-top transition-all duration-500"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl font-light tracking-tight">
                Fannar Hrafn
              </h1>
              <p className={`text-lg font-light `}>Jack Hilmarsson</p>
            </div>

            <div className="grid grid-cols-8 gap-4 items-center">
              <div
                className={`col-span-1 h-px transition-colors duration-500 `}
              />
              <div className="col-span-9">
                <p className="text-lg font-medium">Frontend Web Developer</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className={`text-xs uppercase tracking-widest mb-2 `}>
                    01 — Expertise
                  </h3>
                  <p className="text-sm font-light">
                    React, Typescript, tailwind
                  </p>
                </div>
                <div>
                  <h3 className={`text-xs uppercase tracking-widest mb-2 $`}>
                    02 — Approach
                  </h3>
                  <p className="text-sm font-light">
                    User-centered, performance-focused
                  </p>
                </div>
              </div>

              <div
                className={`border-l-2 pl-6 transition-colors duration-500 `}
              >
                <p className="text-base leading-relaxed font-light">
                  I build fast, accessible websites with a focus on clean design
                  and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
