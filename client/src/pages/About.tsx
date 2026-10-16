function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Background Grid */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>


      <section className="relative mx-auto max-w-7xl px-6 py-20">

        {/* Page Header */}
        <div className="mb-16">

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            01 / PROFILE
          </p>

          <div className="mt-4 flex items-center gap-4">

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              ABOUT ME
            </h1>

            <span className="hidden h-px w-24 bg-cyan-500/40 sm:block" />

          </div>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A little more about who I am, what I'm studying, and the skills
            I'm developing as a future game programmer.
          </p>

        </div>


        {/* Main Profile */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">


          {/* Profile Panel */}
          <div className="relative">

            {/* Decorative Frame */}
            <div className="absolute -inset-3 border border-cyan-500/10" />

            <div className="relative border border-slate-700 bg-slate-900">

              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">

                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  user_profile
                </span>

                <span className="font-mono text-[10px] text-green-400">
                  ONLINE
                </span>

              </div>


              {/* Image Placeholder */}
              <div className="p-8">

                <div className="relative mx-auto aspect-[9/16] max-w-md overflow-hidden border border-slate-700 bg-slate-950">

                  {/* Corner Markers */}
                  <span className="absolute left-3 top-3 z-10 h-3 w-3 border-l border-t border-cyan-400" />

                  <span className="absolute right-3 top-3 z-10 h-3 w-3 border-r border-t border-cyan-400" />

                  <span className="absolute bottom-3 left-3 z-10 h-3 w-3 border-b border-l border-cyan-400" />

                  <span className="absolute bottom-3 right-3 z-10 h-3 w-3 border-b border-r border-cyan-400" />

                    <img
                        src="/images/profile.jpg"
                        alt="Michael Kendrick"
                        className="h-full w-full object-contain"
                    />




                </div>


                {/* Identity */}
                <div className="mt-8">

                  <p className="font-mono text-xs text-slate-600">
                    IDENTIFICATION
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Michael Kendrick
                  </h2>

                  <p className="mt-1 font-mono text-sm text-cyan-400">
                    GAME PROGRAMMER
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* About Information */}
          <div>

            <div className="border-l-2 border-cyan-400 pl-6">

              <p className="font-mono text-xs uppercase tracking-widest text-slate-600">
                ABOUT / 001
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Creating through code & creativity.
              </h2>

            </div>


            <div className="mt-8 space-y-5 leading-7 text-slate-400">

              <p>
                I am currently studying Game Programming at Centennial College,
                where I am developing skills in programming, game development,
                interactive design, and digital media.
              </p>

              <p>
                I enjoy creating games and experimenting with different
                gameplay ideas while learning how programming and creative
                design can work together to create interactive experiences.
              </p>

              <p>
                My goal is to continue improving both my technical and creative
                abilities while building projects that demonstrate what I can
                accomplish as a game programmer.
              </p>

            </div>


            {/* Education Data */}
            <div className="mt-10 grid gap-px border border-slate-800 bg-slate-800 sm:grid-cols-2">

              <div className="bg-slate-950 p-6">

                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  PROGRAM
                </p>

                <p className="mt-3 font-semibold">
                  Game Programming
                </p>

              </div>

              <div className="bg-slate-950 p-6">

                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  DURATION
                </p>

                <p className="mt-3 font-semibold text-cyan-400">
                  2025 — 2028
                </p>

              </div>

              <div className="bg-slate-950 p-6">

                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  INSTITUTION
                </p>

                <p className="mt-3 font-semibold">
                  Centennial College
                </p>

              </div>

              <div className="bg-slate-950 p-6">

                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  STATUS
                </p>

                <p className="mt-3 font-semibold text-green-400">
                  IN PROGRESS
                </p>

              </div>

            </div>


            {/* Resume */}
            <div className="mt-10 border border-slate-800 bg-slate-900 p-6">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>

                  <p className="font-mono text-xs uppercase tracking-widest text-slate-600">
                    DOCUMENT
                  </p>

                  <h3 className="mt-2 font-bold">
                    Resume / CV
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Resume PDF will be added later.
                  </p>

                </div>


                <a
                    href="/resume/Michael-Kendrick-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit border border-cyan-400 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
                >
                    View Old Resume →
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom Statement */}
        <div className="mt-20 border-t border-slate-800 pt-10">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <p className="font-mono text-xs uppercase tracking-widest text-slate-600">
              CURRENT OBJECTIVE
            </p>

            <p className="max-w-2xl text-sm leading-6 text-slate-500 sm:text-right">
              Continue learning, continue building, and turn ideas into
              playable experiences.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

export default About