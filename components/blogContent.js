// Full article bodies + FAQ mirrored from fivenodes.ai/blog, split into
// batch files to keep each manageable. Merged here by slug.
import { PART as PART1 } from "./blog-content/part1";
import { PART as PART2 } from "./blog-content/part2";
import { PART as PART3 } from "./blog-content/part3";
import { PART as PART4 } from "./blog-content/part4";
import { PART as PART5 } from "./blog-content/part5";
import { PART as PART6 } from "./blog-content/part6";

export const BLOG_CONTENT = {
  ...PART1,
  ...PART2,
  ...PART3,
  ...PART4,
  ...PART5,
  ...PART6,
};

export function getBlogContent(slug) {
  return BLOG_CONTENT[slug] || null;
}
