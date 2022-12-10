import PocketBase from 'pocketbase';
import Image from 'next/image'
import styles from './products.module.css';
import Link from "next/link";

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0;

const pb = new PocketBase('http://127.0.0.1:8090');

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const getAllProducts = async () => {
  // await delay(5000);
  return await pb.collection('offer').getFullList();
};

const Products = async () => {
  const products = await getAllProducts();

  return (
  <div className={styles.all}>
    <h2>Products</h2>
    {
      products.map(product => {
        return <Link key={product.id} href={`/products/${product.id}`}>
          <div key={product.id} className={styles.container}>
            <Image
              src={product.product_img}
              alt={product.product_name}
              width={150}
              height={95}
            />
            <h3>{product.product_name}</h3>
          </div>
        </Link>
      })
    }
  </div>
 );
};

export default Products;
