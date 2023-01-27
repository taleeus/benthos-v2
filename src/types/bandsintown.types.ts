export interface EventData {
  title: string;
  datetime: string;
  venue: {
    name: string;
    city: string;
    country: string;
  }
  offers: [{
    url: string;
  }];
}
