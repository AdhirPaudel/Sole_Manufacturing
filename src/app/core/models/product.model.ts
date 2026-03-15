export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  tag: string;
  series: string;
  image: string;
  filterTag: string;
  // Add these new fields
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  pricePerKg: number;
  metrics: {
    shoreHardness: string;
    abrasionLoss: string;
    density: string;
    flexLife: string;
  };
  specs: {
    materialBase: string;
    tensileStrength: string;
    elongation: string;
    compressionSet: string;
    processingTemp: string;
    moistureContent: string;
    colorVariant: string;
    storageLife: string;
  };
  technicalSummary: string[];
}