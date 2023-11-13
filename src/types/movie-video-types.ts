import { SingleMovie } from './store-types';

export interface MovieVideoProps {
  id: string | undefined;
  movie: Partial<SingleMovie>;
}

export interface ModalVideoProps {
  id: string | undefined;
  setIsModal: (value: boolean) => void;
}
