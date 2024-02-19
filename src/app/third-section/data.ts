interface BoardData {
  title: string;
  content: string;
  img: string;
  name: string;
  alt: string;
}

export const boardData: BoardData[] = [
  {
    content:
      "מנכ״ל של מיזם MindGuard לטיפול בנפגעי נפש ו PTSD. במשך שנתיים עבד בעבודות בטחוניות במדינות רבות בעולם",
    img: "/aviv_hazan.jpg",
    name: "אביב חזן",
    title: 'יו"ר העמותה',
    alt: "אביב חזן",
  },
  {
    content: "איש עסקים ושותף בקרן הון סיכון",
    img: "/roy_saar.jpg",
    name: "רועי סער",
    title: "חבר ועד מנהל",
    alt: "רועי סער",
  },
  {
    content: "איש עסקים ושותף בקרן הון סיכון",
    img: "/gal_asulin.jpg",
    name: "גיל אסולין",
    title: "חבר ועד מנהל",
    alt: "גיל אסולין",
  },
];
