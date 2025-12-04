import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            TELUS AI Factory
          </h1>
          <p className="text-2xl text-muted-foreground">for ML Engineers</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified interface for building, deploying, and managing AI/ML applications
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-8 py-4 text-base font-semibold text-white hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View Documentation
          </Link>
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center justify-center rounded-lg border-2 border-purple-600 px-8 py-4 text-base font-semibold text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors"
          >
            Quick Start Guide
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold text-lg mb-2">Compute Resources</h3>
            <p className="text-sm text-muted-foreground">
              Bare Metal, VMs, and Kubernetes for your ML workloads
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold text-lg mb-2">ML Services</h3>
            <p className="text-sm text-muted-foreground">
              Notebooks, vLLM, Ollama, and NIM for model development
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold text-lg mb-2">Marketplace</h3>
            <p className="text-sm text-muted-foreground">
              Pre-configured solutions ready to deploy
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
