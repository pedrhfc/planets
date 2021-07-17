type Option = {
  uri: string;
  label: string;
  views: number;
};

export interface CometsContainerProps {
  options: Option[];
}
