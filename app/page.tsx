"use client"

// import { Metadata } from "next";
import bg from "./assets/imgs/bg.jpg";
import img from "./assets/imgs/bg2.jpg";
import map_img from "./assets/imgs/map.png";
import { ArrowRight, AwardIcon, Brain, BriefcaseBusiness, Building2, ChartBarBigIcon, ClipboardCheckIcon, Clock1Icon, Handshake, Lightbulb, MessageCircle, Ruler, ServerCogIcon, SlidersVerticalIcon, Wrench } from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/react";
import WorldMap from "@/components/WorldMap";
import Slider from "@/components/Slider";
// import Slider from "@/components/Slider";

// export const metadata: Metadata = {
//     title: 'Home | Samablue',
//     description: "Generated by create next app",
//   };

//   const callsToAction = [
//     {
//       id:1,
//       name: "Regarder la vidéo Demo",
//       href: "https://youtu.be/bOGalrPUDAY",
//       icon: PlayCircleIcon,
//     },
//     {
//       id:2,
//       name: "Contacter le service commercial",
//       href: "tel:+212703112627",
//       icon: PhoneCallIcon,
//     },
//     {
//       id:3,
//       name: "Contacter le service commercial",
//       href: "mailto:commercial@samablue.ma",
//       icon: Mailbox,
//     },
//   ];

