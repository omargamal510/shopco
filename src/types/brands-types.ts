// {
//     "results": 54,
//     "metadata": {
//         "currentPage": 1,
//         "numberOfPages": 2,
//         "limit": 40,
//         "nextPage": 2
//     },
//     "data": [
//         {
//             "_id": "64089fe824b25627a25315d1",
//             "name": "Canon",
//             "slug": "canon",
//             "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286824747.png",
//             "createdAt": "2023-03-08T14:47:04.912Z",
//             "updatedAt": "2023-03-08T14:47:04.912Z"
//         },
//     }

// types/brand.ts
export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number | null;
}

export interface BrandResponse {
  results: number;
  metadata: Metadata;
  data: Brand[];
}
