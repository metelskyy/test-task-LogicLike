import { Empty } from '../../ui/Empty/Empty';

interface Props {
  children: React.ReactNode;
  loading: boolean;
  dataLength: number;
}
export const EmptyDataProvider = ({ children, loading, dataLength }: Props) => {
  return !loading && dataLength > 0 ? children : <Empty />;
};
