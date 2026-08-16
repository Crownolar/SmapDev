import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'

const initialForm = {
  name: '',
  email: '',
  organisation: '',
  subject: '',
  message: '',
}

const Contact = () => {
  const formRef = useRef(null)

  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target

    setStatus('idle')

    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )

      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      console.error('EmailJS submission error:', error)
      setStatus('error')
    }
  }

  const isSending = status === 'sending'

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation."
        description="Have a research question, collaboration idea or enquiry? Get in touch with the SMAPDEV team."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            {/* Contact information */}
            <div>
              <SectionHeading
                eyebrow="Get in Touch"
                title="We'd be glad to hear from you."
                description="Reach out to discuss research, collaboration, mentorship or other enquiries."
              />

              <div className="mt-8 space-y-7 sm:mt-10">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-smap-green">
                    Email
                  </p>

                  <a
                    href="mailto:info@smapdev.com"
                    className="mt-2 inline-block break-all text-base font-medium text-smap-ink transition-colors hover:text-smap-green sm:break-normal"
                  >
                    info@smapdev.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-smap-green">
                    Research Network
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-7 text-smap-muted">
                    Sustainable Materials and Process Development Research
                    Network.
                  </p>
                </div>

              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-slate-200 bg-smap-surface p-5 sm:rounded-3xl sm:p-8 lg:p-10">

              {/* Success message */}
              {status === 'success' && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 sm:mb-8"
                >
                  <p className="text-sm font-medium text-green-800">
                    Your message has been sent successfully.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-green-700">
                    Thank you for contacting SMAPDEV. We'll get back to you
                    as soon as possible.
                  </p>
                </div>
              )}

              {/* Error message */}
              {status === 'error' && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 sm:mb-8"
                >
                  <p className="text-sm font-medium text-red-800">
                    We couldn't send your message.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-red-700">
                    Please try again. If the problem continues, you can contact
                    us directly by email.
                  </p>
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6"
              >

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">

                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-smap-ink"
                    >
                      Full name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-smap-ink outline-none transition focus:border-smap-green focus:ring-2 focus:ring-smap-green/10"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-smap-ink"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-smap-ink outline-none transition focus:border-smap-green focus:ring-2 focus:ring-smap-green/10"
                      placeholder="you@example.com"
                    />
                  </div>

                </div>

                {/* Organisation + Subject */}
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">

                  <div>
                    <label
                      htmlFor="organisation"
                      className="text-sm font-medium text-smap-ink"
                    >
                      Organisation
                    </label>

                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      value={form.organisation}
                      onChange={handleChange}
                      className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-smap-ink outline-none transition focus:border-smap-green focus:ring-2 focus:ring-smap-green/10"
                      placeholder="Organisation or institution"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-smap-ink"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-smap-ink outline-none transition focus:border-smap-green focus:ring-2 focus:ring-smap-green/10"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-smap-ink"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 min-h-40 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-smap-ink outline-none transition focus:border-smap-green focus:ring-2 focus:ring-smap-green/10"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-smap-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-smap-green-dark focus:outline-none focus:ring-2 focus:ring-smap-green focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSending ? 'Sending...' : 'Send message'}
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Contact