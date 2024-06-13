export const dynamic = 'force-dynamic'

import { cookies } from "next/headers";
import { TabBar } from "@/components";

export const metadata = {
  title: 'Cookies Page',
  description: 'Cookies Page',
};

export default function CookiesPage() {
  const cookie = cookies()
  const currentTab = cookie.get('selectedTab')?.value ?? '1'
  console.log(currentTab);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl mb-2">Tabs</span>
        <TabBar currentTab={Number(currentTab)} />
      </div>
    </div>
  );
}