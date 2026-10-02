import type { UIStrings } from "../types";

export default {
  nav: {
    home: "ホーム",
    posts: "記事",
    tags: "タグ",
    about: "このブログについて",
    archives: "アーカイブ",
    search: "検索",
  },
  post: {
    publishedAt: "公開日",
    updatedAt: "更新日",
    sharePostIntro: "この記事をシェア:",
    sharePostOn: "{{platform}}でこの記事をシェア",
    sharePostViaEmail: "メールでこの記事をシェア",
    tagLabel: "タグ",
    backToTop: "ページの先頭へ戻る",
    goBack: "戻る",
    editPage: "ページを編集",
    previousPost: "前の記事",
    nextPost: "次の記事",
  },
  pagination: {
    prev: "前へ",
    next: "次へ",
    page: "ページ",
  },
  home: {
    socialLinks: "ソーシャルリンク",
    featured: "注目の記事",
    recentPosts: "最近の記事",
    allPosts: "すべての記事",
  },
  footer: {
    copyright: "著作権",
    allRightsReserved: "無断転載を禁じます。",
  },
  pages: {
    tagTitle: "タグ",
    tagDesc: "このタグが付いた記事",

    tagsTitle: "タグ一覧",
    tagsDesc: "記事で使われているタグ一覧です。",

    postsTitle: "記事一覧",
    postsDesc: "これまでに公開した記事です。",

    archivesTitle: "アーカイブ",
    archivesDesc: "アーカイブされた記事です。",

    searchTitle: "検索",
    searchDesc: "記事を検索できます。",
  },
  a11y: {
    skipToContent: "本文へ移動",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    toggleTheme: "テーマを切り替える",
    searchPlaceholder: "記事を検索...",
    noResults: "検索結果がありません",
    goToPreviousPage: "前のページへ",
    goToNextPage: "次のページへ",
  },
  notFound: {
    title: "404 ページが見つかりません",
    message: "ページが見つかりませんでした。",
    goHome: "ホームへ戻る",
  },
} satisfies UIStrings;