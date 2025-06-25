module.exports = [
  {
    name: 'Urban Nest PG',
    description: 'A premium co-living space with all modern amenities and a vibrant community.',
    location: {
      city: 'Bangalore',
      area: 'Koramangala',
      address: '123 5th Block, Koramangala, Bangalore - 560034'
    },
    sharing: 2,
    amenities: [], // Will be populated with ObjectIds after amenities are created
    pricePerMonth: 12000,
    photos: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    ],
    availableFrom: new Date('2023-12-01'),
    description: 'A premium co-living space with all modern amenities and a vibrant community.'
  },
  {
    name: 'Comfort Zone PG',
    description: 'Affordable and comfortable accommodation with homely food and convenient location.',
    location: {
      city: 'Bangalore',
      area: 'Indiranagar',
      address: '42 12th Main, Indiranagar, Bangalore - 560038'
    },
    sharing: 3,
    amenities: [], // Will be populated with ObjectIds after amenities are created
    pricePerMonth: 9000,
    photos: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      'https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg',
      'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg'
    ],
    availableFrom: new Date('2023-12-15'),
    description: 'Affordable and comfortable accommodation with homely food and convenient location.'
  },
  {
    name: 'Harmony Living',
    description: 'Luxury co-living space with premium amenities and dedicated workspace.',
    location: {
      city: 'Bangalore',
      area: 'HSR Layout',
      address: '78 Sector 3, HSR Layout, Bangalore - 560102'
    },
    sharing: 1,
    amenities: [], // Will be populated with ObjectIds after amenities are created
    pricePerMonth: 15000,
    photos: [
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    ],
    availableFrom: new Date('2023-11-20'),
    description: 'Luxury co-living space with premium amenities and dedicated workspace.'
  }
];