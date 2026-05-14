import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer2/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

// Converts string `style` attributes (emitted by shiki via rehype-pretty-code)
// into object form so MDX 3's strict JSX parser can serialize them.
function rehypeStyleStringToObject() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (
        node.properties &&
        typeof node.properties.style === "string" &&
        node.properties.style.length > 0
      ) {
        const styleObj = {};
        for (const decl of node.properties.style.split(";")) {
          const idx = decl.indexOf(":");
          if (idx === -1) continue;
          const key = decl.slice(0, idx).trim();
          const value = decl.slice(idx + 1).trim();
          if (!key || !value) continue;
          const propKey = key.startsWith("--")
            ? key
            : key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
          styleObj[propKey] = value;
        }
        node.properties.style = styleObj;
      }
    });
  };
}

/** @type {import('contentlayer2/source-files').ComputedFields} */
const computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true },
    twitter: { type: "string", required: true },
  },
}));

export const Social = defineDocumentType(() => ({
  name: "Social",
  filePathPattern: `socials/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    address: {
      type: "string",
      required: true,
    },
    url: {
      type: "string",
      required: true,
    },
    icon: {
      type: "string",
      required: true,
    },
    iconColor: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
    },
    image: {
      type: "string",
    },
    imageAlt: {
      type: "string",
    },
    imageCaption: {
      type: "string",
    },
    socials: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Social,
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
    imageCaption: {
      type: "string",
    },
    category: {
      type: "string",
      required: true,
    },
    author: {
      type: "nested",
      of: Author,
    },
    tags: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Tags,
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields,
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    url: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    icon: {
      type: "string",
      required: true,
    },
    screenshot: {
      type: "string",
      required: true,
    },
    tags: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Tags,
      type: "list",
      of: { type: "string" },
      required: true,
    },
    features: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Features,
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page, Project, Social],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
      rehypeStyleStringToObject,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
