export type VehicleData = {
  id: string;
  name: string;
  category: 'Sport' | 'Luxury' | 'SUV' | 'Convertible' | 'Sedan';
  price: number;
  image: string;
  alt: string;
  specs: {
    seats: number;
    transmission: 'Automatic' | 'Manual';
    fuel: 'Petrol' | 'Hybrid' | 'Electric' | 'Diesel';
    topSpeed: string;
  };
  description: string;
};

export const vehiclesData: VehicleData[] = [
{
  id: 'mclaren-720s',
  name: 'McLaren 720s',
  category: 'Sport',
  price: 420,
  image:
  'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1200&q=80',
  alt: 'Blue McLaren 720s sports car',
  specs: {
    seats: 2,
    transmission: 'Automatic',
    fuel: 'Petrol',
    topSpeed: '341 km/h'
  },
  description:
  'A track-bred supercar delivering breathtaking performance with everyday usability.'
},
{
  id: 'bentley-continental-gt',
  name: 'Bentley Continental GT V8',
  category: 'Luxury',
  price: 380,
  image:
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
  alt: 'Tan Bentley Continental GT convertible',
  specs: {
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Petrol',
    topSpeed: '318 km/h'
  },
  description:
  'Effortless grand touring with handcrafted luxury and a thunderous V8 soundtrack.'
},
{
  id: 'rolls-royce-spectre',
  name: 'Rolls-Royce Spectre',
  category: 'Luxury',
  price: 400,
  image:
  'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=80',
  alt: 'Yellow Rolls-Royce Spectre',
  specs: {
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Electric',
    topSpeed: '250 km/h'
  },
  description:
  'Silent, electrified opulence — the future of ultra-luxury motoring.'
},
{
  id: 'ferrari-roma',
  name: 'Ferrari Roma',
  category: 'Sport',
  price: 380,
  image:
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  alt: 'Red Ferrari sports car',
  specs: {
    seats: 2,
    transmission: 'Automatic',
    fuel: 'Petrol',
    topSpeed: '320 km/h'
  },
  description:
  'Italian elegance meets razor-sharp performance in a timeless GT silhouette.'
},
{
  id: 'lamborghini-huracan',
  name: 'Lamborghini Huracán',
  category: 'Sport',
  price: 450,
  image:
  'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80',
  alt: 'Orange Lamborghini Huracán',
  specs: {
    seats: 2,
    transmission: 'Automatic',
    fuel: 'Petrol',
    topSpeed: '325 km/h'
  },
  description:
  'A naturally aspirated V10 wrapped in dramatic, aggressive Italian design.'
},
{
  id: 'porsche-911',
  name: 'Porsche 911 Turbo S',
  category: 'Sport',
  price: 340,
  image:
  'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=1200&q=80',
  alt: 'Silver Porsche 911',
  specs: {
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Petrol',
    topSpeed: '330 km/h'
  },
  description:
  'The benchmark sports car — refined, precise and breathtakingly fast.'
},
{
  id: 'range-rover-autobio',
  name: 'Range Rover Autobiography',
  category: 'SUV',
  price: 290,
  image:
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
  alt: 'Black Range Rover',
  specs: {
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    topSpeed: '250 km/h'
  },
  description:
  'Commanding luxury SUV equally at home in the city or on the trail.'
},
{
  id: 'bentley-flying-spur',
  name: 'Bentley Flying Spur',
  category: 'Sedan',
  price: 400,
  image:
  'https://images.unsplash.com/photo-1631295868781-cd2c8b15e7f3?auto=format&fit=crop&w=1200&q=80',
  alt: 'Dark Bentley Flying Spur sedan',
  specs: {
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Petrol',
    topSpeed: '333 km/h'
  },
  description:
  'A four-door grand tourer offering serene comfort and immense power.'
}];