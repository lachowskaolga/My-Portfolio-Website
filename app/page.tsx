import Navbar from "@/components/navbar";
import MainCard from "@/components/maincard";
import Main from "@/components/main";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <MainCard />
      <Main />
      <Footer />
    </div>
  );
}
