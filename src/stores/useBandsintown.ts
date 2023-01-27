import { defineStore } from "pinia";
import { computed } from "vue";
import axios from "axios";
import { Event } from "../types/events.types";
import { EventData } from "../types/bandsintown.types";

export const useBandsintownStore = defineStore("bandsintown", () => {
  let eventsData: Event[] | undefined = undefined;
  const events = computed(async () => {
    if (eventsData) {
      return eventsData;
    }

    const bandsintownData = await axios.get(
      "https://rest.bandsintown.com/artists/Benthos/events",
      {
        params: {
          app_id: import.meta.env.VITE_BANDSINTOWN_APP_ID,
        },
      }
    );

    const bandsintownEvents = bandsintownData.data as EventData[];
    eventsData = bandsintownEvents.map((e) => ({
      name: e.title,
      date: new Date(e.datetime),
      venue: e.venue.name,
      city: e.venue.city,
      country: e.venue.country,
      ticketsUrl: e.offers[0].url,
    }));

    return eventsData;
  });

  const offlineEvents: Event[] = [
    {
      name: "Dissonance Festival 2023",
      city: "Milan",
      country: "Italy",
      date: new Date("2023/06/03"),
      venue: "Circolo Magnolia",
      ticketsUrl: "https://linktr.ee/dissonancefestival",
    },
  ];

  return { events, offlineEvents };
});
