export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Skeleton */}
      <nav className="h-16 bg-background border-b border-accent animate-pulse">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-200 h-6 w-32 rounded"></div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="bg-gray-200 h-4 w-16 rounded"></div>
            <div className="bg-gray-200 h-4 w-20 rounded"></div>
            <div className="bg-gray-200 h-4 w-18 rounded"></div>
          </div>
          <div className="bg-gray-200 h-8 w-8 rounded md:hidden"></div>
        </div>
      </nav>

      {/* Hero Skeleton */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted animate-pulse">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="bg-gray-200 h-12 w-3/4 mx-auto mb-6 rounded"></div>
          <div className="bg-gray-200 h-6 w-1/2 mx-auto mb-8 rounded"></div>
          <div className="bg-gray-200 h-10 w-32 mx-auto rounded"></div>

          {/* Carousel skeleton */}
          <div className="mt-12">
            <div className="bg-gray-200 h-64 w-full max-w-4xl mx-auto rounded-lg"></div>
            <div className="flex justify-center mt-4 space-x-2">
              <div className="bg-gray-200 h-2 w-2 rounded-full"></div>
              <div className="bg-gray-200 h-2 w-2 rounded-full"></div>
              <div className="bg-gray-200 h-2 w-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="mt-12 xs:mt-20 bg-background border-t animate-pulse">
        <div className="max-w-screen-xl mx-auto py-12 flex flex-col md:flex-row justify-between items-start gap-8 px-6">
          <div className="flex-shrink-0">
            <div className="bg-gray-200 h-8 w-40 mb-4 rounded"></div>
            <div className="bg-gray-200 h-4 w-64 mb-2 rounded"></div>
            <div className="bg-gray-200 h-4 w-48 mb-6 rounded"></div>
            <div className="flex space-x-4">
              <div className="bg-gray-200 h-6 w-6 rounded"></div>
              <div className="bg-gray-200 h-6 w-6 rounded"></div>
              <div className="bg-gray-200 h-6 w-6 rounded"></div>
              <div className="bg-gray-200 h-6 w-6 rounded"></div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-gray-200 h-6 w-20 mb-6 rounded"></div>
            <div className="space-y-4">
              <div className="bg-gray-200 h-4 w-24 rounded"></div>
              <div className="bg-gray-200 h-4 w-28 rounded"></div>
              <div className="bg-gray-200 h-4 w-20 rounded"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent">
          <div className="max-w-screen-xl mx-auto py-6 px-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="bg-gray-200 h-4 w-48 rounded"></div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <div className="bg-gray-200 h-4 w-12 rounded"></div>
              <div className="bg-gray-200 h-4 w-16 rounded"></div>
              <div className="bg-gray-200 h-4 w-14 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
