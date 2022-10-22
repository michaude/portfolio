import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

/**
 * const getContentfulData = async () => {
 *  try {
 *      const response = await client.getEntries({
 *          ...
 *      })
 *  } catch (error) {
 *      console.log(error)
 *  }
 * }
 */
