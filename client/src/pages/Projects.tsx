function Projects() {
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

        {/* Header */}
        <div className="mb-16">

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            02 / PROJECT ARCHIVE
          </p>

          <div className="mt-4 flex items-center gap-4">

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              MY PROJECTS
            </h1>

            <span className="hidden h-px w-24 bg-cyan-500/40 sm:block" />

          </div>

          <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <p className="max-w-2xl leading-7 text-slate-400">
              A collection of games and interactive projects I've worked on
              while developing my programming, design, and creative skills.
            </p>

            <p className="font-mono text-xs text-slate-600">
              PROJECTS_LOADED: 03
            </p>

          </div>

        </div>


        {/* Project 01 */}
        <article className="group relative mb-8 overflow-hidden border border-slate-800 bg-slate-900 transition duration-300 hover:border-cyan-500/60">

          {/* Project Number */}
          <div className="absolute right-6 top-5 font-mono text-6xl font-black text-slate-800/50">
            01
          </div>


          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* Project Visual */}
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-b border-slate-800 bg-slate-950 lg:border-b-0 lg:border-r">

              {/* Decorative Grid */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>


              <div className="relative h-full w-full">

                <img
                    src="/images/projects/keyboard-kickers.jpg"
                    alt="Keyboard Kickers project"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-slate-950/20 transition duration-500 group-hover:bg-slate-950/10" />

              </div>

            </div>


            {/* Project Information */}
            <div className="relative p-8 lg:p-10">

              <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                PROJECT_01 / GAME
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Keyboard Kickers
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                A fast-paced cartoon soccer game designed around shared
                keyboard controls. Players compete to score points while
                dealing with hazards and gameplay power-ups.
              </p>


              {/* Project Details */}
              <div className="mt-8 grid gap-px border border-slate-800 bg-slate-800 sm:grid-cols-3">

                <div className="bg-slate-950 p-5">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    ROLE
                  </p>

                  <p className="mt-2 text-sm font-semibold">
                    Game Development
                  </p>

                </div>

                <div className="bg-slate-950 p-5">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    FOCUS
                  </p>

                  <p className="mt-2 text-sm font-semibold">
                    Gameplay / Programming
                  </p>

                </div>

                <div className="bg-slate-950 p-5">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                        OUTCOME
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                        Playable Game Concept
                    </p>

                </div>

              </div>


              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">

                <span className="border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase text-slate-400">
                  Game Design
                </span>

                <span className="border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase text-slate-400">
                  Programming
                </span>

                <span className="border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase text-slate-400">
                  Multiplayer
                </span>

              </div>

            </div>

          </div>

        </article>


        {/* Project 02 */}
        <article className="group relative mb-8 overflow-hidden border border-slate-800 bg-slate-900 transition duration-300 hover:border-cyan-500/60">

          <div className="absolute right-6 top-5 font-mono text-6xl font-black text-slate-800/50">
            02
          </div>


          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* Project Information */}
            <div className="relative order-2 p-8 lg:order-1 lg:p-10">

              <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                PROJECT_02 / FPS
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                2.5D FPS
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                A first-person shooter project focused on creating a stylized
                environment, interactive gameplay, and a unique visual style.
              </p>


              <div className="mt-8 grid gap-px border border-slate-800 bg-slate-800 sm:grid-cols-3">

                <div className="bg-slate-950 p-5">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    ROLE
                  </p>

                  <p className="mt-2 text-sm font-semibold">
                    Game Development
                  </p>

                </div>

                <div className="bg-slate-950 p-5">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    FOCUS
                  </p>

                  <p className="mt-2 text-sm font-semibold">
                    FPS / Environment
                  </p>

                </div>

                <div className="bg-slate-950 p-5">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                        OUTCOME
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                        Playable FPS Project
                    </p>

                </div>



              </div>


              <div className="mt-7 flex flex-wrap gap-2">

                <span className="border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase text-slate-400">
                  FPS
                </span>

                <span className="border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase text-slate-400">
                  Game Development
                </span>

                <span className="border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase text-slate-400">
                  Environment
                </span>

              </div>

            </div>


            {/* Project Visual */}
            <div className="relative order-1 flex min-h-[320px] items-center justify-center overflow-hidden border-b border-slate-800 bg-slate-950 lg:order-2 lg:border-b-0 lg:border-l">

              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>


              <div className="relative h-full w-full">

                 <img
                    src="/images/projects/fps-25d.jpg"
                    alt="2.5D FPS project"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-slate-950/20 transition duration-500 group-hover:bg-slate-950/10" />

            </div>

            </div>

          </div>

        </article>


        {/* Project 03 */}
        <article className="group relative overflow-hidden border border-slate-800 bg-slate-900 transition duration-300 hover:border-cyan-500/60">

          <div className="absolute right-6 top-5 font-mono text-6xl font-black text-slate-800/50">
            03
          </div>


          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* Project Visual */}
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-b border-slate-800 bg-slate-950 lg:border-b-0 lg:border-r">

              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>


              <div className="relative h-full w-full">

                <img
                    src="/images/projects/vector-art-game.jpg"
                    alt="Vector Art Game project"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-slate-950/20 transition duration-500 group-hover:bg-slate-950/10" />

            </div>

            </div>


            {/* Project Information */}
            <div className="relative p-8 lg:p-10">

              <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                PROJECT_03 / CURRENT
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Mature Humor Vector Art Game
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                A stylized game project exploring vector-based visuals,
                gameplay design, and the combination of programming and
                artistic development.
              </p>


              <div className="mt-8 grid gap-px border border-slate-800 bg-slate-800 sm:grid-cols-3">

                <div className="bg-slate-950 p-5">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    ROLE
                  </p>

                  <p className="mt-2 text-sm font-semibold">
                    Game Development
                  </p>

                </div>

                <div className="bg-slate-950 p-5">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    FOCUS
                  </p>

                  <p className="mt-2 text-sm font-semibold">
                    Art / Programming
                  </p>

                </div>


                <div className="bg-slate-950 p-5">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                        OUTCOME
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                        Game Prototype
                    </p>

                </div>

              </div>


              <div className="mt-7 flex flex-wrap gap-2">

                <span className="border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase text-slate-400">
                  Vector Art
                </span>

                <span className="border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase text-slate-400">
                  Programming
                </span>

                <span className="border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase text-slate-400">
                  Game Design
                </span>

              </div>

            </div>

          </div>

        </article>


        {/* Footer Note */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">

          <p className="font-mono text-xs text-slate-600">
            END_OF_PROJECT_ARCHIVE
          </p>

          <p className="font-mono text-xs text-cyan-400">
            MORE PROJECTS IN DEVELOPMENT...
          </p>

        </div>

      </section>

    </main>
  )
}

export default Projects