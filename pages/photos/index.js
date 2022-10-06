import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pixabay.com/api/?key=30398713-7b8ce5b10cc95dd5af3d9c166&q=indoors&image_type=photo&pretty=true"
  );

  const data = await res.json();

  return {
    props: {
      images: data,
    },
  };
};

const index = ({ images }) => {
  return (
    <div>
      <h1>All Photos ...</h1>

      <div>
        {images.hits.map((image) => {
          return (
            <Link
              href={`/photos/[id]`}
              as={`/photos/${image.id}`}
              key={image.id}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.largeImageURL}
                width={342}
                height={324}
                alt="pixabay"
                key={image.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default index;
