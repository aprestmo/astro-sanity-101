import { useSanityClient, groq } from "astro-sanity";

export async function getFirstBlogPost() {
  const query = groq`*[_type == "article"] | order(publishedAt desc)`;
  const firstPost = await useSanityClient().fetch(query);
  return firstPost;
}

export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}

export async function getArticles() {
  const query = groq`*[_type == "article"] | order(publishedAt desc)`;
  const articles = await useSanityClient().fetch(query);
  return articles;
}