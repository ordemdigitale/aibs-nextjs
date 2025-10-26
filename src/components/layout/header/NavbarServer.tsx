import Navbar from "./Navbar";
import { getNavigationData } from "@/drizzle/queries"; // Server-side query

export default async function NavbarServer() {
  const navData = await getNavigationData(); // Fetch navigation data on server
  return <Navbar navData={navData} />;
}