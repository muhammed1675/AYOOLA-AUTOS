export type Location = {
  city: string;
  country: string;
  code: string;
};

export const locations: Location[] = [
// Italy
{ city: 'Rome', country: 'Italy', code: 'FCO' },
{ city: 'Milan', country: 'Italy', code: 'MXP' },
{ city: 'Venice', country: 'Italy', code: 'VCE' },
{ city: 'Florence', country: 'Italy', code: 'FLR' },
{ city: 'Naples', country: 'Italy', code: 'NAP' },
{ city: 'Turin', country: 'Italy', code: 'TRN' },
{ city: 'Bologna', country: 'Italy', code: 'BLQ' },
{ city: 'Palermo', country: 'Italy', code: 'PMO' },

// Europe
{ city: 'Paris', country: 'France', code: 'CDG' },
{ city: 'Nice', country: 'France', code: 'NCE' },
{ city: 'London', country: 'United Kingdom', code: 'LHR' },
{ city: 'Manchester', country: 'United Kingdom', code: 'MAN' },
{ city: 'Berlin', country: 'Germany', code: 'BER' },
{ city: 'Munich', country: 'Germany', code: 'MUC' },
{ city: 'Frankfurt', country: 'Germany', code: 'FRA' },
{ city: 'Madrid', country: 'Spain', code: 'MAD' },
{ city: 'Barcelona', country: 'Spain', code: 'BCN' },
{ city: 'Lisbon', country: 'Portugal', code: 'LIS' },
{ city: 'Amsterdam', country: 'Netherlands', code: 'AMS' },
{ city: 'Brussels', country: 'Belgium', code: 'BRU' },
{ city: 'Vienna', country: 'Austria', code: 'VIE' },
{ city: 'Zurich', country: 'Switzerland', code: 'ZRH' },
{ city: 'Geneva', country: 'Switzerland', code: 'GVA' },
{ city: 'Copenhagen', country: 'Denmark', code: 'CPH' },
{ city: 'Stockholm', country: 'Sweden', code: 'ARN' },
{ city: 'Oslo', country: 'Norway', code: 'OSL' },
{ city: 'Helsinki', country: 'Finland', code: 'HEL' },
{ city: 'Athens', country: 'Greece', code: 'ATH' },
{ city: 'Istanbul', country: 'Turkey', code: 'IST' },
{ city: 'Prague', country: 'Czech Republic', code: 'PRG' },
{ city: 'Warsaw', country: 'Poland', code: 'WAW' },
{ city: 'Budapest', country: 'Hungary', code: 'BUD' },
{ city: 'Dublin', country: 'Ireland', code: 'DUB' },
{ city: 'Monaco', country: 'Monaco', code: 'MCM' },

// Middle East
{ city: 'Dubai', country: 'United Arab Emirates', code: 'DXB' },
{ city: 'Abu Dhabi', country: 'United Arab Emirates', code: 'AUH' },
{ city: 'Doha', country: 'Qatar', code: 'DOH' },
{ city: 'Riyadh', country: 'Saudi Arabia', code: 'RUH' },
{ city: 'Tel Aviv', country: 'Israel', code: 'TLV' },

// North America
{ city: 'New York', country: 'United States', code: 'JFK' },
{ city: 'Los Angeles', country: 'United States', code: 'LAX' },
{ city: 'Miami', country: 'United States', code: 'MIA' },
{ city: 'San Francisco', country: 'United States', code: 'SFO' },
{ city: 'Chicago', country: 'United States', code: 'ORD' },
{ city: 'Las Vegas', country: 'United States', code: 'LAS' },
{ city: 'Toronto', country: 'Canada', code: 'YYZ' },
{ city: 'Vancouver', country: 'Canada', code: 'YVR' },
{ city: 'Mexico City', country: 'Mexico', code: 'MEX' },

// Asia
{ city: 'Tokyo', country: 'Japan', code: 'HND' },
{ city: 'Osaka', country: 'Japan', code: 'KIX' },
{ city: 'Seoul', country: 'South Korea', code: 'ICN' },
{ city: 'Shanghai', country: 'China', code: 'PVG' },
{ city: 'Beijing', country: 'China', code: 'PEK' },
{ city: 'Hong Kong', country: 'Hong Kong', code: 'HKG' },
{ city: 'Singapore', country: 'Singapore', code: 'SIN' },
{ city: 'Bangkok', country: 'Thailand', code: 'BKK' },
{ city: 'Bali', country: 'Indonesia', code: 'DPS' },
{ city: 'Mumbai', country: 'India', code: 'BOM' },
{ city: 'New Delhi', country: 'India', code: 'DEL' },

// Oceania
{ city: 'Sydney', country: 'Australia', code: 'SYD' },
{ city: 'Melbourne', country: 'Australia', code: 'MEL' },
{ city: 'Auckland', country: 'New Zealand', code: 'AKL' },

// South America
{ city: 'São Paulo', country: 'Brazil', code: 'GRU' },
{ city: 'Rio de Janeiro', country: 'Brazil', code: 'GIG' },
{ city: 'Buenos Aires', country: 'Argentina', code: 'EZE' },

// Africa
{ city: 'Cape Town', country: 'South Africa', code: 'CPT' },
{ city: 'Johannesburg', country: 'South Africa', code: 'JNB' },
{ city: 'Cairo', country: 'Egypt', code: 'CAI' },
{ city: 'Marrakech', country: 'Morocco', code: 'RAK' },
{ city: 'Lagos', country: 'Nigeria', code: 'LOS' },
{ city: 'Nairobi', country: 'Kenya', code: 'NBO' }];