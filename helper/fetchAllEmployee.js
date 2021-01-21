import Contentstack from "contentstack";

//initialize the SDK
const Stack = Contentstack.Stack(
  process.env.API_KEY,
  process.env.DELIVERY_TOKEN,
  process.env.ENVIRONMENT,
  process.env.REGION
);

export const getBlogByParams = (obj = {}) => {
  const Query = Stack.ContentType("aachal_blog").Query();
  if (obj.id) {
    return Query.toJSON()
      .where("uid", obj.id)
      .includeReference(["related_links"])
      .find();
  } else {
    return Query.toJSON().includeReference(["related_links"]).find();
  }
};
