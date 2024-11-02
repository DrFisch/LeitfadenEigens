import Button from './components/Button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Willkommen zum Leitfaden</h1>
        <p className="text-lg mb-6 text-gray-700">
          Diese Anwendung hilft Behörden dabei, zu entscheiden, ob ein Wechsel von Windows auf Linux für die gesamte Behörde sinnvoll ist. Beantworten Sie einige Fragen, um eine fundierte Empfehlung zu erhalten.
        </p>
        <Button href="/questions" text="Befragung starten" />
      </main>
    </div>
  );
}