export interface Img {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
  user: {
    id: string;
    name: string;
  };
  likes: number;
}

export type OpenModal = (image: Img) => void;