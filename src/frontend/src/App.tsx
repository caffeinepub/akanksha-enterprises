import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <>
      <HomePage />
      <Toaster />
    </>
  );
}

export default App;
