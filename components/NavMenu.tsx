import { Link } from "@heroui/react";


const MenuList=[
    {
        id:1,
        label: "Silos à fond plat",
        url: "/storages",
        desc: "Les silos à fond plat SAMABLUE en acier ondulé sont conçus pour des applications agricoles"
    },
    {
        id:2,
        label: "Silos à fond conique",
        url: "/storages",
        desc: "Les silos à fond conique SAMABLUE en acier ondulé sont conçus pour des applications agricoles"
    },
    {
        id:3,
        label: "Stockage Intérieur",
        url: "/storages",
        desc: "SAMABLUE reste votre partenaire en cas de stockage intérieur"
    },
    {
        id:4,
        label: "Silos de Ferme",
        url: "/storages",
        desc: "Les silos de ferme SAMABLUE en acier ondulé ou lisse sont conçus pour le stockage idéal des aliments pour animaux dans les élevages de bétail"
    },
    {
        id:5,
        label: "Accessiores",
        url: "/storages",
        desc: "Le choix logique pour le stockage de marchandises en vrac est le silo"
    },
    {
        id:6,
        label: "Réservoirs",
        url: "/storages",
        desc: "Les réservoirs SAMABLUE sont utilisés pour le stockage de liquides"
    },
  
]


export default function NavMenu() {

    return(
        <div className="mt-3 max-w-80 px-6 py-4 gap-4 grid grid-cols-1">
            {MenuList.map((item) => (
                <Link key={item.id} href={`${item.url}/${item.id}`} className="grid grid-row-2  hover:text-blue-500">
                    <a className="font-medium text-sky-800 uppercase">{item.label}</a>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                </Link>
            ))}
        </div>
    )
}