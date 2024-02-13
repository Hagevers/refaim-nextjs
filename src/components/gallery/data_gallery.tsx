import Image from "next/image";

interface Gallery {
  id: number;
  title: string;
  description: string;
  image: JSX.Element;
  alt: string;
}

export const data_gallery: Gallery[] = [
  {
    id: 1,
    title: "Image 1",
    description: "This is the first image",
    alt: "Image 1",
    image: (
      <Image src="/gallery/1.jfif" alt="Image 1" width={300} height={300} />
    ),
  },
  {
    id: 2,
    title: "Image 2",
    description: "This is the second image",
    alt: "Image 2",
    image: (
      <Image src="/gallery/2.jfif" alt="Image 2" width={300} height={300} />
    ),
  },
  {
    id: 3,
    title: "Image 3",
    description: "This is the third image",
    alt: "Image 3",
    image: (
      <Image src="/gallery/3.jfif" alt="Image 3" width={300} height={300} />
    ),
  },
  {
    id: 4,
    title: "Image 4",
    description: "This is the fourth image",
    alt: "Image 4",
    image: (
      <Image src="/gallery/4.jfif" alt="Image 4" width={300} height={300} />
    ),
  },
  {
    id: 5,
    title: "Image 5",
    description: "This is the fifth image",
    alt: "Image 5",
    image: (
      <Image src="/gallery/5.jfif" alt="Image 5" width={300} height={300} />
    ),
  },
  {
    id: 6,
    title: "Image 6",
    description: "This is the sixth image",
    alt: "Image 6",
    image: (
      <Image src="/gallery/6.jfif" alt="Image 6" width={300} height={300} />
    ),
  },
  {
    id: 7,
    title: "Image 7",
    description: "This is the seventh image",
    alt: "Image 7",
    image: (
      <Image src="/gallery/7.jfif" alt="Image 7" width={300} height={300} />
    ),
  },
];
