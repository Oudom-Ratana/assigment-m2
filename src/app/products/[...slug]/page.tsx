// src/app/products/[...slug]/page.tsx

import ProductDetailComponent from "@/components/products/ProductDetailComponent";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const productId = slug?.[0];

  if (!productId) {
    return (
      <div className="p-8 text-center">
        រកមិនឃើញអត្តសញ្ញាណផលិតផលឡើយ
      </div>
    );
  }

  return (
    <ProductDetailComponent
      id={productId}
      className=""
    />
  );
}