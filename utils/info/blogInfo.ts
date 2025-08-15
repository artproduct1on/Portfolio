interface IArticlePreview {
  title: string;
  description: string;
}

export const listArticlesPreview = (list: IArticlePreview[]) => ([
  {
    ...list[0],
    id: "industries",
    img: "https://vynmsa.com/wp-content/uploads/2024/11/Tipos-de-industrias.jpg",
  },
  {
    ...list[1],
    id: "business-digitalization",
    img: "https://consentia.com/wp-content/uploads/2023/10/Digitalization-services-Consentia.jpg",
  },
  {
    ...list[2],
    id: "statement-of-work",
    img: "https://cdn-dilge.nitrocdn.com/CEoyLRJrMZkvcZHgfQFGOitFXuUyzTkm/assets/images/optimized/rev-4164500/projectmanagement.ie/wp-content/uploads/2022/03/importance-of-statement-work.jpg",
  }
]);


export const listArticles = {
  "industries": [
    {
      "id": "logistics",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "e-commerce",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "healthcare",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "e-grocery",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "education",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "renewable-energy",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "tourism-and-hospitality",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "information-technology",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "fintech",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "biotechnology",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "cybersecurity",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
    {
      "id": "space-industry",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    },
  ],
  "business-digitalization": [
    {
      "id": "personal-solution",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    }
  ],
  "statement-of-work": [
    {
      "id": "how-to-create",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    }
  ]
};
