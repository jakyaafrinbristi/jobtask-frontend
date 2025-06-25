/* eslint-disable @typescript-eslint/no-explicit-any */

import Footer from "@/components/shared/Footer";



const layout = ({ children }: any) => {
  return (
    <main>
      
      {children}
     <Footer></Footer>
    </main>
  );
};

export default layout;