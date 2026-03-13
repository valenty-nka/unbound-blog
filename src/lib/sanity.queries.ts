export const homePostsQuery = `
*[_type == "post" && defined(slug.current)]
| order(publishedAt desc)[0...6]{
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "category": categories[0]->title
}
`;


export const featuredPostsQuery = `
*[_type == "post" && featured == true && defined(slug.current)]
| order(publishedAt desc)[0...3]{
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "category": categories[0]->title
}
`;

export const latestPostsQuery = `
*[_type == "post" && defined(slug.current) && coalesce(featured, false) == false]
| order(publishedAt desc)[0...3]{
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "category": categories[0]->title
}
`;

export const allPostsQuery = `
*[_type == "post" && defined(slug.current)]
| order(publishedAt desc){
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "category": categories[0]->title,
  body
}
`;


export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  body,
  "category": categories[0]->title
}
`;


export const allCategoriesQuery = `
*[_type == "category"] | order(title asc) {
  title
}
`;


export const postBySlugWithRelatedQuery = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  body,
  "category": categories[0]->title,
  "categoryId": categories[0]->_id,

  "related": *[
    _type == "post"
    && defined(slug.current)
    && slug.current != $slug
    && references(^.categoryId)
  ]
  | order(publishedAt desc)[0..2]{
    title,
    "slug": slug.current,
    publishedAt
  }
}
`;

export const postQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    excerpt,
    "slug": slug.current,
    publishedAt,
    mainImage,
    body
  }
`;