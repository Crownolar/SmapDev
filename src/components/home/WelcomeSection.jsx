import Button from '../common/Button'
import SectionHeading from '../common/SectionHeading'

const WelcomeSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">

          <SectionHeading
            eyebrow="Welcome to SMAPDEV"
            title="Research, collaboration and sustainable innovation."
          />

          <div className="max-w-3xl">

            <p className="text-lg leading-8 text-smap-muted">
              Welcome to the Sustainable Material and Process Development
              Research Network.
            </p>

            <p className="mt-5 leading-7 text-smap-muted sm:leading-8">
              This is a space for researchers, thinkers, and doers working
              together to shape a more sustainable world. The focus is on
              developing materials and processes that are both innovative
              and responsible, guided by a genuine commitment to social
              equity and environmental care.
            </p>

            <p className="mt-5 leading-7 text-smap-muted sm:leading-8">
              As the demand for sustainable solutions grows, the work here
              is focused on creating real change. People from different
              backgrounds and disciplines come together, all driven by a
              shared goal: to design a future where the materials used and
              the way they are made work in harmony with the planet.
            </p>

            <p className="mt-5 leading-7 text-smap-muted sm:leading-8">
              This work is grounded in collaboration, curiosity, and impact.
              There is a constant drive to ask what is possible and what is
              next, whether that means drawing inspiration from nature,
              advancing scientific discovery, or rethinking how things are
              made.
            </p>

            <p className="mt-5 leading-7 text-smap-muted sm:leading-8">
              This is more than a research group. It is a place where ideas
              come to life, where people connect across fields and sectors,
              and where passion meets purpose. The belief is that the best
              solutions come from working together.
            </p>

            <div className="mt-7 border-l-2 border-smap-green pl-4 sm:mt-8 sm:pl-5">
              <p className="font-semibold text-smap-ink">
                Prof. Adewale George Adeniyi
              </p>

              <p className="mt-1 text-sm text-smap-muted">
                Principal Investigator, SMAPDEV Research Network
              </p>
            </div>

            <div className="mt-7 sm:mt-8">
              <Button to="/about">
                Discover SMAPDEV
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default WelcomeSection