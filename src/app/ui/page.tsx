import {Button} from '@/components/ui/button';

function UiPage() {
  return (
    <main className="h-full flex items-center justify-center flex-col space-y-6">
      <Button size="lg">Button Primary (L)</Button>
      <Button size="sm">Button Primary (S)</Button>
      <Button size="lg" variant="secondary">Button Secondary (L)</Button>
      <Button size="sm" variant="secondary">Button Secondary (S)</Button>
    </main>
  );
}

export default UiPage;
