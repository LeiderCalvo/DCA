export enum PersistanceKeys {
  "STORE" = "STORE",
}

const get = <T>({
  key,
  defaultValue,
}: {
  key: PersistanceKeys;
  defaultValue: T;
}): T => {
  const value = localStorage.getItem(key) || sessionStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};

const set = ({
  key,
  value,
  session = false,
}: {
  key: PersistanceKeys;
  value: unknown;
  session?: boolean;
}) => {
  const storage = session ? sessionStorage : localStorage;
  const parsed = JSON.stringify(value);
  storage.setItem(key, parsed);
};

export default {
  get,
  set,
};
