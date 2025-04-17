import React from 'react';

const LoaderSpinner = ({ size = 50, color = 'border-blue-500', className }) => {
  const sizeClasses = `w-${size} h-${size}`; // Convert size to Tailwind width/height classes

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses} border-6 border-solid rounded-full animate-spin ${color} border-t-transparent`}
        style={{
          // Removed inline styles, Tailwind handles it now
        }}
      />
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="flex flex-col items-center gap-4">
          <LoaderSpinner size={20} color="border-blue-500" className="mb-4" />
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Content Loaded!</h1>
          <p className="text-gray-700">This is the main content of the application.</p>
        </div>
      )}
    </div>
  );
};

export default App;
