import { Link } from "react-router-dom"

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden">

        {/* Background Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Cyan Glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Main Introduction */}
          <div>

            {/* Small Label */}
            <div className="mb-8 flex items-center gap-3">

              <span className="font-mono text-xs text-cyan-400">
                01 / PROFILE
              </span>

              <span className="h-px w-16 bg-cyan-500/50" />

            </div>


            {/* Main Heading */}
            <h1 className="max-w-4xl text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">

              BUILDING

              <span className="block text-cyan-400">
                DIGITAL
              </span>

              <span className="block">
                WORLDS.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              I'm Michael Kendrick, a Game Programming student focused on
              creating interactive experiences through programming, game
              development, and creative design.
            </p>


            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/projects"
                className="group flex items-center gap-3 bg-cyan-400 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >

                View Projects

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>

              </Link>

              <Link
                to="/about"
                className="border border-slate-700 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                About Me
              </Link>

            </div>


            {/* Quick Information */}
            <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-slate-800">

              <div className="py-5">

                <p className="font-mono text-xs text-slate-600">
                  PROGRAM
                </p>

                <p className="mt-2 text-sm font-semibold">
                  Game Programming
                </p>

              </div>

              <div className="border-x border-slate-800 px-4 py-5">

                <p className="font-mono text-xs text-slate-600">
                  SCHOOL
                </p>

                <p className="mt-2 text-sm font-semibold">
                  Centennial
                </p>

              </div>

              <div className="px-4 py-5">

                <p className="font-mono text-xs text-slate-600">
                  STATUS
                </p>

                <p className="mt-2 text-sm font-semibold text-green-400">
                  STUDENT
                </p>

              </div>

            </div>

          </div>


          {/* Developer Interface */}
          <div className="relative">

            {/* Outer Frame */}
            <div className="absolute -inset-4 border border-cyan-500/10" />

            <div className="relative border border-slate-700 bg-slate-900">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">

                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 bg-red-400" />
                  <span className="h-2.5 w-2.5 bg-yellow-400" />
                  <span className="h-2.5 w-2.5 bg-green-400" />

                </div>

                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  developer_profile.exe
                </span>

              </div>


              {/* Profile */}
              <div className="p-8">

                <div className="flex items-center justify-between">

                  <div className="flex h-20 w-20 items-center justify-center border border-cyan-400 bg-slate-950 font-mono text-2xl font-bold text-cyan-400">
                    MK
                  </div>

                  <div className="text-right">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                      Status
                    </p>

                    <p className="mt-1 font-mono text-sm text-green-400">
                      ● ONLINE
                    </p>

                  </div>

                </div>


                <div className="mt-8">

                  <p className="font-mono text-xs text-slate-600">
                    DEVELOPER
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Michael Kendrick
                  </h2>

                  <p className="mt-1 font-mono text-sm text-cyan-400">
                    GAME PROGRAMMER
                  </p>

                </div>


                {/* Skills */}
                <div className="mt-8 border-t border-slate-800 pt-6">

                  <p className="font-mono text-xs text-slate-600">
                    CURRENT SKILLSET
                  </p>

                  <div className="mt-4 space-y-3">

                    <div>

                      <div className="mb-1 flex justify-between text-xs">

                        <span className="text-slate-400">
                          Programming
                        </span>

                        <span className="font-mono text-cyan-400">
                          LEARNING
                        </span>

                      </div>

                      <div className="h-1 bg-slate-800">
                        <div className="h-1 w-3/4 bg-cyan-400" />
                      </div>

                    </div>


                    <div>

                      <div className="mb-1 flex justify-between text-xs">

                        <span className="text-slate-400">
                          Game Development
                        </span>

                        <span className="font-mono text-cyan-400">
                          ACTIVE
                        </span>

                      </div>

                      <div className="h-1 bg-slate-800">
                        <div className="h-1 w-4/5 bg-cyan-400" />
                      </div>

                    </div>


                    <div>

                      <div className="mb-1 flex justify-between text-xs">

                        <span className="text-slate-400">
                          3D / Creative
                        </span>

                        <span className="font-mono text-cyan-400">
                          ACTIVE
                        </span>

                      </div>

                      <div className="h-1 bg-slate-800">
                        <div className="h-1 w-2/3 bg-cyan-400" />
                      </div>

                    </div>

                  </div>

                </div>


                {/* Terminal */}
                <div className="mt-8 border border-slate-800 bg-slate-950 p-4 font-mono text-xs">

                  <p className="text-slate-600">
                    $ portfolio.status
                  </p>

                  <p className="mt-2 text-green-400">
                    &gt; SYSTEM READY
                  </p>

                  <p className="mt-1 text-slate-500">
                    &gt; PROJECTS LOADED: 03
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Featured Areas */}
      <section className="border-t border-slate-800 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mb-10 flex items-end justify-between">

            <div>

              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                02 / SYSTEMS
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                What I'm Building
              </h2>

            </div>

            <span className="hidden font-mono text-xs text-slate-600 sm:block">
              SELECT MODULE →
            </span>

          </div>


          <div className="grid gap-px border border-slate-800 bg-slate-800 md:grid-cols-3">

            {/* Game Development */}
            <Link
              to="/projects"
              className="group bg-slate-950 p-8 transition duration-300 hover:bg-slate-900"
            >

              <span className="font-mono text-xs text-slate-600">
                MODULE_01
              </span>

              <div className="mt-8 text-4xl">
                🎮
              </div>

              <h3 className="mt-6 text-xl font-bold group-hover:text-cyan-400">
                Game Development
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Creating gameplay systems, mechanics, and interactive
                experiences.
              </p>

              <p className="mt-6 font-mono text-xs text-cyan-400">
                EXPLORE →
              </p>

            </Link>


            {/* Programming */}
            <Link
              to="/services"
              className="group bg-slate-950 p-8 transition duration-300 hover:bg-slate-900"
            >

              <span className="font-mono text-xs text-slate-600">
                MODULE_02
              </span>

              <div className="mt-8 text-4xl">
                {"</>"}
              </div>

              <h3 className="mt-6 text-xl font-bold group-hover:text-cyan-400">
                Programming
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Developing software and interactive systems while continuously
                expanding my technical skills.
              </p>

              <p className="mt-6 font-mono text-xs text-cyan-400">
                EXPLORE →
              </p>

            </Link>


            {/* Creative Development */}
            <Link
              to="/about"
              className="group bg-slate-950 p-8 transition duration-300 hover:bg-slate-900"
            >

              <span className="font-mono text-xs text-slate-600">
                MODULE_03
              </span>

              <div className="mt-8 text-4xl">
                ◈
              </div>

              <h3 className="mt-6 text-xl font-bold group-hover:text-cyan-400">
                Creative Development
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Combining programming, visual design, 3D content, and creative
                ideas.
              </p>

              <p className="mt-6 font-mono text-xs text-cyan-400">
                EXPLORE →
              </p>

            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home