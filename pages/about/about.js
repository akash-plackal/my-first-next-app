import Image from "next/image";

const about = () => {
  return (
    <div>
      <h1>this page navigatest to about page</h1>
      <Image src="/tux.png" alt="tux" height={100} width={100} />
    </div>
  );
};

export default about;
