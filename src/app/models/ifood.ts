export interface ifood {
    id?: string;
    category: string;
    description?: {
      ar: string;
      en: string;
    };
    details?: {
      comboOptions: boolean;
      drinks: boolean;
      extras: boolean;
      bread: boolean;
      size?: Array<{
        price: number;
        title?: {
          ar: string;
          en: string;
        };
      }>;
    };
    image: string;
    imageWithCombo?: string;
    price: number;
    title: {
      ar: string;
      en: string;
    };
    //softDel:true;
  }
  