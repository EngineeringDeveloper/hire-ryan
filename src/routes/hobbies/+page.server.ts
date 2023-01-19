import type { PageServerLoad } from "./$types";
import { default as stravaAPI, type Strava } from "strava-v3";
// https://www.npmjs.com/package/strava-v3
import {
    SECRET_STRAVA_ACCESS_TOKEN,
    SECRET_STAVA_ATHELTE_ID,
    SECRET_STRAVA_CLIENT_ID,
    SECRET_STRAVA_REFRESH_TOKEN,
} from "$env/static/private";

const strava: Strava = new stravaAPI.client(SECRET_STRAVA_ACCESS_TOKEN)

// Generated by https://quicktype.io

export interface AthelteStats {
    biggest_ride_distance:        number;
    biggest_climb_elevation_gain: number;
    recent_ride_totals:           Totals;
    recent_run_totals:            Totals;
    recent_swim_totals:           Totals;
    ytd_ride_totals:              Totals;
    ytd_run_totals:               Totals;
    ytd_swim_totals:              Totals;
    all_ride_totals:              Totals;
    all_run_totals:               Totals;
    all_swim_totals:              Totals;
}

export interface Totals {
    count:             number;
    distance:          number;
    moving_time:       number;
    elapsed_time:      number;
    elevation_gain:    number;
    achievement_count: number;
}


export const load = (async () => {
    const stats: AthelteStats = await strava.athletes.stats({id: SECRET_STAVA_ATHELTE_ID})
    return stats
}) satisfies PageServerLoad;