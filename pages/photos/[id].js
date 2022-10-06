import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pixabay.com/api/?key=30398713-7b8ce5b10cc95dd5af3d9c166&q=indoors&image_type=photo&pretty=true"
  );
  const data = await res.json();

  const path = data?.hits.map((img) => {
    return {
      params: {
        id: img.id.toString(),
      },
    };
  });

  return {
    paths: path,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    `https://pixabay.com/api/?key=30398713-7b8ce5b10cc95dd5af3d9c166&q=yellow+flowers&image_type=photo&pretty=true&id=${id}`
  );

  const data = await res.json();

  return {
    props: {
      image: data,
    },
  };
}

const imageFull = ({ image }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.hits[0].largeImageURL}
      alt={image.tag}
      width={500}
      height={500}
    />
  );
};

export default imageFull;
