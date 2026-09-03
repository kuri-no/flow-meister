# flow-meister

Basic認証
ユーザー名 ：flowmeister
パスワード ：nextsample
ページ数　 ：6P

- フロントをNext.js 16（App Router）+TypeScriptで実装。
- お知らせ機能はWordPressをREST API連携のヘッドレス CMS として利用し、記事・カテゴリー・アイキャッチを型安全に取得しています。
- お問い合わせはSSGForm、ホスティングは Vercel。
- ページごとに要件を分けてレンダリング方式を選定（静的ページはSSG、CMS 連携ページはSSR）。
- UI と構造でディレクトリを分け、propsを型定義した再利用前提のコンポーネント設計を意識しました。

## 主な技術スタック

- Next.js 16（App Router）
- React 19
- TypeScript
- CSS Modules
- WordPress REST API（`wp-types`）

## セットアップ

```bash
npm install
```

プロジェクトルートに `.env` を作成し、以下の環境変数を設定してください。

| 変数名 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | サイトの公開 URL（`metadataBase` / OGP の基準 URL） |
| `NEXT_PUBLIC_SSG_FORM` | お問い合わせフォームの送信先エンドポイント（未設定時はフォームを無効表示） |
| `WORDPRESS_POSTS_URL` | WordPress REST API の投稿エンドポイント |
| `WORDPRESS_CATEGORIES_URL` | WordPress REST API のカテゴリーエンドポイント |
| `BASIC_AUTH_USER` | Basic 認証のユーザー名（任意。未設定なら認証なし） |
| `BASIC_AUTH_PASSWORD` | Basic 認証のパスワード（任意。未設定なら認証なし） |

WordPress のメディア配信ホストは `next.config.mjs` の `images.remotePatterns` に登録が必要です（現在は `https://kurino096.shop`）。

## 開発サーバー起動

```bash
npm run dev
```

`http://localhost:3000` で開発サーバーが起動します。

## ビルド

```bash
npm run build
npm run start
```

`build` で本番ビルドを生成し、`start` で本番サーバーを起動します。デプロイ先は Vercel を想定しています。

## ディレクトリ構成

```
├── next.config.mjs         ... Next.js設定（trailingSlash、画像リモートパターン等）
├── src/
│   ├── app/                ... App Router
│   │   ├── (home)/          ... トップページと構成セクション（_components）
│   │   ├── news/            ... お知らせ一覧・詳細・ページング・カテゴリー
│   │   ├── contact/         ... お問い合わせ（thanks: 送信完了）
│   │   ├── layout.tsx       ... 共通レイアウト・メタデータ
│   │   ├── error.tsx / not-found.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/          ... Header, Footer, CtaSection, Form, Sidebar 等
│   │   └── ui/              ... Button, Heading, Input, NewsCard 等の汎用UI
│   ├── lib/
│   │   ├── wordpress.ts     ... WordPress REST APIクライアント
│   │   └── metadata.ts      ... OGP・サイト名の共通定義
│   ├── types/              ... 型定義（WordPress関連）
│   ├── utils/              ... 日付・文字列ユーティリティ
│   └── middleware.ts       ... Basic認証（環境変数が設定されている場合のみ有効）
└── public/                ... 画像・SVG等の静的ファイル
```

## スクリプト

- `npm run dev` ... 開発サーバー起動（`next dev`）
- `npm run build` ... 本番ビルド（`next build`）
- `npm run start` ... 本番サーバー起動（`next start`）
- `npm run lint` ... ESLint 実行

## 開発時の注意

- Lint は `eslint-config-next`（core-web-vitals）、フォーマットは Prettier を使用します。
- `.vscode/settings.json` により保存時に Prettier 整形と ESLint 自動修正が走ります。
- お知らせ機能は WordPress REST API に依存するため、`WORDPRESS_POSTS_URL` / `WORDPRESS_CATEGORIES_URL` 未設定ではニュース系ページが正しく表示されません。

## API連携

- APIアクセスは関数群に集約し、ページコンポーネントからデータ取得の実装を切り離しました。
（getPosts / getPost / getCategoryPosts / getCategoryFromId / getTotalPages など、責務ごとに分割）
- ?_embedを付けてアイキャッチ画像・カテゴリーを一度のリクエストで取得。
- ページネーションはレスポンスヘッダX-WP-TotalPagesを読んでページ数を算出。
- レスポンスはwp-typesで型付け（WP_REST_API_Posts`等）し、埋め込みデータは必要な部分だけ自前の型（FeaturedMedia / Term）に絞って安全に扱う設計。

## レンダリング

- トップページはSSRでお知らせセクションで投稿を動的取得しています。
- お知らせ一覧 / 詳細ページはSSRで動的取得です。fetchを非キャッシュにしており、CMSの記事追加・修正が即座に反映されます。
- お問い合わせ / 送信完了 / 404ページはSSGでビルド静的生成。

## その他

- SSGFormはバックエンド・DB・メール基盤を自前で持つ必要性がないので、静的ホスティング構成と相性が良いと感じました。