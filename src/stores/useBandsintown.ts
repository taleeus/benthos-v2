import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { EventData } from "../types/bandsintown.types";
import { Event } from "../types/events.types";

export const useBandsintownStore = defineStore("bandsintown", () => {
  const events = ref<Event[]>([]);
  const fetchEvents = async () => {
    const bandsintownData = await axios.get(
      "https://rest.bandsintown.com/artists/Benthos/events",
      {
        params: {
          app_id: import.meta.env.VITE_BANDSINTOWN_APP_ID,
        },
      }
    );

    const bandsintownEvents = bandsintownData.data as EventData[];
    events.value = bandsintownEvents.map((e) => ({
      name: e.title,
      date: new Date(e.datetime),
      venue: e.venue.name,
      city: e.venue.city,
      country: e.venue.country,
      location: e.venue.location,
      ticketsUrl: e.offers[0]?.url,
    }));

    return events;
  };

  return { events, fetchEvents };
});
