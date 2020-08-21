import {environment} from "../../../environments/environment";

export const host = environment.host;

export const apiRoute = (path: string) => {
  return `${host}/${path}`;
};
