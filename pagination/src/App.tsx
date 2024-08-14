import { useEffect, useState } from 'react';
import defaultImg from './assets/defaultImg.jpg';
import './App.css';

interface ProductProps {
  id?: number;
  images?: string[];
  title?: string;
}

function App() {
  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [page, setPage] = useState(1);
  const PRODUCTS_PER_PAGE = window.innerWidth <= 420 ? 10 : 12;
  const THRESHOLD_PAGE = 3;

  const fetchProducts = async () => {
    const resp = await fetch('https://dummyjson.com/products');
    const data = await resp.json();

    if (data?.products) {
      setProducts([...data.products, ...data.products]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    products.length > 0 && (
      <section>
        <div className="product_container">
          {products.slice((page * PRODUCTS_PER_PAGE) - PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE).map((ele) => (
            <div className="product" key={ele.id}>
              <img src={ele?.images?.[0] || defaultImg} />
              <span>{ele?.title}</span>
            </div>
          ))}
        </div>
        <div className="pagination_container">
          {page !== 1 && 
            <button 
              className='prev_next' 
              onClick={() => setPage(page - THRESHOLD_PAGE > 1 ? page - THRESHOLD_PAGE : 1)}
            >
              Prev
            </button>
          }

          {products.slice(page, page + THRESHOLD_PAGE).map((_, i) => (
            products.length > PRODUCTS_PER_PAGE * (page+i) && <div key={i} className='pagination' onClick={() => setPage(page + i)}>{page + i}</div>
          ))}

          {products.length > PRODUCTS_PER_PAGE * (page+THRESHOLD_PAGE)  && 
            <button
              className='prev_next'
              onClick={() => setPage(page + THRESHOLD_PAGE)}
            >
              Next
            </button>
          }
        </div>
      </section>
    )
  );
}

export default App;
