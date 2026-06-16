export const metadata = {
  title: "Open Corneroom",
  description:
    "Open the Corneroom app, or download it to book and host spaces worldwide.",
};

// Landing target for the in-app links in our emails (https://corneroom.com/app).
// When the app is installed this URL is captured as a Universal Link (iOS) /
// App Link (Android) and opens the app directly — this page is only shown when
// the app is not installed (or on desktop), where it offers the download.
export default function AppLandingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Open Corneroom
        </h1>
        <p className="text-gray-600 mb-8">
          Get the Corneroom app to book and host spaces worldwide. If you
          already have it installed, this link opens the app automatically.
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
