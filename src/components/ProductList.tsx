import React from 'react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';
import { ShieldAlert, RefreshCw } from 'lucide-react';

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
  onOpenQuote: (product: Product) => void;
  onOpenCallback: (product: Product) => void;
  onResetFilters?: () => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  isLoading = false,
  onOpenQuote,
  onOpenCallback,
  onResetFilters
}) => {
  if (isLoading) {
    return (
      <div className="py-16 text-center bg-white rounded-xl border border-slate-200">
        <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-3" />
        <p className="text-sm font-semibold text-slate-800">Updating product catalogue...</p>
        <p className="text-xs text-slate-500 mt-1">Filtering verified mosquito screen systems</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="py-16 px-6 text-center bg-white rounded-xl border border-slate-200 shadow-xs">
        <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-slate-800">No mosquito net products found</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
          We could not find matching products for your selected category or search keyword. Please try a different term or clear filters.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
          >
            Reset Filters & View All Products
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenQuote={onOpenQuote}
          onOpenCallback={onOpenCallback}
        />
      ))}
    </div>
  );
};
