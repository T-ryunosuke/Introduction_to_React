import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";

// 共通のデータ取得関数
async function fetchArticleData(id) {
  const response = await fetch(`${ENDPOINT}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch article with id: ${id}`);
  }
  return response.json();
}

async function fetchAllArticles() {
  const response = await fetch(ENDPOINT);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
}

// メタデータの生成
export async function generateMetadata({ params }) {
  const article = await fetchArticleData(params.id);
  return {
    title: article.title,
    description: article.title,
  };
}

// 詳細ページのコンポーネント
export default async function Detail({ params }) {
  const article = await fetchArticleData(params.id);
  return (
    <>
      <Article data={article} />
    </>
  );
}

// 静的パスの生成
export async function generateStaticParams() {
  const data = await fetchAllArticles();
  return data.map((record) => ({
    id: record.id.toString(), // IDを文字列に変換
  }));
}

// export async function generateMetadata({ params }) {
//   const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
//     res.json()
//   );
//   return {
//     title: article.title,
//     description: article.title
//   };
// }

// export default async function Detail({ params }) {
//   const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
//     res.json()
//   );
//   return (
//     <>
//       <Article data={article} />
//     </>
//   );
// }

// export async function generateStaticParams() {
//   const data = await fetch(ENDPOINT).then(res => res.json());
//   return (
//     data.map(record => {
//       return (
//         {id: record.id}
//       );
//     })
//   );
// }
