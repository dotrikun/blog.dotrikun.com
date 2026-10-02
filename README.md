# 変化の触媒のたれ

Hiroshi Shikata（@dotrikun）の個人ブログです。プロダクト開発や技術、キャリアについて考えたことを記録しています。

このサイトはAstroとAstroPaperをベースに構築しています。

## 開発

Node.js 22.12.0以上とpnpmが必要です。

```sh
pnpm install
pnpm dev
```

静的サイトをビルドしてローカルで確認するには、次を実行します。

```sh
pnpm build
pnpm preview
```

ビルド成果物は`dist/`に出力されます。

## 記事の管理

- 記事は`src/content/posts/`にMarkdownまたはMDXで追加します。
- 自己紹介は`src/content/pages/about.md`で編集します。
- サイト名、説明、著者名、公開URLなどは`astro-paper.config.ts`で設定します。
- `draft: true`の記事は公開されません。公開する記事では`draft`を`false`にするか、項目を削除してください。

記事には少なくとも`title`、`pubDatetime`、`description`を設定します。

```yaml
---
title: "記事のタイトル"
pubDatetime: 2026-10-02T09:00:00Z
description: "記事の概要"
tags:
  - 技術
---
```

## GitHub Pages

GitHub ActionsのCIはlint・書式確認・ビルドを実行しますが、このリポジトリにはPagesへの自動デプロイworkflowはありません。GitHub Pagesの公開設定に応じて、`pnpm build`で生成した`dist/`の成果物を公開してください。公開URLを変更した場合は、`astro-paper.config.ts`の`site.url`も合わせて更新します。

## ライセンス

ライセンスの詳細は[LICENSE](LICENSE)を参照してください。
