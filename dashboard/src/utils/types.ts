export type Guild = {
  guilds: {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: string;
    features: string[];
  };
  id: string;
};
