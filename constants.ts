import { ServiceItem, PriceItem, Testimonial } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'wash-fold',
    title: 'Cuci Lipat (Wash & Fold)',
    description: 'Pakaian dicuci bersih, dikeringkan, dan dilipat rapi. Siap masuk lemari.',
    iconName: 'Shirt',
  },
  {
    id: 'dry-clean',
    title: 'Dry Cleaning',
    description: 'Perawatan khusus untuk jas, gaun, dan bahan sensitif menggunakan bahan kimia ramah lingkungan.',
    iconName: 'Sparkles',
  },
  {
    id: 'express',
    title: 'Layanan Ekspres',
    description: 'Butuh cepat? Layanan selesai dalam 4-6 jam untuk kebutuhan mendesak Anda.',
    iconName: 'Clock',
  },
  {
    id: 'pickup',
    title: 'Antar Jemput',
    description: 'Tidak sempat ke outlet? Kami jemput dan antar kembali pakaian Anda (Gratis jarak < 3km).',
    iconName: 'Truck',
  },
];

export const PRICES: PriceItem[] = [
  {
    id: 'regular',
    service: 'Cuci Komplit Regular',
    price: '6.000',
    unit: '/ kg',
    features: ['Cuci + Kering + Setrika', 'Pewangi Premium', 'Selesai 2 Hari', 'Minimal 3kg'],
  },
  {
    id: 'express',
    service: 'Cuci Komplit Ekspres',
    price: '10.000',
    unit: '/ kg',
    features: ['Cuci + Kering + Setrika', 'Prioritas Pengerjaan', 'Selesai 6 Jam', 'Minimal 3kg'],
    recommended: true,
  },
  {
    id: 'bedcover',
    service: 'Bed Cover (Satuan)',
    price: '25.000',
    unit: '/ pcs',
    features: ['Deep Cleaning', 'Anti Bakteri', 'Vacuum Packing', 'Ukuran Besar +5k'],
  },
  {
    id: 'shoes',
    service: 'Cuci Sepatu (Shoes)',
    price: '35.000',
    unit: '/ pasang',
    features: ['Deep Clean', 'Whitening Midsole', 'Anti Jamur', 'Repaint (Optional)'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Wijaya',
    role: 'Ibu Rumah Tangga',
    content: 'Sangat terbantu dengan layanan antar jemputnya. Hasil cucian wangi banget dan rapi. Langganan terus!',
    avatar: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: 't2',
    name: 'Budi Santoso',
    role: 'Mahasiswa',
    content: 'Harga mahasiswa banget tapi kualitasnya premium. Layanan ekspresnya beneran cepet selesainya.',
    avatar: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: 't3',
    name: 'Linda Kusuma',
    role: 'Pekerja Kantoran',
    content: 'Dry clean jas kantor di sini hasilnya memuaskan. Tidak merusak bahan dan baunya segar.',
    avatar: 'https://picsum.photos/100/100?random=3',
  },
];

export const SYSTEM_INSTRUCTION = `
Kamu adalah "Rara", asisten virtual yang ramah dan membantu untuk "Laundry Rarare".
Tugasmu adalah menjawab pertanyaan pelanggan mengenai layanan laundry kami.

Informasi Bisnis:
- Nama: Laundry Rarare
- Jam Operasional: Setiap hari, 08.00 - 20.00 WIB.
- Lokasi: Jl. Mawar Indah No. 12, Jakarta Selatan.
- Kontak: 0812-3456-7890

Layanan & Harga Dasar:
- Cuci Komplit Regular (2 hari): Rp 6.000/kg (Min 3kg)
- Cuci Komplit Ekspres (6 jam): Rp 10.000/kg (Min 3kg)
- Setrika Saja: Rp 4.000/kg
- Bed Cover: Mulai Rp 25.000/pcs
- Cuci Sepatu: Mulai Rp 35.000/pasang
- Dry Clean Jas/Gaun: Mulai Rp 40.000/pcs

Kebijakan:
- Antar jemput GRATIS untuk jarak di bawah 3km (min transaksi 20rb).
- Garansi cuci ulang jika kurang bersih/wangi (lapor max 24 jam).

Gaya Bicara:
- Gunakan bahasa Indonesia yang sopan, santai, namun profesional.
- Gunakan emoji sesekali agar ramah.
- Jika ditanya hal di luar laundry, alihkan kembali ke topik laundry dengan sopan.
- Jawablah dengan ringkas.
`;
