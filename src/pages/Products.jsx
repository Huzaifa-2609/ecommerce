import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  console.log(allProducts);

  useEffect(() => {
    if (categoryData === null) {
      const d = [
        {
          name: "Product 1",
          description: "This is the description for Product 1.",
          category: "Electronics",
          tags: ["electronics", "gadgets"],
          originalPrice: 49.99,
          discountPrice: 39.99,
          stock: 20,
          images: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aolga-hk.com%2Ffree-sample-for-hair-dryer-for-hotels-hair-dryer-rm-df11-aolga-product%2F&psig=AOvVaw16qyqUvK2oorFYGs3K2Kju&ust=1685653680695000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjnnrm7oP8CFQAAAAAdAAAAABAE",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aolga-hk.com%2Ffree-sample-for-hair-dryer-for-hotels-hair-dryer-rm-df11-aolga-product%2F&psig=AOvVaw16qyqUvK2oorFYGs3K2Kju&ust=1685653680695000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjnnrm7oP8CFQAAAAAdAAAAABAE",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aolga-hk.com%2Ffree-sample-for-hair-dryer-for-hotels-hair-dryer-rm-df11-aolga-product%2F&psig=AOvVaw16qyqUvK2oorFYGs3K2Kju&ust=1685653680695000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjnnrm7oP8CFQAAAAAdAAAAABAE",
          ],
          reviews: [
            {
              user: { name: "John Doe", email: "johndoe@example.com" },
              rating: 4,
              comment: "Great product!",
              productId: "product1",
              createdAt: "2023-05-30T10:00:00.000Z",
            },
            {
              user: { name: "Jane Smith", email: "janesmith@example.com" },
              rating: 5,
              comment: "Excellent quality!",
              productId: "product1",
              createdAt: "2023-05-31T15:30:00.000Z",
            },
          ],
          ratings: 4.5,
          shopId: "shop1",
          shop: { name: "Electronics Paradise", location: "City A, Country A" },
          sold_out: false,
          createdAt: "2023-05-29T08:45:00.000Z",
        },
        {
          name: "Product 2",
          description: "This is the description for Product 2.",
          category: "Fashion",
          tags: ["fashion", "clothing"],
          originalPrice: 79.99,
          discountPrice: 69.99,
          stock: 15,
          images: ["product2_1.jpg", "product2_2.jpg", "product2_3.jpg"],
          reviews: [
            {
              user: {
                name: "Emily Johnson",
                email: "emilyjohnson@example.com",
              },
              rating: 4,
              comment: "Stylish and trendy!",
              productId: "product2",
              createdAt: "2023-06-01T09:15:00.000Z",
            },
            {
              user: { name: "Alex Brown", email: "alexbrown@example.com" },
              rating: 5,
              comment: "Perfect fit, love it!",
              productId: "product2",
              createdAt: "2023-06-02T14:45:00.000Z",
            },
          ],
          ratings: 4.5,
          shopId: "shop2",
          shop: { name: "Fashion Hub", location: "City B, Country B" },
          sold_out: false,
          createdAt: "2023-05-30T11:20:00.000Z",
        },
        // ... Continue with more products
      ];
      setData(d);
    } else {
      const d =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allProducts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                No products Found!
              </h1>
            ) : null}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Products;
