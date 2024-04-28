import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header/header';
import { DataProvider } from '@/context/product';
import Home from '@/app/page';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/services/queryClient';

// it("Home page should Card component", () => {
//    render(
//       <DataProvider>
//          <QueryClientProvider client={queryClient}>
//             <Home />
//          </QueryClientProvider>
//       </DataProvider>
//    );

//    const cardComponent = screen.getByRole("card");

//    expect(cardComponent).toBeDefined();
// })

it('Header component should', () => {
   render(
      <DataProvider>
         <Header />
      </DataProvider>
   )

   const header = screen.getByText('MKS');

   expect(header).toBeDefined();
})