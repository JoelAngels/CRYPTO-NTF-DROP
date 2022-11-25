//Helper File
import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

//The config that connects us to sanity

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

/*
    Set up a helper function for generating Image Url with only the asset reference data in your documents.
    Read more: sanity.io/docs/image-url
*/

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
