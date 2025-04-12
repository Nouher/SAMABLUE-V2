import Image from "next/image";
import img1 from "../public/assets/imgs/news/img_04102022.jpg";
import img2 from "../public/assets/imgs/news/img_07102022.jpg";
import img3 from "../public/assets/imgs/news/img_25102022.jpg";

const newsArticles = [
  {
    id: 1,
    title: "SIMEZA -SAMABLUE sera présent à la 32e édition de la conférence et exposition IAOM Moyen-Orient et Afrique",
    description: "SIMEZA-SAMABLUE sera présent à la 32e édition de la conférence et exposition IAOM Moyen-Orient et Afrique, qui se tiendra du 25 au 28 octobre à Zanzibar, en Tanzanie.",
    image: img1,
    date: "12 Mars 2025",
  },
  {
    id: 2,
    title: "SAMABLUE à participe, à l'événement de Intercéréales France (aux Rencontres Franco-Marocaines de Céréales 2022)",
    description: "Lors de la 25ème édition de cette rencontre annuelle",
    image: img2,
    date: "5 Mars 2025",
  },
  {
    id: 3,
    title: "SIMEZA PARTICIPERA À LA 3ÈME ÉDITION DE BERRECHID (MAROC)",
    description: "SIMEZA participera en tant que co-exposant, avec SAMABLUE (son partenaire dans la région nord-africaine)",
    image: img3,
    date: "28 Février 2025",
  },
  {
    id: 4,
    title: "Partenariats Stratégiques",
    description: "Nous collaborons avec des leaders du secteur pour améliorer nos services et offrir des solutions optimisées.",
    image: img1,
    date: "28 Février 2025",
  },
  {
    id: 5,
    title: "Partenariats Stratégiques",
    description: "Nous collaborons avec des leaders du secteur pour améliorer nos services et offrir des solutions optimisées.",
    image: img1,
    date: "28 Février 2025",
  },
  {
    id: 5,
    title: "Partenariats Stratégiques",
    description: "Nous collaborons avec des leaders du secteur pour améliorer nos services et offrir des solutions optimisées.",
    image: img1,
    date: "28 Février 2025",
  },
  {
    id: 5,
    title: "Partenariats Stratégiques",
    description: "Nous collaborons avec des leaders du secteur pour améliorer nos services et offrir des solutions optimisées.",
    image: img1,
    date: "28 Février 2025",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-yellow-50/30 py-10">
      <div className="max-w-full mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 [&_div:nth-child(1)]:col-span-2">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg---white rounded-2xl overflow-hidden transition-shadow duration-300 h-[600px] flex flex-col justify-start"
            >
              <div className="relative w-full min-h-96">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl object-center"
                />
              </div>
              <div className="py-5">
                <h2 className="text-xl font-semibold text-gray-900 truncate">{article.title}</h2>
                <p className="text-sm rounded-md text-yellow-900 mb-5">{article.date}</p>
                <p className="text-gray-700">{article.description}</p>
                <button className="mt-4 bg-yellow-800 font text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition duration-300">
                  Lire plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}