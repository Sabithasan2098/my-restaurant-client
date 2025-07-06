import Image from "next/image";
import img from "../../public/assets/404.gif";
import CommonBTN from "@/components/shered/commonBTN/CommonBTN";
import Link from "next/link";

// app/not-found.tsx
const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Image src={img} alt="not-found-gif" />
      <Link href={"/"}>
        <CommonBTN btnText="back to Home" />
      </Link>
    </div>
  );
};
export default NotFound;
