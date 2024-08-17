import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import OfficeLocationMap from "@layouts/components/OfficeLocationMap";
import OurProducts from "@layouts/components/OurProducts";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action, ourTeam, ourProducts } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[50px]"


      >
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10 pt-42">

              <h1 className="font-primary font-bold  text-7xl text-red-600">
                {" "}
                One<span className="font-sans">08</span> Solutions
              </h1>

              <h3
                style={{
                  color: "gray",
                  marginTop: 10,
                }}
              >
                {banner.headline}
              </h3>
              <p className="mt-4 font-thin">{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"

                  href={banner.button.link}
                  rel={banner.button.rel}

                >
                  {banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />

            </div>
          </div>
        </div>
      </section>


      <OurProducts ourProducts={ourProducts} />
      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel ${!isOdd && "md:order-2"} `}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      service.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}

                    init={service?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {service?.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={slide}
                          alt=""
                          width={600}
                          height={400}
                          style={{ borderRadius: 20 }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${!isOdd && "md:order-1"
                    }`}
                >
                  <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                  <p className="mb-2 mt-4 text-xl font-extralight max-w-lg">{service?.content}</p>
                  {/* {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {service?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )} */}
                </div>
              </div>
            </div>
          </section>
        );
      })}
      {/* Features */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2 >{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl  border-slate-800  shadow-lg duration-300 p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OfficeLocationMap />
      {/* workflow */}
      <section className="section pb-0">
        <div className="mb-8 text-center w-full flex flex-col items-center">
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto  font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "p-3 max-w-screen-lg pb-20")}
        </div>

        <div className="max-w-screen-xl w-full m-auto">
          <div className="w-full flex justify-center py-16">
            <h2>{ourTeam.title}</h2>
          </div>
          <div className="flex gap-2 justify-between  flex-wrap px-4">
            {ourTeam.owners.map((owner, id) => <div key={id} className="hover:scale-110 duration-300">
              <Image
                src={owner.image}
                alt="owner image"
                className="rounded-xl grow w-full h-80  xl:max-w-[400px]"
                width={420}
                height={296}
              />
              <p className="pt-2">{owner.designation}</p>
              <div className="flex items-end gap-3">
                <h3>{owner.name},</h3>
                <span>{owner.location}</span>
              </div>
            </div>)}
          </div>
        </div>
      </section>

      {/* Cta */}
      <Cta cta={call_to_action} />
    </Base >
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
