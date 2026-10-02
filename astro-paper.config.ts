import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blog.dotrikun.com/",
    title: "変化の触媒のたれ",
    description:
      "渋谷で働くエンジニアの日記です。",
    author: "Hiroshi Shikata",
    ogImage: "og.png",
    lang: "ja",
    timezone: "Asia/Tokyo",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "hatenabookmark",     url: "hatenabookmark://post?url=" },
  ],
});