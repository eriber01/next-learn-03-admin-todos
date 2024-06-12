import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
  title: 'Cookies Page',
  description: 'Cookies Page',
};

export default function CookiesPage() {
  const cookie = cookies()
  const currentTab = cookie.get('selectedTab')
  console.log(currentTab?.value);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl mb-2">Tabs</span>
        <TabBar currentTab={Number(currentTab?.value)} />
      </div>
    </div>
  );
}