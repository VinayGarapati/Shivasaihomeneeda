import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface ProductSearchProps {
  value: string;
  onChange: (val: string) => void;
  resultCount?: number;
  totalCount?: number;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({
  value,
  onChange,
  resultCount,
  totalCount
}) => {
  const [searchTerm, setSearchTerm] = useState(value);

  // Debounce input changes by 250ms
  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(searchTerm);
    }, 250);

    return () => clearTimeout(handler);
  }, [searchTerm, onChange]);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search mosquito net doors, sliding mesh, pleated systems..."
          className="w-full pl-9 pr-9 py-2.5 bg-white border border-slate-300 rounded-lg text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          aria-label="Search products"
        />
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm('');
              onChange('');
            }}
            aria-label="Clear search"
            className="absolute right-3 p-0.5 text-slate-400 hover:text-slate-600 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {resultCount !== undefined && totalCount !== undefined && (
        <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5 px-1">
          <span>
            Showing <strong className="text-slate-700">{resultCount}</strong> of {totalCount} solutions
          </span>
          {searchTerm && (
            <span className="truncate max-w-[160px]">
              for &ldquo;<span className="text-slate-800 font-medium">{searchTerm}</span>&rdquo;
            </span>
          )}
        </div>
      )}
    </div>
  );
};
