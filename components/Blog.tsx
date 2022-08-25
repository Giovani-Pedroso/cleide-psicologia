import Link from 'next/link'
import Card from './CardArtigos'
import articles from '../data/articles'


export default function Hero() {

  return (
    <section className="font-raleway mt-[60px] px-[10px] md:px-[60px] font-semibold">
      <h1 className="text-[48px] font-[600] text-primary mb-6">Blog</h1>
      <div className="flex flex-col md:flex-row justify-between mb-[30px]">
        {
          articles.map((article: any) => {
            return (
              <Card title={article.titulo}
	      key={article.titulo}
	      content={article.content} />
            )
          })
        }
      </div>
      <Link href="#">
        <a className=" border-2 p-2  border-primary font-[600]  text-primary cursor-pointer" target="_blank">
          Ver todos os artigos
        </a>
      </Link>
    </section>
  )
}
