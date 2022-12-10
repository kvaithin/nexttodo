import styles from './product.module.css';
import Image from "next/image";

const getById = async (id) => {
  const response = await fetch(`http://127.0.0.1:8090/api/collections/offer/records/${id}`, {
    next: { revalidate: 30},
  });
  return await response.json();
}

const Product = async ({params: {id}}) => {
  const product = await getById(id);
  return (
    <div>
      <h2>Product</h2>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <Image
            src={product.product_img}
            alt={product.product_name}
            width={300}
            height={190}
          />
          <h2>{product.product_name}</h2>
        </div>
        <div className={styles.rightBlock}>
          <h2 className={styles.highlight}>{product.offer_highlight}</h2>
          <h2>{product.offer_title}</h2>
          <h2 dangerouslySetInnerHTML={{ __html: product.offer_desc }} />
        </div>
      </div>



    </div>
  );
};

export default Product;