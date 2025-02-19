import Navbar from "@/components/navbar";
import MainCard from "@/components/maincard";
import Main from "@/components/main";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <MainCard />
      <Main />
    </div>
  );
}
