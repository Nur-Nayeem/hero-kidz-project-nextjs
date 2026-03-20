import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import { authOptions } from "@/lib/authOptions";
import Test from "@/Test";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="space-y-20">
      clinet: <Test />
      server: <p>{JSON.stringify(session)}</p>
      <section>
        <Banner />
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
}
