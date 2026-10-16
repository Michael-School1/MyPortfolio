function Education() {
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
            03 / DEVELOPMENT LOG
          </p>

          <div className="mt-4 flex items-center gap-4">

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              EDUCATION
            </h1>

            <span className="hidden h-px w-24 bg-cyan-500/40 sm:block" />

          </div>

          <p className="mt-6 max-w-2xl leading-7 text-slate-400">
            My education and ongoing development as I work toward a career in
            game programming.
          </p>

        </div>


        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-800 sm:block" />


          {/* Education Entry */}
          <div className="relative grid gap-8 sm:grid-cols-[120px_1fr]">

            {/* Year */}
            <div className="hidden sm:block">

              <p className="font-mono text-xs text-cyan-400">
                2025
              </p>

              <p className="mt-1 font-mono text-xs text-slate-700">
                START
              </p>

            </div>


            {/* Timeline Marker */}
            <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center border border-cyan-400 bg-slate-950 sm:flex">

              <span className="text-sm">
                🎓
              </span>

            </div>


            {/* Education Card */}
            <div className="border border-slate-800 bg-slate-900 transition duration-300 hover:border-cyan-500/60">

              {/* Card Header */}
              <div className="flex flex-col justify-between gap-5 border-b border-slate-800 p-8 sm:flex-row sm:items-start">

                <div>

                  <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                    CURRENT PROGRAM
                  </p>

                  <h2 className="mt-3 text-3xl font-black">
                    Game Programming
                  </h2>

                  <p className="mt-2 text-lg text-slate-400">
                    Centennial College
                  </p>

                </div>


                <div className="w-fit border border-green-400/30 px-4 py-2">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-green-400">
                    ● IN PROGRESS
                  </p>

                </div>

              </div>


              {/* Card Content */}
              <div className="p-8">

                <p className="max-w-3xl leading-7 text-slate-400">
                  Currently studying Game Programming with a focus on
                  programming, game development, interactive systems, and
                  creative digital projects.
                </p>


                {/* Program Information */}
                <div className="mt-8 grid gap-px border border-slate-800 bg-slate-800 sm:grid-cols-3">

                  <div className="bg-slate-950 p-5">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                      STARTED
                    </p>

                    <p className="mt-2 font-semibold">
                      2025
                    </p>

                  </div>


                  <div className="bg-slate-950 p-5">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                      EXPECTED END
                    </p>

                    <p className="mt-2 font-semibold text-cyan-400">
                      2028
                    </p>

                  </div>


                  <div className="bg-slate-950 p-5">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                      STATUS
                    </p>

                    <p className="mt-2 font-semibold text-green-400">
                      ACTIVE
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Skills Being Developed */}
        <div className="mt-20">

          <div className="mb-8">

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
              03.1 / SKILL DEVELOPMENT
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Currently Developing
            </h2>

          </div>


          <div className="grid gap-px border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">

            {/* Programming */}
            <div className="bg-slate-950 p-7 transition hover:bg-slate-900">

              <p className="font-mono text-xs text-slate-600">
                SKILL_01
              </p>

              <h3 className="mt-6 text-lg font-bold">
                Programming
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Building stronger programming and problem-solving skills
                through coursework and projects.
              </p>

            </div>


            {/* Game Development */}
            <div className="bg-slate-950 p-7 transition hover:bg-slate-900">

              <p className="font-mono text-xs text-slate-600">
                SKILL_02
              </p>

              <h3 className="mt-6 text-lg font-bold">
                Game Development
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Learning how gameplay systems, mechanics, and interactive
                experiences are created.
              </p>

            </div>


            {/* 3D */}
            <div className="bg-slate-950 p-7 transition hover:bg-slate-900">

              <p className="font-mono text-xs text-slate-600">
                SKILL_03
              </p>

              <h3 className="mt-6 text-lg font-bold">
                3D Development
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Developing skills in 3D modelling, assets, environments, and
                interactive content.
              </p>

            </div>


            {/* Web */}
            <div className="bg-slate-950 p-7 transition hover:bg-slate-900">

              <p className="font-mono text-xs text-slate-600">
                SKILL_04
              </p>

              <h3 className="mt-6 text-lg font-bold">
                Web Development
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Building responsive websites and learning modern web
                development technologies.
              </p>

            </div>

          </div>

        </div>


        {/* Future Goal */}
        <div className="mt-20 border border-slate-800 bg-slate-900">

          <div className="flex flex-col justify-between gap-8 p-8 lg:flex-row lg:items-center lg:p-10">

            <div>

              <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                NEXT OBJECTIVE
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Keep Building.
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                Continue expanding my technical and creative skills through
                coursework, personal projects, and hands-on development.
              </p>

            </div>


            <div className="border border-cyan-500/20 px-6 py-5">

              <p className="font-mono text-xs text-slate-600">
                TARGET
              </p>

              <p className="mt-2 font-mono text-sm text-cyan-400">
                2028 / GRADUATION
              </p>

            </div>

          </div>

        </div>


        {/* Footer */}
        <div className="mt-16 border-t border-slate-800 pt-8">

          <p className="font-mono text-xs text-slate-600">
            DEVELOPMENT_LOG // EDUCATION_MODULE_COMPLETE
          </p>

        </div>

      </section>

    </main>
  )
}

export default Education