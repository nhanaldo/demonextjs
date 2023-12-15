import MainLayout from "@/components/Layouts/MainLayout";

const Handel = ({ novel }) => {
  console.log(novel);
  
  return <div>{novel?.novel.title }</div>;
};
export default Handel;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://hobanovel-be.azurewebsites.net/api/novels/search-by-slug/${context.params.Novels}`
  );

  const novel = await res.json();
  return { props: { novel: novel }, revalidate: 60 };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

Handel.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

