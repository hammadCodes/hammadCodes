export default function ResumePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="px-6 py-6">
        <h1 className="text-2xl font-bold uppercase tracking-wider text-accent">
          Resume
        </h1>
      </div>

      <iframe
        src="/hammad_resume.pdf"
        title="Hammad's Resume"
        className="flex-1 w-full border-0"
      />
    </main>
  );
}
