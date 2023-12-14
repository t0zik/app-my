export type SiteConfig = typeof siteConfig
export const siteConfig = {
  name: "Batumi",
  description: "Hotel booking site",
  projects :  [
    {
      id: 1,
      name: 'Lemon Garden Residence & SPA',
      href: '../components/projects/lemon-garden',
      imageSrc: '/../public/images/main_page/our_projects/garden.jpg',
      imageAlt: "Lemon Garden",
      text: 'Premium apartments near the cleanest beach in Georgia'
    },
    {
      id: 2,
      name: 'Batumi Garden Inn',
      href: '../components/projects/batumi-garden',
      imageSrc: '/../public/images/main_page/our_projects/garden.jpg',
      imageAlt: "Batumin garden",
      text: 'Premium class apartments in an ecologically clean district of Batumi'
    },
    {
      id: 3,
      name: 'Grand Botanico Residence',
      href: '../components/projects/grand-botanico',
      imageSrc: '/../public/images/main_page/our_projects/botanical.jpg',
      imageAlt: "Grand Botanico Residence",
      text: 'A unique residential complex of apartments and townhouses in the ecological suburb of Batumi'
    },
    // {
    //   id: 4,
    //   name: 'Luxury Villas',
    //   href: '../components/projects/luxury-villas',
    //   imageSrc: '/../public/images/main_page/our_projects/lemon.jpg',
    //   imageAlt: "Luxury Villas",
    //   text: 'A unique residential complex of apartments and townhouses in the ecological suburb of Batumi'
    // },
    {
      id: 4,
      name: 'Royal Residence Botanico',
      href: '../components/projects/royal-residence',
      imageSrc: '/../public/images/main_page/our_projects/lemon.jpg',
      imageAlt: "Royal Residence Botanico",
      text: 'A unique residential complex of apartments and townhouses in the ecological suburb of Batumi'
    },
  ],
}