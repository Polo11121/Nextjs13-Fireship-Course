import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await getAuthSession();

  if (!session) {
    redirect("api/auth/signin");
  }

  return <main></main>;
};

export default Home;
