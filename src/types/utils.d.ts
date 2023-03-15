type DatabaseConstraintError = {
  type: 'unique' | 'check' | 'not null' | 'foreign key' | 'unknown';
  columnName?: string;
  message?: string;
};

type NewLinkRequest = {
  orignalUrl: string;
};

type AuthRequest = {
  username: string;
  password: string;
};
