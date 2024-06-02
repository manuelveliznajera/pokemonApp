
import { CardCounter } from '@/shoping-cart';
  
export const metadata = {
  title: 'Pagina Contador',
  description: 'Pagina Contador',
 };
export default function CounterPage() {

  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      
      <CardCounter />

    </div>
  );
}