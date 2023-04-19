type Person = {
  firstName: string;
  lastName: string;
};

interface Props {
  text: string;
  ok: boolean;
  i: number;
  person: Person;
}

export const TextField: React.FC <Props>= () => {
  return <div></div>;
};
