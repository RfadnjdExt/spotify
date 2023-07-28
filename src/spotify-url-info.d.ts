declare module "spotify-url-info" {
  import { fetch as _fetch } from "undici";
  import { Data } from "./API";
  export default function spotifyUrlInfo(fetch: typeof _fetch): { getData: (url: string) => Data };
}
