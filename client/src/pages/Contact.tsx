import type { FormEvent } from "react"
import { useNavigate } from "react-router-dom"

function Contact() {
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // The form does not send data anywhere yet.
    // After submission, return the visitor to the Home page.
    navigate("/")
  }

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
            05 / COMMUNICATION
          </p>

          <div className="mt-4 flex items-center gap-4">

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              CONTACT
            </h1>

            <span className="hidden h-px w-24 bg-cyan-500/40 sm:block" />

          </div>

          <p className="mt-6 max-w-2xl leading-7 text-slate-400">
            Have a question, project idea, or simply want to get in touch?
            Send a message using the communication interface below.
          </p>

        </div>


        {/* Contact Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">


          {/* Contact Information */}
          <div className="relative">

            <div className="absolute -inset-3 border border-cyan-500/10" />

            <div className="relative border border-slate-800 bg-slate-900">

              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">

                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  contact_info
                </span>

                <span className="font-mono text-[10px] text-green-400">
                  ● ONLINE
                </span>

              </div>


              <div className="p-8">

                <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                  AVAILABLE_CHANNELS
                </p>


                {/* Email */}
                <div className="mt-8 border-b border-slate-800 pb-6">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    EMAIL
                  </p>

                  <p className="mt-3 break-all text-sm font-medium text-slate-300">
                    michael.kendrick@example.com
                  </p>

                </div>


                {/* Phone */}
                <div className="border-b border-slate-800 py-6">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    PHONE
                  </p>

                  <p className="mt-3 text-sm font-medium text-slate-300">
                    (416) 555-0123
                  </p>

                </div>


                {/* Program */}
                <div className="border-b border-slate-800 py-6">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    PROGRAM
                  </p>

                  <p className="mt-3 text-sm font-medium text-slate-300">
                    Game Programming
                  </p>

                </div>


                {/* Location / School */}
                <div className="pt-6">

                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    INSTITUTION
                  </p>

                  <p className="mt-3 text-sm font-medium text-slate-300">
                    Centennial College
                  </p>

                </div>


                {/* Status */}
                <div className="mt-10 border border-green-400/20 bg-green-400/5 p-4">

                  <p className="font-mono text-xs text-green-400">
                    ● COMMUNICATION CHANNEL READY
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="border border-slate-800 bg-slate-900">

            {/* Form Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">

              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                new_message.exe
              </span>

              <div className="flex gap-2">

                <span className="h-2.5 w-2.5 bg-red-400" />
                <span className="h-2.5 w-2.5 bg-yellow-400" />
                <span className="h-2.5 w-2.5 bg-green-400" />

              </div>

            </div>


            <div className="p-8 lg:p-10">

              <div className="mb-8">

                <p className="font-mono text-xs text-cyan-400">
                  &gt; INITIALIZE_MESSAGE
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Send a Message
                </h2>

              </div>


              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Names */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="firstName"
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-500"
                    >
                      First Name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Michael"
                      className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="lastName"
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-500"
                    >
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Kendrick"
                      className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400"
                    />

                  </div>

                </div>


                {/* Contact Number */}
                <div>

                  <label
                    htmlFor="contactNumber"
                    className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-500"
                  >
                    Contact Number
                  </label>

                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    required
                    placeholder="(416) 555-0123"
                    className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400"
                  />

                </div>


                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-500"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="yourname@example.com"
                    className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400"
                  />

                </div>


                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-500"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    placeholder="Write your message here..."
                    className="w-full resize-none border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400"
                  />

                </div>


                {/* Submit */}
                <div className="flex flex-col justify-between gap-5 border-t border-slate-800 pt-6 sm:flex-row sm:items-center">

                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
                    FORM_STATUS: READY
                  </p>

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-3 bg-cyan-400 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-950 transition duration-300 hover:bg-cyan-300"
                  >

                    Send Message

                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>

                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>


        {/* Bottom Terminal */}
        <div className="mt-12 border border-slate-800 bg-slate-950 p-5">

          <p className="font-mono text-xs text-slate-600">
            $ communication.status
          </p>

          <p className="mt-2 font-mono text-xs text-green-400">
            &gt; CHANNEL READY — AWAITING INPUT
          </p>

        </div>


        {/* Footer */}
        <div className="mt-16 border-t border-slate-800 pt-8">

          <p className="font-mono text-xs text-slate-600">
            COMMUNICATION_MODULE // STATUS: ACTIVE
          </p>

        </div>

      </section>

    </main>
  )
}

export default Contact