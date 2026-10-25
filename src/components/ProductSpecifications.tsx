import React from 'react';
import { ProductSpecification } from '../types/product';

interface ProductSpecificationsProps {
  specifications: ProductSpecification;
  className?: string;
  isCompact?: boolean;
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  specifications,
  className = '',
  isCompact = false
}) => {
  const fields = [
    { label: 'Net Type', value: specifications.netType },
    { label: 'Frame Material', value: specifications.frameMaterial },
    { label: 'Frame Colour', value: specifications.frameColour },
    { label: 'Mesh Colour', value: specifications.meshColour },
    { label: 'Door System Type', value: specifications.doorSystemType },
    { label: 'Application', value: specifications.application },
    { label: 'Opening Direction', value: specifications.openingDirection },
    { label: 'Available Sizes', value: specifications.availableSizes },
    { label: 'Installation Type', value: specifications.installationType },
    { label: 'Durability / Life', value: specifications.durability },
    { label: 'Mesh Count', value: specifications.meshCount }
  ].filter((f) => Boolean(f.value && f.value.trim().length > 0));

  if (fields.length === 0) return null;

  const displayFields = isCompact ? fields.slice(0, 4) : fields;

  return (
    <div className={`border border-slate-200 rounded-lg overflow-hidden bg-white text-xs ${className}`}>
      <div className="bg-slate-50/80 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
        <span className="font-semibold text-slate-800 tracking-tight">
          Technical Specifications
        </span>
        <span className="text-[11px] text-slate-600">
          Precision Fabricated
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {displayFields.map((field, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 sm:grid-cols-3 p-2.5 sm:px-3 sm:py-2 transition-colors hover:bg-slate-50/50 ${
              idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
            }`}
          >
            <span className="font-medium text-slate-500 sm:col-span-1 pr-2">
              {field.label}
            </span>
            <span className="text-slate-800 font-normal sm:col-span-2 break-words">
              {field.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
