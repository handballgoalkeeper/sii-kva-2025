import AirlineModel from '../models/airline.model';

export class AirlineService {
  public static async getAirlines(): Promise<AirlineModel[]> {
    return [
      {
        id: 1,
        name: 'Air Serbia',
        countryOfOrigin: 'Serbia',
        website: 'https://www.airserbia.com'
      },
      {
        id: 2,
        name: 'Fly Emirates',
        countryOfOrigin: 'UAE',
        website: 'https://www.emirates.com'
      },
      {
        id: 3,
        name: 'Lufthansa',
        countryOfOrigin: 'Germany',
        website: 'https://www.lufthansa.com'
      },
      {
        id: 3,
        name: 'Turkish Airlines',
        countryOfOrigin: 'Türkiye',
        website: 'https://www.turkishairlines.com'
      }
    ];
  }
}
