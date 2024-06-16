'use server';

import { redirect } from 'next/navigation';
import FAQs from './home/FAQ/faq';
import Info from './home/info/info';
import Title from './home/title';

export default async function IndexPage() {
  redirect('/blog');
  // return (
  //   <div className="mt-c3 flex flex-col">
  //     <Title />
  //     <Info />
  //     <FAQs />
  //   </div>
  // );
}
