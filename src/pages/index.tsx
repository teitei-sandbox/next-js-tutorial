import { NextPage } from "next";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../components/MyLayout";

export interface Entry {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: Type;
  language: Language;
  genres: string[];
  status: Status;
  runtime: number;
  premiered: Date;
  officialSite: null | string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: Network | null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Nextepisode;
  previousepisode: Nextepisode;
  nextepisode?: Nextepisode;
}

export interface Nextepisode {
  href: string;
}

export interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: null | string;
}

export interface Image {
  medium: string;
  original: string;
}

export enum Language {
  English = "English",
}

export interface Network {
  id: number;
  name: string;
  country: Country | null;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average: number | null;
}

export interface Schedule {
  time: string;
  days: string[];
}

export enum Status {
  Ended = "Ended",
  Running = "Running",
  ToBeDetermined = "To Be Determined",
}

export enum Type {
  Animation = "Animation",
  Documentary = "Documentary",
  Scripted = "Scripted",
}

const Index: NextPage<{ shows: Show[] }> = ({ shows }) => {
  return (
    <Layout>
      <h1>BatMan TV Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async (): Promise<{ shows: Show[] }> => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = (await res.json()) as Entry[];

  console.log(`show data fetched. count: ${data.length}`);

  return {
    shows: data.map((entry) => entry.show),
  };
};

export default Index;
