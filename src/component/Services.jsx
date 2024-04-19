import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  const listItems = [
    [
      "Maintenance Service",
      "Factory scheduled service",
      "Oil & fluid service",
      "Check engine light diagnostics",
    ],

    [
      "Computer diagnostics",
      "Air conditioning systems ",
      "Electrical systems",
      "Brake systems",
      "Suspension & steering",
    ],
    [
      "Engine performance diagnostics",
      "Engine repair & replacement",
      "Fuel System & Injection",
      "Ignition System",
      "Belt & hose",
    ],
    [
      "Transmission services",
      "Driveline maintenance",
      "Axle replacement",
      "Clutch maintenance",
    ],
    [
      "Tyre change",
      "Tyre repair",
      "Alignment & Balancing",
      "Tyre sip and trim",
    ],
    [
      "Paint spraying",
      "Anti-corrosion work",
      "Scratch repair",
      "Bumper repair",
      "Accident damage",
    ],
  ];
  const services = [
    {
      title: "Service & Maintenance",

      content:
        "At JOOMBOW Car Care & Repair, we offer exclusive maintenance services tailored to keep your vehicle running smoothly. Our comprehensive options include maintenance service, factory scheduled service, oil & fluid service, and check engine light diagnostics. With our dedicated team and state-of-the-art equipment, you can trust us to deliver the best care for your vehicle, ensuring it performs at its peak.",
      imageUrl:
        "https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.webp?b=1&s=170667a&w=0&k=20&c=oDNgnbBqr6dQ01ZwhbLF5NA3gJRS2ISvrcnKpCSFirs=",
    },
    {
      title: "General Maintenance",

      content:
        "Our expert team at JOOMBOW Car Care & Repair specializes in providing comprehensive general maintenance services to ensure your vehicle's optimal performance. From computer diagnostics and air conditioning systems to electrical systems, brake systems, and suspension & steering, we've got you covered. Trust us to keep your vehicle in top condition with our meticulous attention to detail and commitment to quality service.",
      imageUrl:
        "https://media.istockphoto.com/id/1157179147/photo/checking-oil-in-car-engine.webp?b=1&s=170667a&w=0&k=20&c=zy6pdwK_hpfdedHHMwyAXjGZqKWYhM0by27d5Bf2JAA=",
    },
    {
      title: "Engine Maintenance",

      content:
        "At JOOMBOW Car Care & Repair, we are dedicated to keeping your engine running smoothly. Our engine maintenance services include engine performance diagnostics, engine repair & replacement, fuel system & injection services, ignition system maintenance, and belt & hose inspections. With our experienced technicians and advanced diagnostic tools, you can trust us to ensure the longevity and efficiency of your vehicle's engine.",
      imageUrl:
        "https://media.istockphoto.com/id/1165311626/photo/mechanic-using-a-ratchet-wrench.webp?b=1&s=170667a&w=0&k=20&c=MUSHOeiWp3U06Jir7MJDtTRF5GpRSjPFzkgU8QNhp4w=",
    },
    {
      title: "Transmission Maintenance",

      content:
        "At JOOMBOW Car Care & Repair, we specialize in comprehensive transmission maintenance services. Our offerings include transmission services, driveline maintenance, axle replacement, and clutch maintenance. Trust our expert technicians to keep your transmission system in optimal condition, ensuring smooth gear shifts and efficient power delivery for your vehicle.",
      imageUrl:
        "https://res.cloudinary.com/dnldaz7oh/image/upload/v1713270016/mechanic-repairing-engine-part-with-ratchet-repair-garage_1_jjsgdh.jpg",
    },
    {
      title: "Tyre Maintenance",

      content:
        "At JOOMBOW Car Care & Repair, we provide top-notch tyre maintenance services to keep your vehicle rolling smoothly. Our services include tyre change, tyre repair, alignment & balancing, and tyre sip and trim. Whether you need a quick tyre fix or a complete alignment, our skilled technicians are equipped to handle all your tyre maintenance needs with precision and care.",
      imageUrl:
        "https://res.cloudinary.com/dnldaz7oh/image/upload/v1713270574/nitrogen-air_w0buji.jpg",
    },
    {
      title: "Body Work & Spraying ",

      content:
        "At JOOMBOW Car Care & Repair, we've got you covered with our top-notch body work and spraying services. Whether its paint spraying, anti-corrosion work, scratch or bumper repair, or even accident damage restoration, our skilled team ensures your car looks fantastic. With our attention to detail and advanced equipment, we'll have your vehicle looking brand new in no time. Trust us to bring out the best in your car's appearance and keep it protected against wear and tear!",
      imageUrl:
        "https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/pexels-khunkorn-laowisit-5233258_onjgmd.jpg",
    },
  ];

  const renderServices = () => {
    return services.map((service, index) => (
      <figure
        key={index}
        className="relative transition-all duration-300   transform hover:scale-105 object-contain">
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-80 rounded-[5px]"></div> */}

        {/* Image */}

        {/* Text */}
        <div className="mx-2 md:mx-4 lg:mx-6 border border-gray-800 h-auto">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-[250px] object-cover rounded-[5px]"
          />
          <div className="  fle items-center p-3 justify-center shadow-lg">
            {/* w-[450px] h-[250px] border-red-500 */}
            <h2 className="md:text-[35px] text-[23px] pt-2 text-white font-clash font-bold text-cente">
              {service.title}
            </h2>

            <ul style={{ listStyleType: "square" }} className="p-4">
              {listItems[index].map((item, idx) => {
                
                return (
                  <li
                    className="text-[18px] text-gray-400 font-clash leading-7 font-normal"
                    key={idx}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <p className="text-[18px] text-gray-400 font-clash leading-7 font-normal">
              {service.content}
            </p>
          </div>
        </div>
      </figure>
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          pauseOnHover: false,
        },
      },
    ],
  };

  return (
    <div>
      <main id="services" className="bg-black px-4 py-16">
        <h1 className="font-bold bb font-clash text-[#FD1014] text-[45px] text-center py-8">
          Our Services
        </h1>
        <Slider {...settings}>{renderServices()}</Slider>
      </main>
    </div>
  );
}

export default Services;
