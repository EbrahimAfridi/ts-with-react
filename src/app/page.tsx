import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="bg-zinc-800 h-screen">
      <Button
        text="Hello"
        bgColor="red"
        textColor="white"
        paddingArray={["10px ", "5px ", "10px ", "5px "]}
        marginTuple={[10, 5]}
      />
    </main>
  );
}
