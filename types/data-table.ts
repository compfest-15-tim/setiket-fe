export interface InputFilter {
  columnId: string;
  placeholder: string;
}

export interface FacetedFilter {
  columnId: string;
  title: string;
  options: Array<{
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
}
