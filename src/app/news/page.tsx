import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import styles from "./News.module.css";
import Link from "next/link";
import NewsCard from "@/components/ui/NewsCard";

export default function News() {
  return (
    <>
      <PageFirstView subText="News" mainText="お知らせ" textAlign="isCenter" />
      <TwoColumn>
        <div className={styles.news}></div>
        <p className={styles.title}>すべての記事</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail1.jpg"
              id={1}
              title='SaaS時代のデータサイエンティスト・佐藤が語る、Flow Meisterが変える“業務共有”の可能性'
              excerpt='「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。'
              date="2025.03.27"
              categories={[{ id: 1, name: "コラム" }]}
            />
          </div>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail2.jpg"
              id={2}
              title='導入後、会議時間30%削減！株式会社エムリンク様インタビュー公開'
              excerpt='「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。'
              date="2025.03.15"
              categories={[
                { id: 2, name: "導入事例" },
                { id: 3, name: "業務改善" },
              ]}
            />
          </div>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail3.jpg"
              id={3}
              title='Japan IT Week【春】に出展決定！'
              excerpt='「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。'
              date="2025.03.10"
              categories={[{ id: 1, name: "コラム" }]}
            />
          </div>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail4.jpg"
              id={4}
              title='属人化を脱却！業務ナレッジ共有で成果を上げた企業様の取り組みを公開しました'
              excerpt='「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。'
              date="2025.03.04"
              categories={[
                { id: 2, name: "導入事例" },
                { id: 3, name: "業務改善" },
              ]}
            />
          </div>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail5.jpg"
              id={5}
              title='新人育成が加速！教育プロセスの共有で“1週間で戦力化”を実現した事例をご紹介'
              excerpt='「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。'
              date="2025.02.23"
              categories={[
                { id: 2, name: "導入事例" },
                { id: 4, name: "人材育成" },
              ]}
            />
          </div>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail6.jpg"
              id={6}
              title='部署間連携で受注率がアップ！営業・サポート間の情報共有成功事例を追加しました'
              excerpt='「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。'
              date="2025.02.20"
              categories={[
                { id: 2, name: "導入事例" },
                { id: 5, name: "営業支援" },
                { id: 3, name: "業務改善" },
              ]}
            />
          </div>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail7.jpg"
              id={7}
              title='社内ドキュメント整備の成功ポイントとは？見せ方を変えた企業様の声を掲載中'
              excerpt='「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。'
              date="2025.02.15"
              categories={[
                { id: 2, name: "導入事例" },
                { id: 3, name: "業務改善" },
              ]}
            />
          </div>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail8.jpg"
              id={8}
              title='拠点が離れていても同じ温度で働ける！多拠点企業の情報共有の工夫とは'
              excerpt='「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。'
              date="2025.02.12"
              categories={[
                { id: 2, name: "導入事例" },
                { id: 3, name: "業務改善" },
              ]}
            />
          </div>
          <div className={styles.card}>
            <NewsCard
              src="/thumbnail9.jpg"
              id={9}
              title='引き継ぎ業務がスムーズに！“属人化リスク”を抑える取り組み事例を公開'
              excerpt='「タスクは登録して終わり、になっていませんか？」そんな問いかけから始まったのは、あるIT企業でデータ活用に取り組む佐藤氏のインタビュー。彼が語るのは、“業務を効率化するツール”ではなく、“流れるような業務共有”の重要性。Flow Meisterは単なるタスク管理ツールではなく、「チームの脳みそ」になりうる──。そんな印象的な言葉とともに、プロダクトの可能性とデータの未来について、じっくりと話を伺いました。'
              date="2025.02.08"
              categories={[
                { id: 2, name: "導入事例" },
                { id: 4, name: "人材育成" },
              ]}
            />
          </div>
        </div>
        <div className={styles.pagenation}>
          <div className={styles.numbers}>
            <Link className={`${styles.number} ${styles.isCurrent}`} href="">
              1
            </Link>
            <Link className={styles.number} href="">
              2
            </Link>
          </div>
        </div>
      </TwoColumn>
    </>
  );
}
