import { useState } from 'react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import { galleryItems } from '../data/gallery'

const categories = ['All', ...new Set(galleryItems.map((item) => item.category))]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory,
        )

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual look at SMAPDEV."
        description="Explore moments from research, collaboration and activities across the SMAPDEV network."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Explore"
            title="Research, people and moments."
            description="Browse the gallery by category."
          />

          {/* Filters */}
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:mt-10 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {categories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors sm:px-5 ${
                    isActive
                      ? 'bg-smap-green text-white'
                      : 'bg-smap-surface text-smap-ink hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* Gallery grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-smap-surface text-left transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/5 focus:outline-none focus:ring-2 focus:ring-smap-green focus:ring-offset-2"
              >
                {/* Image */}
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-smap-green">
                    {item.category}
                  </p>

                  <h2 className="mt-2 text-sm font-semibold leading-6 text-smap-ink sm:text-base">
                    {item.title}
                  </h2>

                </div>
              </button>
            ))}

          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center sm:mt-10 sm:p-12">
              <p className="text-sm text-smap-muted">
                No images available in this category yet.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-3 sm:p-6 lg:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-1 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black/80 sm:right-3 sm:top-3"
              aria-label="Close image"
            >
              ×
            </button>

            {/* Image */}
            <div className="flex max-h-[78vh] w-full items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[78vh] max-w-full rounded-lg object-contain sm:rounded-xl"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 max-w-2xl px-4 text-center sm:mt-5">

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-smap-green-light">
                {selectedImage.category}
              </p>

              <h2 className="mt-2 text-base font-semibold text-white sm:text-lg">
                {selectedImage.title}
              </h2>

            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Gallery