export default function Home() {
  return (
    <div>
      <div className="relative bg-blue-950 md:h-[80vh]">
          <div className="absolute z-10">
            <h1 className="text-[36px] tracking-tight font-extrabold text-white md:text-[70px] pt-[40px] md:pt-40 text-center " style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.3)" }}>
                La solution 360° pour le stockage de votre céréale
            </h1>

            <p
              className="mt-3 text-base text-white px-[10px] md:px-[300px] py-3 md:mt-5 md:text-[26px] text-center leading-6 md:leading-8" style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.3)" }}>
              SAMABLUE possède une vaste expérience internationale dans la gestion
              de grands projets avec un portefeuille complet pour la manutention,
              le stockage et la transformation du grain. Toujours fidèle à notre
              proposition de valeur.
            </p>

            <div className="mt-5 sm:mt-8 flex justify-center items-start	gap-5">
              <Button color="secondary" variant="ghost" size="lg" className=" text-xl transition duration-500 ease-in-out transform hover:scale-105" endContent={<ArrowRight/>}>
                Découvrez notre gamme de produits
              </Button>
            
            </div>
          </div>

          <div className="lg:absolute h-[70vh] w-full overflow-hidden opacity-70">
            <Image
              className="movement-img h-[100vh] w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
              src={bg}
              alt="Silos"
            />
          </div>
        </div>

        {/* <div className="bg-[#318CE7] h-40 w-40 right-[-8px] cursor-pointer top-3/4  z-50 fixed border-y-3 border-l-3 border-[#fff] rounded-s-full flex flex-col justify-center items-center hover:-translate-x-2 duration-500 ease-in-out">
              <MessageCircle className="text-white h-8 w-8 "/>
              <h4 className="text-white font-bold flex justify-center items-center text-center" >Contacter-nous sur WhatsApp</h4>
          </div> */}

          <div className="bg-[#318CE7]  h-36 relative top-[-100px] flex justify-start items-center">
              <h4 className="text-white  font-medium text-3xl max-w-[70%] p-6 ml-20" >{`SAMABLUE, plus de 50 ans d'expertise dans la conception de silos en acier galvanisé, alliant qualité, durabilité et performance.`}</h4>
          </div>        
        <section className="text-gray-600 body-font">
          <div className="container px-5 pb-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center ">
              <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 text-[#318CE7]">
              Pourquoi Samablue ?
              </h1>
              {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-lg">
                <span className="text-[#318CE7] font-semibold	">SAMA</span>
                <span className="text-[#E8BD5E] font-semibold	">BLUE </span>
                possède une vaste expérience internationale dans la gestion de
                grands projets avec un portefeuille complet pour la manutention.
              </p> */}
              <hr className="my-4 mx-auto w-32 h-1 bg-blue-200 rounded border-0 md:my-2 " />
            </div>

            <div>
            </div>

            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <Lightbulb/>

                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">
                    {`Concepts intelligents d'installations sur mesure au profit du
                    client`}
                  </h2>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <Wrench/>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">
                    Ingénierie de base et fine interne, y compris la conception
                    statique des structures en acier
                  </h2>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                    <Handshake/>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">
                    Conception industrielle du processus de fabrication
                  </h2>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                   <Ruler/>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">
                    {`Une attention particulière pour l'efficacité de fonctionnement
                    et l'économie d'énergie`}
                  </h2>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg  flex flex-col justify-center items-center">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                    <Brain/>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">
                    Ingénieries allemande et espagnol, fabriquée en Europe
                  </h2>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                    <Building2/>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center ">
                    Entreprise familiale, hiérarchie courte, décisions rapides,
                    engagement fort
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <section className="bg-gray-100 py-10">
          {/* <div className="py-8 h-28 bg- flex flex-col justify-center items-center ">
            <h1 className="text-[#318CE7]  font-bold text-4xl  p-7 ">Solutions Complètes pour le Stockage</h1>
            <div>
                  <div className="mt-2">
                    <span className="inline-block w-40 h-1 rounded-full bg-[#318CE7]"></span>
                    <span className="inline-block w-3 h-1 ml-1 rounded-full bg-[#318CE7]"></span>
                    <span className="inline-block w-1 h-1 ml-1 rounded-full bg-[#318CE7]"></span>
                  </div>
                </div>
          </div> */}
          <div className="container pl-6 py-10 mx-auto">
            <div className="lg:flex lg:items-center">
              <div className="w-full space-y-12 lg:w-1/2 ">
                

                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
                    <SlidersVerticalIcon/>
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
                      INSTALLATION
                    </h1>

                    <p className="mt-3 text-gray-500 ">
                    {`  Les silos SAMABLUE sont conçus de manière modulaire, ce qui
                      facilite grandement leur assemblage. Grâce à la qualité des
                      matériaux utilisés pour leur fabrication et à une équipe de
                      professionnels très expérimentés, SAMABLUE conçoit, produit
                      et installe des solutions sur mesure partout dans le monde.
                      Ce sont des structures très résistantes dans tous les types
                      d'environnements, garantissant la conservation de tous les
                      types de céréales pendant de longues périodes.`}
                    </p>
                  </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
                    <AwardIcon/>
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
                      PRODUCTION
                    </h1>

                    <p className="mt-3 text-gray-500 ">
                      {`Nos silos sont produits avec une technologie de pointe et
                      nous n'hésitons pas à opter pour une qualité supérieure dans
                      le choix des matières premières. Les aciers que nous
                      utilisons comme base correspondent à la qualité S-350GD +
                      Z600, offrant une plus grande résistance à la corrosion, et
                      peuvent même être fournis peints, selon la demande du
                      client. Les silos en tôle galvanisée sont aujourd'hui la
                      meilleure alternative pour le stockage des céréales grâce à
                      leur polyvalence, leur facilité de montage, leur
                      manipulation hygiénique et leur faible coût de stockage.`}
                    </p>
                  </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                  <ClipboardCheckIcon />
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
                      CONCEPTION
                    </h1>

                    <p className="mt-3 text-gray-500 ">
                      {`Notre service de conception dispose d'une équipe
                      d'ingénieurs spécialisés, qui travaillent au cas par cas et
                      aux côtés du client, lui prêtent un service strictement
                      personnalisé et supervisent le développement du projet à
                      tout moment, de sa création à son exécution et à son
                      installation. Toutes les structures conçues par notre équipe
                      sont calculées selon les normes américaines ASAE/ANSI ou
                      européennes Eurocodes et pour supporter le stress d'une
                      utilisation continue, les températures extrêmes, les chutes
                      de neige et les vents violents ainsi que les charges
                      sismiques.`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-end ">
                <Image
                  className="w-[28rem] h-[28rem] object-cover xl:w-[38rem] xl:h-[44rem] rounded-3xl relative right-[-50px] "
                  src={img}
                  alt="example"
                />
              </div>
            </div>

            <hr className="border-gray-200 my-12 " />

            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              
            </div>
          </div>
        </section>
        
        {/* <div className="bg-[#2E4659] ">
          <WorldMap />
        </div> */}
        <section className="w-full flex flex-col justify-center items-center">
          <Slider />
        </section>
        
        <section>
          <div className="bg-gray-100 ">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block ">EXPANSION GLOBALE DE</span>
                <span className="block text-[#318CE7]">SAMABLUE</span>
                <div className="mt-2">
                  <span className="inline-block w-40 h-1 rounded-full bg-[#318CE7]"></span>
                  <span className="inline-block w-20 h-1 ml-1 rounded-full bg-[#318CE7]"></span>
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-[#318CE7]"></span>
                </div>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 relative">
                <Image src={map_img} alt="map" className=""/>
                <div className="w-3 h-3 bg-[#318CE7] absolute top-[70px] left-[150px] md:top-[120px] md:left-[250px] rounded-full border-2 border-white hover:border-blue-900" />
                <div className="w-16 h-5 bg-[#318CE7] absolute top-[45px] left-[125px] md:top-[95px] md:left-[225px] rounded border-2 border-white text-white text-xs flex justify-center">
                  Afrique
                </div>
              </div>


            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                {`Statistiques de l'année 2022`}
              </h1>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center">
                  <BriefcaseBusiness className="text-[#318CE7] h-14 w-14 pb-1"/>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    50
                  </h2>
                  <p className="leading-relaxed">TRAVAILLEURS</p>
                </div>
              </div>
              <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-[#318CE7] w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    4.215K
                  </h2>
                  <p className="leading-relaxed">CLIENTS SATISFAITS</p>
                </div>
              </div>
              <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg ">
                  <div className="flex justify-center">
                    <Clock1Icon className="text-[#318CE7] h-14 w-14 pb-1" />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    51 ANS
                  </h2>
                  <p className="leading-relaxed">{`DES ANNÉES D'EXPÉRIENCE`}</p>
                </div>
              </div>
              <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-[#318CE7] w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    45
                  </h2>
                  <p className="leading-relaxed">PAYS</p>
                </div>
              </div>
              <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg ">
                  <div className="flex justify-center">
                    <ChartBarBigIcon className="text-[#318CE7] h-14 w-14 pb-1" />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    10.2K
                  </h2>
                  <p className="leading-relaxed">{`TONNES D'ACIER`}</p>
                </div>
              </div>
              <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg ">
                  <div className="flex justify-center">
                    <ServerCogIcon className="text-[#318CE7] h-14 w-14 pb-1" />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    480
                  </h2>
                  <p className="leading-relaxed">INSTALLATIONS</p>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </div>
  );
}
