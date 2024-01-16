export default function Text({ children, className = "" }) { 
  const styleMap = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
    p: "text-base",
  };
  }
  return <p className={`text-gray-800 ${className}`}>{children}</p>;
}