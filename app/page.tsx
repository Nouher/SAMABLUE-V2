'use client';
// import { Metadata } from "next";
import bg from "../public/assets/imgs/bg.jpg";
import img from "../public/img2.jpg";
import map_img from "../public/assets/worldmap.png";
import { ArrowRight, AwardIcon, Brain, BriefcaseBusiness, Building2, ChartBarBigIcon, ClipboardCheckIcon, EarthIcon, Handshake, Lightbulb, Ruler, SlidersVerticalIcon, TimerIcon, UsersIcon, Wrench } from "lucide-react";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import Slider from "@/components/Slider";
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
      <div className="relative bg-blue-950 md:h-[80vh] ">
          <div className="absolute z-10">
            <h1 className="text-[36px] tracking-tight font-extrabold text-blue-50 md:text-[70px] pt-[40px] md:pt-40 text-center " style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.3)" }}>
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
              placeholder="blur"
              loading="lazy"
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


        <section className="text-gray-600 body-font h-[80vh] flex flex-col justify-start items-center pt-8 ">
          <div className="container px-5  mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center ">
              <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 text-[#318CE7]">
              Pourquoi Samablue ?
              </h1>
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

        

        <section className="bg-gray-100 py-8">
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
                  alt=""
                   loading="lazy"
                />
              </div>
            </div>


            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              
            </div>
          </div>
        </section>

        
        <section className="w-screen flex flex-col justify-center items-center py-12 mt-10 h-[80vh]">
        <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 text-[#318CE7]">
              Our Products
              </h1>
              <hr className="my-4 mx-auto w-32 h-1 bg-blue-200 rounded border-0 md:my-2 " />
          <Slider />
        </section>
        
        <div className="bg-gray-50 h-screen">
            <section className=" mt-10 h-[700px] flex flex-col items-center justify-start">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center py-8">
                  <span className="block my-5 text-[#318CE7]"> Expansion Globale de SAMABLUE</span>
                  <span className="block text-gray-500 text-lg py-4 max-w-3xl font-medium">{`SAMABLUE étend son expertise à l’international avec des solutions innovantes pour la manutention et le stockage du grain. Nous accompagnons nos clients à chaque étape de leurs grands projets.`}</span>
                  <div className="mt-1">
                    <span className="inline-block w-40 h-1 rounded-full bg-[#318CE7]"></span>
                    <span className="inline-block w-20 h-1 ml-1 rounded-full bg-[#318CE7]"></span>
                    <span className="inline-block w-1 h-1 ml-1 rounded-full bg-[#318CE7]"></span>
                  </div>
                </h2>
                <div className="mt-6 flex lg:mt-0 lg:flex-shrink-0 relative flex-grow">
                  <div className="opacity-60">
                    <Image src={map_img} alt="map" className="opacity-100"  loading="lazy" height={1200} width={1200} />
                  </div>
                  <div className="w-4 h-4 bg-[#318CE7] absolute top-[70px] left-[150px] md:top-[280px] md:left-[620px] rounded-full border-3 border-blue-500 animate-ping  opacity-80" />
                  <div className="w-4 h-4 bg-[#318CE7] absolute top-[70px] left-[150px] md:top-[280px] md:left-[620px] rounded-full border-3 " />
                  <div className=" w-16 h-5 absolute top-[45px] left-[125px] md:top-[250px] md:left-[594px] text-xs flex justify-center">
                    <Chip variant="shadow" size="md" className="bg-[#318CE7] text-white border-2 border-white shadow-sm">
                      Afrique
                    </Chip>
                  </div>
                </div>
            </section>

          <section className="text-gray-600 body-font relative top-[-40px]">
            <div className="pb-24">
              <div className="flex flex-wrap text-center justify-between items-center w-full ">
                <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                  <div className="px-4 py-6 rounded-lg flex flex-col items-center">
                    <div className="h-10 w-10 relative my-6">
                      <div className="h-8 w-8 border-4 rounded-sm border-blue-100 absolute top-0 left-0"/>
                      <BriefcaseBusiness className="text-[#318CE7] h-12 w-12 pb-1 absolute top-3 left-1"/>
                    </div>
                    <h2 className="title-font font-bold text-6xl text-gray-900">
                      +50
                    </h2>
                    <hr className=" w-16 h-1 bg-[#318CE7] rounded border-0 my-2" />
                    <p className="leading-relaxed">TRAVAILLEURS</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                  <div className="px-4 py-6 rounded-lg flex flex-col items-center">
                    <div className="h-10 w-10 relative my-6">
                      <div className="h-8 w-8 border-4 rounded-sm border-blue-100 absolute top-0 left-0"/>
                      <UsersIcon className="text-[#318CE7] h-12 w-12 pb-1 absolute top-3 left-1"/>
                    </div>
                    <h2 className="title-font font-bold text-6xl text-gray-900">
                      +4,215K
                    </h2>
                    <hr className=" w-16 h-1 bg-[#318CE7] rounded border-0 my-2" />
                    <p className="leading-relaxed">CLIENTS SATISFAITS</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                  <div className="px-4 py-6 rounded-lg flex flex-col items-center">
                    <div className="h-10 w-10 relative my-6">
                      <div className="h-8 w-8 border-4 rounded-sm border-blue-100 absolute top-0 left-0"/>
                      <TimerIcon className="text-[#318CE7] h-12 w-12 pb-1 absolute top-3 left-1"/>
                    </div>
                    <h2 className="title-font font-bold text-6xl text-gray-900">
                      +51Ans
                    </h2>
                    <hr className=" w-16 h-1 bg-[#318CE7] rounded border-0 my-2" />
                    <p className="leading-relaxed">{`DES ANNÉES D'EXPÉRIENCE`}</p>
                  </div>
                </div>

                <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                  <div className="px-4 py-6 rounded-lg flex flex-col items-center">
                    <div className="h-10 w-10 relative my-6">
                      <div className="h-8 w-8 border-4 rounded-sm border-blue-100 absolute top-0 left-0"/>
                      <EarthIcon className="text-[#318CE7] h-12 w-12 pb-1 absolute top-3 left-1"/>
                    </div>
                    <h2 className="title-font font-bold text-6xl text-gray-900">
                      +45
                    </h2>
                    <hr className=" w-16 h-1 bg-[#318CE7] rounded border-0 my-2" />
                    <p className="leading-relaxed">PAYS</p>
                  </div>
                </div>

                <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                  <div className="px-4 py-6 rounded-lg flex flex-col items-center">
                    <div className="h-10 w-10 relative my-6">
                      <div className="h-8 w-8 border-4 rounded-sm border-blue-100 absolute top-0 left-0"/>
                      <ChartBarBigIcon className="text-[#318CE7] h-12 w-12 pb-1 absolute top-3 left-1"/>
                    </div>
                    <h2 className="title-font font-bold text-6xl text-gray-900">
                      +10,2K
                    </h2>
                    <hr className=" w-16 h-1 bg-[#318CE7] rounded border-0 my-2" />
                    <p className="leading-relaxed">{`TONNES D'ACIER`}</p>
                  </div>
                </div>

                <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
                  <div className="px-4 py-6 rounded-lg flex flex-col items-center">
                    <div className="h-10 w-10 relative my-6">
                      <div className="h-8 w-8 border-4 rounded-sm border-blue-100 absolute top-0 left-0"/>
                      <ChartBarBigIcon className="text-[#318CE7] h-12 w-12 absolute top-3 left-1"/>
                    </div>
                    <h2 className="title-font font-bold text-6xl text-gray-900">
                      +480
                    </h2>
                    <hr className=" w-16 h-1 bg-[#318CE7] rounded border-0 my-2" />
                    <p className="leading-relaxed">INSTALLATIONS</p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>



        <section className="bg-white h-screen ">

        </section>


        {/* <section className="bg-gray-50">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>

              <p className="hidden text-gray-500 sm:mt-4 sm:block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis
                repellat in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt
                tempora nisi?
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
              <form action="#" className="sm:flex sm:gap-4">
                <div className="sm:flex-1">
                  <label className="sr-only">Email</label>

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-xs transition focus:border-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
                >
                  <span className="text-sm font-bold "> Sign Up </span>

                  <MoveRight size={20}/>
                </button>
              </form>
            </div>
          </div>
        </section> */}
      </div>
  );
}
