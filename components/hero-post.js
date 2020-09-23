import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16 flex justify-center">
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-1 md:col-gap-16 lg:col-gap-8 mb-30 md:mb-28 text-center">
        <div>
          <h3 className="mb-4 text-3xl lg:text-5xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a
                className="text-accent-2 font-Title font-bold hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
          <div className="font-Text mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="font-Text text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </section>
  )
}
