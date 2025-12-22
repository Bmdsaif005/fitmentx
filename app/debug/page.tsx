import vossen from "@/lib/data/vossen.json";
import ferrada from "@/lib/data/ferrada.json";
import prices from "@/lib/data/prices.json";

export default function DebugPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20 text-sm">
      <h1 className="text-3xl font-bold mb-6">JSON Debug View</h1>

      <pre className="bg-gunmetal p-6 rounded-lg overflow-auto max-h-[80vh]">
        {JSON.stringify(
          {
            vossen: vossen.slice(0, 5),
            ferrada: ferrada.slice(0, 5),
            prices: prices.slice(0, 5),
          },
          null,
          2
        )}
      </pre>
    </main>
  );
}
