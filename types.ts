export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Shirt' | 'Sparkles' | 'Clock' | 'Truck';
}

export interface PriceItem {
  id: string;
  service: string;
  price: string;
  unit: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
