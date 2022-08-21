import Menu from "./ui/Menu";

const Footer = () => {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 text-center md:text-left md:text-center">
        <section>
          <nav className="grid gap-y-4">
            <h6 className="text-lg text-primary-brand-color">
              Getir'i indirin!
            </h6>
            <div className="flex flex-col items-center gap-y-3 ">
              <a href="http://localhost:3000">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="footer"
                />
              </a>
              <a href="http://localhost:3000">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="footer"
                />
              </a>
              <a href="http://localhost:3000">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="footer"
                />
              </a>
            </div>
          </nav>
        </section>
        {menus.map((menu, index) => (
          <Menu key={index} {...menu} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
