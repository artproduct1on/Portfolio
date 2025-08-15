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
      "id": "logisticss",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg/250px-Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
    }
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
