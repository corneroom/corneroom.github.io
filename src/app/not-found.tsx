export const metadata = {
  title: "Open in Corneroom",
  description: "Get the Corneroom app to discover spaces near you.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Open in Corneroom
        </h1>
        <p className="text-gray-600 mb-8">
          This content is best viewed in the Corneroom app. Get the app below to
          discover spaces in 120+ countries.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="https://apps.apple.com/app/corneroom/id6740086312"
            className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Download on the App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=ca.inspiredtech.corneroom"
            className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get it on Google Play
          </a>
        </div>

        <a
          href="/"
          className="inline-block text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back to Corneroom.com
        </a>
      </div>
    </main>
  );
}
