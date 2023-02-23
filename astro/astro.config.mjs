import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'ae5h6au0',
    dataset: 'development',
    // apiVersion: "v2021-03-25",
    useCdn: true,
  })]
});