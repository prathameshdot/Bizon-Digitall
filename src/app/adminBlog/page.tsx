import { cookies } from "next/headers";
import BlogAdmin from "@/components/Blog/Admin/BlogAdmin";
import { verifyToken } from "../../../lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token || !(await verifyToken(token))) {
    return redirect("/signin");
  }

  return (
    <div className="p-8">
      <BlogAdmin />
    </div>
  );
}
