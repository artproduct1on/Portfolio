interface IArticlePreview {
  title: string;
  description: string;
}

export const listArticlesPreview = (list: IArticlePreview[]) => ([
  {
    ...list[0],
    id: "industries",
    img: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg",
  },
  {
    ...list[1],
    id: "business-digitalization",
    img: "https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg",
  },
  {
    ...list[2],
    id: "statement-of-work",
    img: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
  }
]);


export const listArticles = {
  "industries": [
    {
      id: "logistics",
      img: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
    },
    {
      id: "e-commerce",
      img: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg",
    },
    {
      id: "healthcare",
      img: "https://images.pexels.com/photos/7195310/pexels-photo-7195310.jpeg",
    },
    {
      id: "e-grocery",
      img: "https://images.pexels.com/photos/6613047/pexels-photo-6613047.jpeg",
    },
    {
      id: "education",
      img: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg",
    },
    {
      id: "renewable-energy",
      img: "https://images.pexels.com/photos/414807/pexels-photo-414807.jpeg",
    },
    {
      id: "tourism-and-hospitality",
      img: "https://images.pexels.com/photos/19711059/pexels-photo-19711059.jpeg",
    },
    {
      id: "information-technology",
      img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    },
    {
      id: "fintech",
      img: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    },
    {
      id: "biotechnology",
      img: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg",
    },
    {
      id: "cybersecurity",
      img: "https://images.pexels.com/photos/5380635/pexels-photo-5380635.jpeg",
    },
    {
      id: "space-industry",
      img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    },
  ],
  "business-digitalization": [
    {
      id: "personal-solution",
      img: "https://images.pexels.com/photos/7640745/pexels-photo-7640745.jpeg",
    },
    {
      id: "web-development",
      img: "https://images.pexels.com/photos/5882706/pexels-photo-5882706.jpeg",
    },
    {
      id: "mobile-development",
      img: "https://images.pexels.com/photos/12123390/pexels-photo-12123390.jpeg",
    },
    {
      id: "systems-and-services",
      img: "https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg",
    }
  ],
  "statement-of-work": [
    {
      id: "what-is-a-statement-of-work",
      img: "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg",
    },
    {
      id: "key-elements-of-a-good-sow",
      img: "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg",
    },
    {
      id: "common-mistakes",
      img: "https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg",
    },
    {
      id: "practical-tips",
      img: "https://images.pexels.com/photos/4386368/pexels-photo-4386368.jpeg",
    }
  ]
};
