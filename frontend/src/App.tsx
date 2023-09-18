import './App.css'
import { sampleProducts } from './data';

function App() {
  return (
    <div>
      <header>
        WMR.ORG
      </header>
      <main>
        <ul>
          {
            sampleProducts.map(product => (
              <li key={product.slug}>
                <img src={product.image} alt={product.name} className='product-image'/>
                <h2>{product.name}</h2>
                <p>PHP {product.price}</p>
              </li>
            ))
          }
        </ul>
      </main>
      <footer>
        All right reserved!
      </footer>
    </div>
  )
}

export default App
