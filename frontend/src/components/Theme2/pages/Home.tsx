import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<{ [id: number]: number }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">🛍️ Featured Products</h2>

        {loading && <p className="text-gray-400">Loading products...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 object-contain mx-auto mb-4 bg-white rounded"
              />
              <h3 className="text-sm font-semibold mb-1 line-clamp-2">{product.title}</h3>
              <p className="text-xs text-gray-400 line-clamp-3 mb-2">{product.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-purple-400 font-bold">${product.price}</span>
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition"
                >
                  {cart[product.id] ? `In Cart (${cart[product.id]})` : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
