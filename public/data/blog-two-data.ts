import one from "@/public/images/blog/one.png";
import two from "@/public/images/blog/two.png";
import three from "@/public/images/blog/three.png";
import avatarFive from "@/public/images/avatar/five.png";
import avatarSix from "@/public/images/avatar/six.png";
import avatarSeven from "@/public/images/avatar/seven.png";

export interface BlogCard {
  id: number;
  image: any; // Next/Image static import
  avatar: any; // Next/Image static import
  author: string;
  title: string;
  comments: number;
  date: string; // UI label (e.g., "14 June")
  dateISO: string; // sortable (YYYY-MM-DD)
  href: string; // absolute route
}

const BlogTwoData: BlogCard[] = [
  {
    id: 0,
    image: one,
    avatar: avatarFive,
    author: "Ronald Richards",
    title: "How Blockchain is Transforming Gaming",
    comments: 24,
    date: "14 June",
    dateISO: "2025-06-14",
    href: "/blog/how-blockchain-is-transforming-gaming",
  },
  {
    id: 1,
    image: two,
    avatar: avatarSix,
    author: "Marvin McKinney",
    title: "High-Stakes Jackpot Draws Near, Are You Ready?",
    comments: 74,
    date: "14 June",
    dateISO: "2025-06-14",
    href: "/blog/high-stakes-jackpot-draws-near",
  },
  {
    id: 2,
    image: three,
    avatar: avatarSeven,
    author: "Ronald Richards",
    title: "Record-Breaking Lottery Payouts Hit the Nation!",
    comments: 7,
    date: "27 June",
    dateISO: "2025-06-27",
    href: "/blog/record-breaking-lottery-payouts",
  },
  // duplicates for slider length (kept intentionally)
  {
    id: 3,
    image: one,
    avatar: avatarFive,
    author: "Ronald Richards",
    title: "How Blockchain is Transforming Gaming",
    comments: 24,
    date: "14 June",
    dateISO: "2025-06-14",
    href: "/blog/how-blockchain-is-transforming-gaming",
  },
  {
    id: 4,
    image: two,
    avatar: avatarSix,
    author: "Marvin McKinney",
    title: "High-Stakes Jackpot Draws Near, Are You Ready?",
    comments: 74,
    date: "14 June",
    dateISO: "2025-06-14",
    href: "/blog/high-stakes-jackpot-draws-near",
  },
  {
    id: 5,
    image: three,
    avatar: avatarSeven,
    author: "Ronald Richards",
    title: "Record-Breaking Lottery Payouts Hit the Nation!",
    comments: 7,
    date: "27 June",
    dateISO: "2025-06-27",
    href: "/blog/record-breaking-lottery-payouts",
  },
];

export default BlogTwoData;
