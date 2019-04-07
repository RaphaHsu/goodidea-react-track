export interface BooksApiResponse {
  updatedAt: number;
  list: BookInformation[];
}

export interface BookInformation {
  image: string;
  originPrice: string;
  sellPrice: string;
  name: string;
  link: string;
  ISBN: string;
}
