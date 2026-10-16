function Services() {
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
            04 / CAPABILITIES
          </p>

          <div className="mt-4 flex items-center gap-4">

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              SERVICES
            </h1>

            <span className="hidden h-px w-24 bg-cyan-500/40 sm:block" />

          </div>

          <p className="mt-6 max-w-2xl leading-7 text-slate-400">
            Areas of development and technical skills that I am currently
            building through school, projects, and hands-on experience.
          </p>

        </div>


        {/* Capability Modules */}
        <div className="grid gap-px border border-slate-800 bg-slate-800 lg:grid-cols-2">


          {/* Game Programming */}
          <div className="group bg-slate-950 p-8 transition duration-300 hover:bg-slate-900 lg:p-10">

            <div className="flex items-start justify-between">

              <span className="font-mono text-xs text-slate-600">
                MODULE_01
              </span>

              <span className="font-mono text-xs text-cyan-400">
                ACTIVE
              </span>

            </div>


            <div className="mt-10 flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center border border-cyan-500/30 bg-cyan-500/5 text-3xl transition group-hover:border-cyan-400">
                🎮
              </div>

              <div>

                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  CORE
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Game Programming
                </h2>

              </div>

            </div>


            <p className="mt-7 max-w-lg leading-7 text-slate-500">
              Developing gameplay systems, player controls, mechanics, and
              interactive features for game projects.
            </p>


            <div className="mt-8 flex flex-wrap gap-2">

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                GAMEPLAY
              </span>

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                MECHANICS
              </span>

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                C#
              </span>

            </div>

          </div>


          {/* Game Development */}
          <div className="group bg-slate-950 p-8 transition duration-300 hover:bg-slate-900 lg:p-10">

            <div className="flex items-start justify-between">

              <span className="font-mono text-xs text-slate-600">
                MODULE_02
              </span>

              <span className="font-mono text-xs text-cyan-400">
                ACTIVE
              </span>

            </div>


            <div className="mt-10 flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center border border-cyan-500/30 bg-cyan-500/5 text-3xl transition group-hover:border-cyan-400">
                🕹️
              </div>

              <div>

                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  CORE
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Game Development
                </h2>

              </div>

            </div>


            <p className="mt-7 max-w-lg leading-7 text-slate-500">
              Combining programming, game design, visual assets, and gameplay
              ideas to create complete interactive projects.
            </p>


            <div className="mt-8 flex flex-wrap gap-2">

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                DESIGN
              </span>

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                DEVELOPMENT
              </span>

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                UNITY
              </span>

            </div>

          </div>


          {/* 3D Asset Creation */}
          <div className="group bg-slate-950 p-8 transition duration-300 hover:bg-slate-900 lg:p-10">

            <div className="flex items-start justify-between">

              <span className="font-mono text-xs text-slate-600">
                MODULE_03
              </span>

              <span className="font-mono text-xs text-cyan-400">
                ACTIVE
              </span>

            </div>


            <div className="mt-10 flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center border border-cyan-500/30 bg-cyan-500/5 text-3xl transition group-hover:border-cyan-400">
                🎨
              </div>

              <div>

                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  CREATIVE
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  3D Asset Creation
                </h2>

              </div>

            </div>


            <p className="mt-7 max-w-lg leading-7 text-slate-500">
              Creating and preparing 3D models, environments, and visual
              elements for interactive projects.
            </p>


            <div className="mt-8 flex flex-wrap gap-2">

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                BLENDER
              </span>

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                MODELLING
              </span>

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                ASSETS
              </span>

            </div>

          </div>


          {/* Web Development */}
          <div className="group bg-slate-950 p-8 transition duration-300 hover:bg-slate-900 lg:p-10">

            <div className="flex items-start justify-between">

              <span className="font-mono text-xs text-slate-600">
                MODULE_04
              </span>

              <span className="font-mono text-xs text-cyan-400">
                ACTIVE
              </span>

            </div>


            <div className="mt-10 flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center border border-cyan-500/30 bg-cyan-500/5 font-mono text-xl font-bold text-cyan-400 transition group-hover:border-cyan-400">
                &lt;/&gt;
              </div>

              <div>

                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  DEVELOPMENT
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Web Development
                </h2>

              </div>

            </div>


            <p className="mt-7 max-w-lg leading-7 text-slate-500">
              Creating responsive websites and interactive web applications
              using modern development tools and frameworks.
            </p>


            <div className="mt-8 flex flex-wrap gap-2">

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                REACT
              </span>

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                TYPESCRIPT
              </span>

              <span className="border border-slate-800 px-3 py-1 font-mono text-[10px] text-slate-500">
                TAILWIND
              </span>

            </div>

          </div>

        </div>


        {/* Skill Development Notice */}
        <div className="mt-12 border border-slate-800 bg-slate-900">

          <div className="flex flex-col justify-between gap-6 p-8 sm:flex-row sm:items-center">

            <div>

              <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                DEVELOPMENT STATUS
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Skills are continuously evolving.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                These capabilities represent areas I am actively learning and
                developing through coursework and personal projects.
              </p>

            </div>


            <div className="border border-green-400/20 px-5 py-4">

              <p className="font-mono text-xs text-green-400">
                ● LEARNING_MODE
              </p>

            </div>

          </div>

        </div>


        {/* Footer */}
        <div className="mt-16 border-t border-slate-800 pt-8">

          <p className="font-mono text-xs text-slate-600">
            CAPABILITIES_MODULE // STATUS: ACTIVE
          </p>

        </div>

      </section>

    </main>
  )
}

export default Services