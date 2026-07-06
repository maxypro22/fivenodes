// Arabic blog content mirrored from fivenodes.ai/ar/blog, keyed by the same slug
// as the English posts (images/order are shared via BLOG_POSTS).
import { PART as AR1 } from "./ar-blog-content/part1";
import { PART as AR2 } from "./ar-blog-content/part2";
import { PART as AR3 } from "./ar-blog-content/part3";
import { PART as AR4 } from "./ar-blog-content/part4";

export const AR_BLOG = {
  ...AR1,
  ...AR2,
  ...AR3,
  ...AR4,
};

export function getArBlog(slug) {
  return AR_BLOG[slug] || null;
}
