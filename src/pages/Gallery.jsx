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

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Explore"
            title="Research, people and moments."
            description="Browse the gallery by category."
          />

          {/* Filters */}
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
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
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-smap-surface text-left"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-smap-green">
                    {item.category}
                  </p>

                  <h2 className="mt-2 text-base font-semibold text-smap-ink">
                    {item.title}
                  </h2>
                </div>
              </button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black/80"
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />

            <div className="mt-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-smap-green-light">
                {selectedImage.category}
              </p>

              <h2 className="mt-2 text-lg font-semibold text-white">
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