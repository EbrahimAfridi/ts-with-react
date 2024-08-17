import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="bg-zinc-800 h-screen">
      <Button text="Hello" bgColor="red" textColor="white" paddingArray={[10, 5, 20, 4]}/>
    </main>
  );
}
