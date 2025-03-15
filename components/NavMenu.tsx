import { Link } from "@heroui/react";


export default function NavMenu() {


    return(
        <div className="mt-3 w-[40rem]  px-6 py-4 gap-4 grid grid-cols-2">
            <Link href="/Stockage/1" className="grid grid-row-2">
                <a className="text-">Silos à fond plat</a>
                <p className="text-gray-500 text-xs">Les silos à fond plat SAMABLUE en acier ondulé sont conçus pour des applications agricoles</p>
            </Link>
            <Link href="/Stockage/2" className="grid grid-row-2">
                <a className="text-">Silos à fond conique</a>
                <p className="text-gray-500 text-xs">Les silos à fond conique SAMABLUE en acier ondulé sont conçus pour des applications agricoles</p>
            </Link>
            <Link href="/Stockage/3" className="grid grid-row-2">
                <a className="text-">Stockage Intérieur</a>
                <p className="text-gray-500 text-xs">SAMABLUE reste votre partenaire en cas de stockage intérieur</p>
            </Link>
            <Link href="/Stockage/4" className="grid grid-row-2">
                <a className="text-">Silos de Ferme</a>
                <p className="text-gray-500 text-xs">Les silos de ferme SAMABLUE en acier ondulé ou lisse sont conçus pour le stockage idéal des aliments pour animaux dans les élevages de bétail</p>
            </Link>
            <Link href="/Stockage/5" className="grid grid-row-2">
                <a className="text-">Accessiores</a>
                <p className="text-gray-500 text-xs">Le choix logique pour le stockage de marchandises en vrac est le silo</p>
            </Link>
            <Link href="/Stockage/6" className="grid grid-row-2">
                <a className="text-">Réservoirs</a>
                <p className="text-gray-500 text-xs">Les réservoirs SAMABLUE sont utilisés pour le stockage de liquides</p>
            </Link>
        </div>
    )
}